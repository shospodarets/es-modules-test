if (window.Worker) {
    const worker = new Worker("./js/web-worker/web-worker-module.js", {type: "module"});

    worker.postMessage('test');// Start the worker.

    worker.addEventListener('message', function (e) {
        document.body.classList.add('web-worker-yes');
    });
}