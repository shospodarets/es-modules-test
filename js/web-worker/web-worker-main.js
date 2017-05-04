if (window.Worker) {
    const worker = new Worker("./js/web-worker/web-worker.js", {type: "module"});

    worker.postMessage('');// Start the worker.

    worker.onmessage = () => {
        document.body.classList.add('worker-yes');
    };
}