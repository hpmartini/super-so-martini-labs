const header = document
.getElementsByClassName('notion-callout__content')[0]
.getElementsByTagName('h1')[0]
.getElementsByTagName('strong')[0]

const rotator = header.appendChild(document.createElement('span'))

const words = [
'IT-Berater', 
'Softwarearchitekt', 
'Full-Stack-Entwickler', 
];

words.forEach((word, index) => {
const span = document.createElement('span')
rotator.appendChild(span)
span.classList.add('rotator')
if (index > 0) span.classList.add('hide')
span.innerHTML = word
})

const sleep = (timout) => new Promise(resolve => 
setTimeout(resolve, timout));
const children = Array.from(rotator.children)
let firstRun = true;

const rotate = async () => {
while (true) {
  for ([index, child] of children.entries()) {
    child.classList.add('show')
    child.classList.remove('hide')
    await sleep(10)
    
    child.classList.add('fade-in')
    await sleep(2000)
    
    child.classList.remove('fade-in')
    
    await sleep(500)
    child.classList.add('hide')
    child.classList.remove('show')
  }
}
}

rotate()
