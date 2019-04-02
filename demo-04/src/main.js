import printMe from './print.js'
import './style.css';
console.log('main')

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // element.innerHTML = 'hello';

    btn.innerHTML = 'Click Me!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
// console.log(module)
if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}