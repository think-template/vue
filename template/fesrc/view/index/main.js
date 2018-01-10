function component() {
  var element = document.createElement('pre');
  var btn = document.createElement('button');

  element.innerHTML = '首页内容1111'
  return element;
}

document.body.appendChild(component());
