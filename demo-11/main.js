// import _ from 'lodash';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

var div = document.createElement('div');
var text = document.createTextNode('demo-01');
div.appendChild(text)
document.querySelector('body').appendChild(div);