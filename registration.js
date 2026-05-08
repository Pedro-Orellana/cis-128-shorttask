      if ('serviceWorker' in navigator) {
            //CHANGE ADDRESS OF THIS FILE
            navigator.serviceWorker.register('/cis-128-homework-4/service-worker.js')
                .then(registration => {
                    console.log('Service worker registered!');
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        }