function component() {
  var element = document.createElement('pre');
  element.innerHTML = '欢迎来到首页'
  return element;
}

document.body.appendChild(component());
