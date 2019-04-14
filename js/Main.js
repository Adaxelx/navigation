const bars = document.querySelectorAll('.bar')
const navBtn = document.querySelector('.navBtn')
const nav = document.querySelector('.bigNav')
const openNav = () => {
    navBtn.classList.toggle('active');
    bars.forEach(bar => bar.classList.toggle('active'))
    nav.classList.toggle('active');
}

navBtn.addEventListener('click',openNav)
