const reviews = [{
    id: 1,
    img:'person-1.jpeg',
    name:'susan smith',
    job:'web developer',
    text:'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.'

},
{
    id: 2,
    img:'person4.jpg',
    name:'anthony smith',
    job:'full stack developer',
    text:'Pellentesque senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.'
},
{
    id: 3,
    img: 'person2.jpg',
    name:'Joselia Pirez',
    job:'dev ops',
    text:'Lorem ipsuo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

},
{
    id: 4,
    img:'person3.jpg',
    name:'joseph august',
    job:'data analyst',
    text:'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.'

}
]
const img = document.getElementById('person-img')
const nome = document.getElementById('author')
const job = document.getElementById('job')
const text = document.getElementById('info')

const btnNext = document.querySelector('.next-btn')
const btnPrev = document.querySelector('.prev-btn')
const btnRandom = document.querySelector('.random-btn')

let currentItem = 0
let lastRandomItem = null

window.addEventListener('DOMContentLoaded',() => {
    selectPerson()
})

btnNext.addEventListener('click',() => {
    currentItem++
    currentItem >= reviews.length ? currentItem -= reviews.length : currentItem
    selectPerson()
})

btnPrev.addEventListener('click',() => {
    currentItem--
    currentItem < 0 ? currentItem += reviews.length : currentItem
    selectPerson()
})

btnRandom.addEventListener('click',() => {
    let randomItem;
    do {
        randomItem = Math.floor(Math.random() * reviews.length);
    } while (randomItem === lastRandomItem);

    lastRandomItem = randomItem;
    currentItem = randomItem;
    selectPerson();
})


function selectPerson() {
    const item = reviews[currentItem];
    img.src = item.img
    nome.textContent = item.name
    job.textContent = item.job
    text.textContent = item.text
}