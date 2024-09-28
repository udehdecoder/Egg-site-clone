let button = document.getElementById("button")
let button1 = document.getElementById("button1")
        let input = document.getElementById("input")
        let body = document.querySelector("body")
        let dark = document.getElementById("dark")
        let light = document.getElementById("light")
        console.log(body)
        dark.addEventListener("click", function(){
            if(body.style.background = "linear-gradient(to top, rgb(247, 243, 243), rgb(100 250 250))"){
                body.style.background = "#000"
                body.style.color = "#fff"
                dark.id ="disDark"
                light.id = "appLight"
                //  dark.textContent = "BrightMode"
            }


        })
        light.addEventListener("click", function(){
            if(body.style.background = "#000"){
                body.style.background = "linear-gradient(to top,rgb(247, 243, 243), rgb(100 250 250))"
                body.style.color = "#000"
                light.id = "light"
                dark.id = "dark"
            }
        })
         
        console.log("hello world")

        button1.addEventListener("click", function(){
            console.log("click")
                input.value = "";
            
        })

        input.addEventListener("keypress", function(event){
            body.style.background = 'BL'
            console.log(event.which)
            if (input.value.length > 0 && event.which == 13){

                input.value ="";

            }
        })