# IT WILL BE UP SOON IM WORKING ON IT

# Navigating Nascent Site APIS

### Note: All web APIs will be under https://nascentapis.zarcotech.dev for now

## APIs available

### Timetables API

<details>
 <summary><code>GET</code> <code><b>/timetables</b></code> <code>(gets all times sorted from fastest to slowest)</code></summary>

##### Parameters

> | name          | type     | data type | description                                                         |
> | ------------- | -------- | --------- | ------------------------------------------------------------------- |
> | `user`        | optional | string    | Times of user from fastest to slowest                               |
> | `onlyFastest` | optional | boolean   | Whether to return only the fastest time in dataset requested or not |
> | `sortSlowest` | optional | boolean   | Sort by slowest to fastest if needed                                |

##### Responses

> | http code | content-type       | response               |
> | --------- | ------------------ | ---------------------- |
> | `200`     | `application/json` | Requested data in JSON |

</details>

<details>
 <summary><code>GET</code> <code><b>/timetables/fastest</b></code> <code>(returns fastest time found)</code></summary>

##### Parameters

- None

##### Responses

> | http code | content-type       | response               |
> | --------- | ------------------ | ---------------------- |
> | `200`     | `application/json` | Requested data in JSON |

</details>

<details>
 <summary><code>GET</code> <code><b>/timetables/podium</b></code> <code>(returns top 3 times found in timetables)</code></summary>

##### Parameters

- None

##### Responses

> | http code | content-type       | response               |
> | --------- | ------------------ | ---------------------- |
> | `200`     | `application/json` | Requested data in JSON |

</details>

#### Sending requests using Unity C++/C#

Post request