let counter = 0
let secondaryCounter = 10
let x = setInterval(()=>{
    console.log(counter)
    if(counter < 10) {
        document.getElementById("green").style.opacity = 0
        document.getElementById("red").style.opacity = 1
        document.getElementById("counter").innerText = secondaryCounter - counter
    }
    else if(counter == 10) {
        document.getElementById("counter").innerText = secondaryCounter
        document.getElementById("green").style.opacity = 1
        document.getElementById("red").style.opacity = 0
    
    } else if (counter < 20 && counter > 10) {
        document.getElementById("counter").innerText = secondaryCounter
        secondaryCounter--
    }  
    else if(counter == 20) {
        document.getElementById("counter").innerText = secondaryCounter
        counter = 0
        secondaryCounter = 10
    }
    counter++
}, 1000)