const bars = document.querySelectorAll('.bar')
const navBtn = document.querySelector('.navBtn')
const navBg = document.querySelector('.bigNavBg')
const nav = document.querySelector('nav')
const li = document.querySelectorAll('nav ul li')
let flag = false;

const addClassLi = () =>{
    li.forEach(li => li.classList.toggle('active'))
}

const openNav = () => {
    navBtn.classList.toggle('active');
    bars.forEach(bar => bar.classList.toggle('active'))
    navBg.classList.toggle('active');
    nav.classList.toggle('active');
    if(flag == true){
        li.forEach(li => li.classList.toggle('active'))
    }else{
        setTimeout(addClassLi,1000)
    }
    flag = !flag;
}

navBtn.addEventListener('click',openNav)
