const form=document.querySelector('#form')
const eventCards=document.querySelector('.cards')
form.addEventListener('submit',function(event){
    event.preventDefault()
    const title=eventTitle.value
    const date=eventDate.value
    const cat=category.value
    const desc=description.value

    const card=document.createElement('div')
    card.classList.add('card')
    card.innerHTML=`
        <h2>${title}</h2>
        <p>📅${date}</p>
        <button>${cat}</button>
        <p>${desc}</p>
        <div class="deleteCard">x</div>
    `

    card.querySelector('.deleteCard').addEventListener('click',function(){
        card.remove()
    })
  

    eventCards.appendChild(card)
    form.reset()
})
document.querySelectorAll(".events button")[0].addEventListener("click",function(){
    eventCards.innerHTML=""
})

document.addEventListener('keydown',(event)=>{
    document.querySelector('.key').innerText=event.key
})

document.querySelectorAll(".events button")[1].addEventListener("click",function(){
    const sampleEvents=[
        {title:"Hack KRMU 5.0",date:"2026-03-15",cat:"Competition",desc:"Hackathon"},
        {title:"JavaScript Workshop",date:"2026-02-20",cat:"Workshop",desc:"Learn advanced JavaScript concepts"},
    ]
    sampleEvents.forEach(event=>{
        const card=document.createElement("div")
        card.classList.add("card")
        card.innerHTML=`
        <h3>${event.title}</h3>
        <p>🗓️${event.date}</p>
        <button>${event.cat}</button>
        <p>${event.desc}</p>
        <div class="deleteCard">X</div>
        `
        card.querySelector(".deleteCard").addEventListener("click",function(){
            eventCards.removeChild(card)
        })
        eventCards.appendChild(card)
    })
})