const bars = document.querySelectorAll('.bar')
const navBtn = document.querySelector('.navBtn')
const plus = document.querySelector('.plus')

const openNav = () => {
    navBtn.classList.toggle('active');
    bars.forEach(bar => bar.classList.toggle('active'))
    plus.forEach(plus => plus.classList.toggle('active'))
}

navBtn.addEventListener('click',openNav)
