if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('static/service-worker.js')
    .then(() => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err))
}
