let heading = document.getElementById("heading")
    console.log(heading)
    console.log(event)
    console.log(heading.innerHTML)
    console.log(heading.innerText)

    heading.onclick=(event)=>{
        alert("don't click on the heading")
    }

    let form1=document.getElementById("form")
    console.log(form1)

    form1.addEventListener("submit",(event)=>{
        event.preventDefault()
        console.log(event)
        console.log("form submitted")
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        console.log(event.target[2].value)
    })

//    <---------------- // http://127.0.0.1:5500/frontend/DOM/recap.html?(this question mark shows the data is stored in the url 
    // but if we use preventdefault we can just stop it from storing somewere)-------------------->



    let red1=document.getElementById("red")
    let green1=document.getElementById("green")
    let blue1=document.getElementById("blue")

    let red1Value = 0
    let green1Value=0
    let blue1Value=0

    red1.addEventListener("change",(event)=>{
        console.log(event.target.value)
        red1Value = event.target.value
        applyColor()
        applyColor2()
    })

        green1.addEventListener("change",(event)=>{
        console.log(event.target.value)
        green1Value = event.target.value
        applyColor()
        applyColor2()
    })

        blue1.addEventListener("change",(event)=>{
        console.log(event.target.value)
        blue1Value = event.target.value
        applyColor()
        applyColor2()
    })

    function applyColor(){
        document.getElementById("box").style.background=`rgba(${red1Value},${green1Value},${blue1Value})`
    }

    applyColor()


    //     function applyColor2(){
    //     document.getElementById("box").style.background=`linear-gradient(${red1Value},${green1Value},${blue1Value})`
    // }

    // applyColor2()
function applyColor2() {
    document.getElementById("box").style.background =
        `linear-gradient(
            rgb(${red1Value},0,0),
            rgb(0,${green1Value},0),
            rgb(0,0,${blue1Value})
        )`;
}

applyColor2()
    


