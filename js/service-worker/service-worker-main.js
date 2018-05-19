if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(
        'js/service-worker/service-worker-module.js',
        {
            scope: './js/service-worker/',
            type: 'module' // 'classic' is a default value
        }
    ).then(() => {
        document.body.classList.add('service-worker-yes');
    }).catch(() => {
        document.body.classList.add('service-worker-no');
    });
}