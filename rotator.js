const initialText = document
  .getElementsByClassName('notion-callout__content')[0]
  .getElementsByTagName('h1')[0]
  .getElementsByTagName('strong')[0]
  .innerHTML
const firstWord = initialText.split(' ')[0]

let rotatorReference = document
  .getElementsByClassName('notion-callout__content')[0]
  .getElementsByTagName('h1')[0]
  .getElementsByTagName('strong')[0]

const rotatorWord = document.createElement('span')
rotatorWord.innerHTML = 'placeholder'

rotatorReference.appendChild(rotatorWord)

const words = [
  'test 1',
  'test 2',
  'test 3',
  //'IT-Berater', 
  //'Softwarearchitekt', 
  //'Full-Stack-Entwickler', 
  //'Experte für Digitalisierung',
  //'Experte für Single-Page-Applications'
];

const timer = (timout) => new Promise(resolve => 
  setTimeout(resolve, timout));

const rotate = async () => {
  while (true) {
    for (word of words) {
      rotatorWord.innerHTML = word
      rotatorWord.classList.toggle('fade-text')
      await timer(3000)
      rotatorWord.classList.toggle('fade-text')
      await timer(1)
    }
  }
}

rotate()