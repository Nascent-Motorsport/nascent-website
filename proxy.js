import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|api/log-ip|favicon\\.ico$|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|mp4|webm|mp3|mpeg|mov|woff2?|ttf|eot)$).*)",
  ],
};

const SUSPICIOUS_PATTERNS = [
  /\.env/i,
  /\.git/i,
  /\.(php|asp|aspx|jsp)$/i,
  /phpinfo/i,
  /dashboard/i,
  /admin/i,
  /server-status/i,
  /server-info/i,
  /_profiler/i,
  /_environment/i,
  /\.(bak|old|save|swp|txt|cfg|ini)$/i,
];

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded
      .split(",")[0]
      .trim()
      .replace(/^::ffff:/, "");
  }
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

async function reportScan(request) {
  const brightRed = "\x1b[91m";
  const yellow = "\x1b[33m";
  const cyan = "\x1b[36m";
  const red = "\x1b[31m";
  const reset = "\x1b[0m";

  const payload = {
    ip: getClientIp(request),
    url: request.nextUrl.pathname,
    userAgent: request.headers.get("user-agent") || "unknown",
  };
  
  // cleared ips: WEB2OBJECT, DIGITALOCEAN

  clearips = ["45.56.135.233", "162.243.46.220"];
  
  if (clearips.include(payload.ip)) return;

  console.log(
    `${brightRed}[ALERT]${reset} ip: ${cyan}${payload.ip}${reset} | path: ${red}${payload.url}${reset} on ${payload.userAgent}`,
  );

  try {
    const origin = request.nextUrl.origin;
    const protocol = request.nextUrl.protocol;
    const logUrl = `http://localhost:5040/api/log-ip`;
    console.log(logUrl);

    const response = await fetch(logUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(
        `Logging endpoint responded with status ${response.status}`,
      );
    }
  } catch (err) {
    console.error("Failed to log suspicious request:", err);
  }
}

export async function proxy(request, event) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/api/log-ip")) {
    return NextResponse.next();
  }

  const isSuspicious = SUSPICIOUS_PATTERNS.some((pattern) =>
    pattern.test(pathname),
  );

  if (!isSuspicious) {
    return NextResponse.next();
  }

  const logPromise = reportScan(request);
  event.waitUntil(logPromise);

  return new NextResponse(
    "hop off, there are no vulnerabilities its just a simple react website. stop wasting your time.",
    { status: 404 },
  );
}
