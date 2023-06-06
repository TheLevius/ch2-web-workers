console.log('hello from main.js');
const worker = new Worker('worker.js');
worker.onmessage = (msg) => {
	console.log('received message from worker', msg.data);
};
worker.postMessage('sent message to worker');
console.log('end of main.js');
