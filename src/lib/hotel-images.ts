import pool01 from "../assets/pool-01.jpg.asset.json";
import pool02 from "../assets/pool-02.jpg.asset.json";
import pool03 from "../assets/pool-03.jpg.asset.json";
import pool04 from "../assets/pool-04.jpg.asset.json";
import pool05 from "../assets/pool-05.jpg.asset.json";
import pool06 from "../assets/pool-06.jpg.asset.json";
import pool07 from "../assets/pool-07.jpg.asset.json";
import pool08 from "../assets/pool-08.jpg.asset.json";
import pool09 from "../assets/pool-09.jpg.asset.json";
import pool10 from "../assets/pool-10.jpg.asset.json";
import pool11 from "../assets/pool-11.jpg.asset.json";
import pool12 from "../assets/pool-12.jpg.asset.json";
import pool13 from "../assets/pool-13.jpg.asset.json";
import pool14 from "../assets/pool-14.jpg.asset.json";
import pool15 from "../assets/pool-15.jpg.asset.json";
import pool16 from "../assets/pool-16.jpg.asset.json";
import pool17 from "../assets/pool-17.jpg.asset.json";
import terrace01 from "../assets/terrace-01.jpg.asset.json";
import terrace02 from "../assets/terrace-02.jpg.asset.json";
import terrace03 from "../assets/terrace-03.jpg.asset.json";
import lounge01 from "../assets/lounge-01.jpg.asset.json";
import lounge02 from "../assets/lounge-02.jpg.asset.json";
import lounge03 from "../assets/lounge-03.jpg.asset.json";
import view01 from "../assets/view-01.jpg.asset.json";

export const poolImages = [
  pool01,
  pool02,
  pool03,
  pool04,
  pool05,
  pool06,
  pool07,
  pool08,
  pool09,
  pool10,
  pool11,
  pool12,
  pool13,
  pool14,
  pool15,
  pool16,
  pool17,
];

export const terraceImages = [terrace01, terrace02, terrace03];
export const loungeImages = [lounge01, lounge02, lounge03];
export const viewImages = [view01];

export const allImages = [...poolImages, ...terraceImages, ...loungeImages, ...viewImages];

export const heroImages = [pool12, terrace03, pool01];

export const featuredImages = {
  hero: pool12,
  pool: pool01,
  terrace: terrace03,
  lounge: lounge01,
  view: view01,
};
