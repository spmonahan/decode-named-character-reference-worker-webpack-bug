import "./remark-main-thread";

const worker = new Worker(new URL("./remark-worker.js", import.meta.url));
worker.postMessage("start");
