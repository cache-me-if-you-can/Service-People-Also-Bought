import http from "k6/http";
import { check, sleep } from "k6";

const maxId = 10e6;
const minId = 1;

export const options = {
  vus: 25,
  duration: '60s',
  rps: 1000,
};

export default function () {
  const stockId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;
  const res = http.get(`http://localhost:3006/api/alsobought/${stockId}`);
  check(res, {
    'status was 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 200
  });
}
