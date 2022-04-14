console.log("ready")

var menu=document.querySelector(".menu")
var first=document.querySelector(".first")
var second=document.querySelector(".second")
var third=document.querySelector(".third")

menu.addEventListener("click",()=>{
    menu.style.animation="slidingmenu 1s forwards"
    first.style.animation="first 1s forwards"
    second.style.animation="second 1s forwards"
    third.style.animation="third 1s forwards"
    setTimeout(()=>{
        menu.innerHTML=`
       
        <a href="#" class="menu link sidelist">Menu</a>
        <br>
        <a href="index.html" class="link sidelist">Home</a>
        <br>
        <a href="code.html" class="link sidelist">Code</a>
        <br>
        <a href=mailto:filocle4444@gmail.com class="link sidelist">Contact</a>
        `
        document.querySelector("body").addEventListener("click",()=>{
            menu.innerHTML=`<a href="#" class="menu link">Menu</a>`
            first.style.animation="firstreverse 1s forwards"
            second.style.animation="secondreverse 1s forwards"
            third.style.animation="thirdreverse 1s forwards"
            
            console.log(menu)
            menu.style="animation:slidingmenureverse 1s forward;"
            setTimeout(()=>{
                
            })
    },500)

    
    })
})
