import './index'
import './styles.css'

console.log('main.js')

var env = process.env.NODE_ENV;
var div = document.createElement('div');
var text = document.createTextNode('环境：' + env);
div.appendChild(text);
document.getElementsByTagName('body')[0].appendChild(div);