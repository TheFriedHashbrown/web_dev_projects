const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const circles = document.querySelectorAll(".circle")
let step = 1
prevBtn.disabled = true

nextBtn.addEventListener("click", () => {
    if (step <= circles.length){
        step += 1
    }
    update()
})

prevBtn.addEventListener("click", () => {
    if (step == 1){
        step = 1
    }else{
        step -= 1
    }
    update()
})

function update(){
    circles.forEach((circle, idx) => {
        if (idx < step){
            circle.classList.add("active")
        }
        else{
            circle.classList.remove("active")
        }
    })

    if (step == 1){
        prevBtn.disabled = true
    }else if (step == circles.length) {
        nextBtn.disabled = true
    }else{
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}