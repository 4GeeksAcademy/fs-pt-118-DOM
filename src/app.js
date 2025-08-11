import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};

/*

variables

funciones

eventos


*/


//DOM --> Document Object Model --> referencia al html
const body = document.querySelector('body') // etiqueta, se pone la etiqueta tal cual (como en CSS)
const text = document.querySelector('#texto') //id, se pone el # y el id (como en CSS)
const footer = document.querySelector('.claseParaJs') //clase, se pone el . (como en CSS)
//querySelector --> devuelve uno
const lis = document.querySelectorAll('.li-item')
//document.getElementById('texto')
//document.getElementByClass('claseParaJs')
console.log(text)
console.log(footer)
console.log(lis)

console.log(typeof text)

//modificar contenido de una etiqueta HTML
text.innerHTML = 'pepe es el mejor'
text.innerText = 'lola es genial!'


const test1 = document.querySelector('#test1')
const test2 = document.querySelector('#test2')

test1.innerHTML = `
<span class='fw-bold fs-5 miSuperClase'>Modificado y con html tambien</span>
`
test2.innerText = `
<span class='fw-bold fs-5'>Modificado y con html tambien</span>
`

test2.textContent = 'pepe tam,bien'

/*
innerHtml
permite usar etiquetas html

innerText
solo modifica el texto que recibe la etiqueta, no renderiza etiquetas html
*/

const testingClase = document.querySelector('#testingClase')

const p = document.createElement('p')//creamos un elemento nuevo de html
p.innerText = 'soy el hijo de testingClase' // le asignamos texto
p.classList.add('fs-5') //añade una clase
p.classList.add('text-primary')
p.classList.remove('text-primary') // elimina una clase
p.classList.replace('fs-5', 'fw-bold') // cambia una clase por otra 
testingClase.appendChild(p) // se lo añadimos al padre
//testingClase.removeChild(p) // se lo quitamos al padre





// const arr = ['pepe', 'lola', 'maria', 'matia']

// const ulNames = document.createElement('ul') //creamos un ul
// ulNames.classList.add('list-group') //le añado clase list-group de bootstrap
// //hago loop para ir añadiendo todos los elementos del array al ul
// arr.map(el => {
//   const liName = document.createElement('li') //creamos un li
//   liName.classList.add('list-item') //le ponemos list-item de Bootstrap como clase
//   liName.innerText = el // el texto que mostrara sera el elemento por el que este iterando el array 
//   ulNames.appendChild(liName) // le añadimos el hijo al ul
// })
// //una vez el ul tiene todos los hijos, lo montamos en el html
// body.appendChild(ulNames)





const btnSusto = document.querySelector('#btnSusto')
const divSusto = document.querySelector('#susto')

const malaLecheLogger = () => console.log('si me tocas no se que hago!!!!')

btnSusto.addEventListener('click', () => {
  if (divSusto.classList.contains('hidden')) { //verificamos si tenemos la clase hidden
    divSusto.classList.replace('hidden', 'show') /// si la tenemos la cambiamos por show
  } else {
    divSusto.classList.replace('show', 'hidden') // si no la tenemos, cambiamos show por hidden
  }
  !divSusto.classList.contains('hidden') ? btnSusto.innerText = 'AY!!!! que miedo!!!' : btnSusto.innerText = "a mi nada me asusta"
})

divSusto.addEventListener('mouseover', () => {
  if (divSusto.classList.contains('show')) {
    console.log('a que no te asustabas, no?')
  }
})



btnSusto.addEventListener('click', malaLecheLogger)



//juego de las lineas aqui!

let total = 0
const top = document.querySelector('#top')
const middle = document.querySelector('#middle')
const bottom = document.querySelector('#bottom')
const score = document.querySelector('#score')


top.addEventListener('mouseover', () => {
  total--
  score.innerText = total
})
bottom.addEventListener('mouseover', () => {
  total--
  score.innerText = total
})

middle.addEventListener('mouseover', () => {
  total++
  score.innerText = total
})

//se acabo juego de las lineas!!!


let arr = [{ id: 1, name: 'pepe' }, { id: 2, name: 'lola' }, { id: 3, name: 'maria' }, { id: 4, name: 'matia' }]

const ulNames = document.createElement('ul') //creamos un ul
ulNames.classList.add('list-group') //le añado clase list-group de bootstrap
//hago loop para ir añadiendo todos los elementos del array al ul


arr.map((el) => {
  const liName = document.createElement('li') //creamos un li
  liName.classList.add('list-item') //le ponemos list-item de Bootstrap como clase
  liName.innerText = el.name // el texto que mostrara sera el elemento por el que este iterando el array
  const span = document.createElement('span')
  span.innerText = 'X'
  span.classList.add('bg-danger')
  span.classList.add('fw-bold')
  span.classList.add('cursor-pointer')
  span.addEventListener('click', () => {
    //liName.classList.add('hidden') // esto esconde
    ulNames.removeChild(liName) // esto elimina
  })
  liName.appendChild(span)
  ulNames.appendChild(liName) // le añadimos el hijo al ul
})
//una vez el ul tiene todos los hijos, lo montamos en el html
body.appendChild(ulNames)


document.querySelector('#newName').addEventListener('click', ()=> {
const liName = document.createElement('li') //creamos un li
  liName.classList.add('list-item') //le ponemos list-item de Bootstrap como clase
  liName.innerText = 'Pablo' // el texto que mostrara sera el elemento por el que este iterando el array
  const span = document.createElement('span')
  span.innerText = 'X'
  span.classList.add('bg-danger')
  span.classList.add('fw-bold')
  span.classList.add('cursor-pointer')
  span.addEventListener('click', () => {
    //liName.classList.add('hidden') // esto esconde
    ulNames.removeChild(liName) // esto elimina
  })
  liName.appendChild(span)
  ulNames.appendChild(liName) // le añadimos el hijo al ul
})


const img = document.querySelector('img')

img.setAttribute('src', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F669502%2Fpexels-photo-669502.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-goumbik-669502.jpg%26fm%3Djpg&f=1&nofb=1&ipt=ee4939c5bc2b9157dafc80c91486436c600f9408daff3455f430bcc0076f346f')
img.style.width = '100%'
img.style.height = 'auto'
img.style.maxWidth = '500px'
img.style.maxHeight = '600px'

alert('esto molesta mucho!')