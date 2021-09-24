const roll_btn = document.querySelector(".button");
const count1 = document.querySelectorAll(".count1");
const count2 = document.querySelectorAll(".count2");

console.log(count1)


roll_btn.addEventListener("click",function(){
    let a = getrandom();
    console.log(a)
    for(let i=0;i<count1.length;i++)
    {
        count1[i].classList.remove("active");
        if(i==a)
        {
            count1[i].classList.add("active");
        }
    }
})

roll_btn.addEventListener("click",function(){
    let b = getrandom();
    console.log(b)
    for(let i=0;i<count1.length;i++)
    {
        count2[i].classList.remove("active");
        if(i==b)
        {
            count2[i].classList.add("active");
        }
    }
})


function getrandom(){
    return Math.floor(Math.random()*6);
}


const btn = document.querySelector(".nav-btn");
const container = document.querySelector(".links-container");
const links = document.querySelector(".links");

btn.addEventListener("click",function(){
    container.classList.toggle("show");
    const container_height = container.getBoundingClientRect().height;
    console.log(container_height);
    const links_height = links.getBoundingClientRect().height;
    console.log(links_height);
    
    if(container_height == 0){
        container.style.height = `${links_height}px`;
    }
    else{
        container.style.height = 0;
    }
})