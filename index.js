let button = document.getElementById("button1")
let button2 = document.getElementById("button1")
let button3 = document.getElementById("button1")
let first = document.getElementById("slider1")
let second = document.getElementById("slider2")
let third = document.getElementById("slider3")
let intro = document.getElementById("intro")
let backgroundchanger = document.getElementById("backgroundchanger")
let about = document.getElementById("about")
let popbox = document.getElementById("popbox")
let popbox2 = document.getElementById("popbox2")
let arrow = document.getElementById("arrow")




function changer1(){
    first.style.display ="block"
    second.style.display = "none"
    third.style.display = "none"
    // first.style.transition = "1s"
    // second.style.display = "none"
    // third.style.display = "none"
    backgroundchanger.style.backgroundImage ="url(images/slider.jpeg)"
    backgroundchanger.style.backgroundSize = "100%"
    backgroundchanger.style.backgroundPosition = "center"
    // backgroundchanger.style.backgroundRepeat = "no-repeat"
    // // backgroundchanger.style.transition = "1s"

    // console.log(first)
    // console.log("working")
}
function changer2(){
    first.style.display ="none"
    second.style.display = "block"
    third.style.display = "none"
    backgroundchanger.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(images/slider2.jpeg)"
    backgroundchanger.style.backgroundSize = "100%"
    backgroundchanger.style.backgroundRepeat="no-repeat"
    // backgroundchanger.style.transition = "1s"


    
    console.log(backgroundchanger)

}
function changer3(){
    first.style.display ="none"
    second.style.display = "none"
    third.style.display = "block"
    backgroundchanger.style.background = "linear-gradient(0deg, rgba(138, 138, 138, 0.5), rgba(138, 138, 138, 0.5)), url(images/slider3.jpeg)"
    backgroundchanger.style.backgroundSize = "100%"
    backgroundchanger.style.backgroundRepeat="no-repeat"

    // backgroundchanger.style.transition = "1s"

    console.log("working")

}
function aboutDropdown(){
    if(about.style.display === "none"){
        about.style.display = "flex";
        document.getElementById("arrow").src ="images/arrow2/svg"
    
    }
    else{
        about.style.display = "none"
        document.getElementById("arrow").src ="images/arrow1/svg"

    }
    console.log('working')
}

function Mission(){
    if(popbox.style.display === "none"){
        popbox.style.display = "flex"
    }
    else{
        popbox.style.display = "none"
    }
    console.log('working')
}
function values(){
    if(popbox2.style.display === "none"){
        popbox2.style.display = "flex"
    }
    else{
        popbox2.style.display = "none"
    }
    console.log('working')
}