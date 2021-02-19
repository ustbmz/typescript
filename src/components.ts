export class Header {
  constructor() {
    const elm = document.createElement('div')
    elm.innerHTML = 'this is Header'
    document.body.appendChild(elm)
  }
}
export class Content {
  constructor() {
    const elm = document.createElement('div')
    elm.innerHTML = 'this is Content'
    document.body.appendChild(elm)
  }
}
export class Footer {
  constructor() {
    const elm = document.createElement('div')
    elm.innerHTML = 'this is Footer'
    document.body.appendChild(elm)
  }
}
