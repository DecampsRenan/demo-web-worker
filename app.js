(() => {
    'use strict';

    const counterElt = document.getElementById('counter');

    const worker = new Worker('worker.js');
    worker.addEventListener('message', (event) => {
        counterElt.innerText = event.data;
    });

})();