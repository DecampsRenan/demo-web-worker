console.log('[FORM WORKER] I\'m running!');

let counter = 0;

setInterval(() => {
    postMessage(counter++);
}, 1000);