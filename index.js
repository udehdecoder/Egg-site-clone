let button = document.getElementById("button")
        let input = document.getElementById("input")
        let body = document.querySelector("body")
        let dark = document.getElementById("dark")
        console.log(body)
        dark.addEventListener("dblclick", function(){
            if(body.style.background = "linear-gradient(to top,rgb(247, 243, 243), rgb(100 250 250))"){
                body.style.background = "#000"
                body.style.color = "#fff"
                 dark.textContent = "BrightMode"
            }

        })
        // dark.addEventListener("doubleClick", function(){
        //     alert()
        //     if(body.style.background = "#000"){
        //         body.style.background = "linear-gradient(to top,rgb(247, 243, 243), rgb(100 250 250))"
        //     }
        // })
         
        console.log("hello world")

        button.addEventListener("click", function(){
            console.log("click")
                input.value = " ";
            
        })

        input.addEventListener("keypress", function(event){
            body.style.background = 'BL'
            console.log(event.which)
            if (input.value.length > 0 && event.which == 13){

                input.value ="";

            }
        })