window.addEventListener('load',()=>{
const sounds=document.querySelectorAll(".sound")
const pads=document.querySelectorAll(".pads div")
const visual=document.querySelector(".visual")
const colors=[
    "#61d5c2",
    " #e8926f",
     "#fbbe01", 
     "#f6c8d3",
     "#a1b7f1",
    " #d2b9f3"
]

pads.forEach((ele,index)=>{
ele.addEventListener('click',()=>{
    sounds[ index ].currentTime=0
    sounds[ index ].play()
    bubbling(index) 
})
})

const bubbling=(index)=>{
    let bubble=document.createElement("div")
    visual.appendChild(bubble)
    bubble.style.backgroundColor=colors[index]
    bubble.style.animation ="move 1s ease"
}


})