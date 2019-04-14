const bars = document.querySelectorAll('.bar')
const navBtn = document.querySelector('.navBtn')
const navBg = document.querySelector('.bigNavBg')
const nav = document.querySelector('nav')
const openNav = () => {
    navBtn.classList.toggle('active');
    bars.forEach(bar => bar.classList.toggle('active'))
    navBg.classList.toggle('active');
    nav.classList.toggle('active');
}

navBtn.addEventListener('click',openNav)
