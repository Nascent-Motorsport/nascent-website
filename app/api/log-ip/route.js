import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const LOG_FILE = path.join(process.cwd(), 'sus-ips.json');
const MAX_ENTRIES = 1000;
let writeChain = Promise.resolve();

async function appendEntry(entry) {
  let logs = [];
  try {
    const raw = await fs.readFile(LOG_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      logs = parsed;
    }
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error('Could not read sus-ips.json:', err);
    }
    logs = [];
  }
  logs.push(entry);
  if (logs.length > MAX_ENTRIES) {
    logs = logs.slice(-MAX_ENTRIES);
  }
  await fs.writeFile(LOG_FILE, JSON.stringify(logs, null, 2), 'utf8');
}

export async function POST(request) {
  try {
    const data = await request.json();
    if (!data || typeof data !== 'object') {
      return NextResponse.json({ error: 'invalid payload' }, { status: 400 });
    }
    const entry = {
      ...data,
      timestamp: new Date().toISOString(),
    };
    writeChain = writeChain.then(() => appendEntry(entry));
    await writeChain;
    return NextResponse.json({ success: true });
  } catch (error) {
    writeChain = Promise.resolve();
    console.error('Failed to log suspicious request:', error);
    return NextResponse.json({ error: 'server error' }, { status: 500 });
  }
}
