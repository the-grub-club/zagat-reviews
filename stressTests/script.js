import http from "k6/http";
import { check, sleep } from "k6";
export let options = {
  vus: 1700,
  duration: "180s"
};
export default function() {
  let random = Math.random();
  let randomId;
  if (random <= 0.2) {
    randomId = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  } else {
    randomId = Math.floor(Math.random() * (10000000 - 1001 + 1)) + 1001;
  }
  let res = http.get(`http://13.59.212.125:7007/restaurant/${randomId}/review`);
  // let res = http.get(`http://localhost:7007/restaurant/${randomId}/review`);
  check(res, {
    "success": (r) => r.status == 200
  });
  // sleep(1);
};
