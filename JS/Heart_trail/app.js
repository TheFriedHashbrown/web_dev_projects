const body = document.querySelector("body")

body.addEventListener("mousemove", (e) =>{
    let xPos = e.offsetX
    let yPos = e.offsetY
    // The offsets show the positional values of the mouse

    const span = document.createElement("span");
    span.style.left = xPos + "px";
    span.style.top = yPos + "px";
    // ensures the position of the hearts follows the mouse movement

    const size = Math.random()*100
    span.style.width = size + "px"
    span.style.height = size + "px"
    // Causes the hearts to be random sizes

    body.appendChild(span);
    setTimeout(() => {
        span.remove();
    }, 3000)
    // deletes the elements after 3s so that unnecessary spans don't
    // exist in the HTML
})