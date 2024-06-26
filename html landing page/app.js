var toggle_btn;
var big_wrapper;
var hambuger_menu;

function declare(){
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
    hambuger_menu = document.querySelector(".hamburger-menu");
}
const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation()
{
    //clone the big wrapper
    dark=!dark;
    console.log(dark);
    let clone = big_wrapper.cloneNode(true);
    if(dark)
    {
        clone.classList.remove("light");
        clone.classList.add("dark");
    }
    else
    {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    clone.addEventListener("animationend",() => 
    {
        big_wrapper.remove();
        clone.classList.remove("copy");

        //reset variables
        declare();
        events();
    });
}

function events(){
    toggle_btn.addEventListener("click",toggleAnimation);
    hambuger_menu.addEventListener("click", () =>{
        big_wrapper.classList.toggle("active");
    })
}

events();