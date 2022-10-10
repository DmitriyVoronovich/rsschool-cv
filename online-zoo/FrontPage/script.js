// Burger
let burger = document.querySelector('.burger-header');
let header = document.querySelector('.header');
let box_logo = document.querySelector('.box-logo');
let logo_text = document.querySelector('.logo-text');
let logo = document.querySelector('.logo');
const navigation = document.querySelector('.navigation');
const des = document.querySelector('.des');
let desId =document.getElementById('Designed')
const shadow =document.querySelector('.shadow')

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    header.classList.toggle('active');
    box_logo.classList.toggle('active');
    logo_text.classList.toggle('active');
    logo.classList.toggle('active');
    navigation.classList.toggle('active');
    des.classList.toggle('active');
    desId.classList.toggle('active');
    shadow.classList.toggle('active');
});
let area = document.querySelector('.shadow_area');
area.addEventListener('click', () => {
    burger.classList.toggle('active');
    header.classList.toggle('active');
    box_logo.classList.toggle('active');
    logo_text.classList.toggle('active');
    logo.classList.toggle('active');
    navigation.classList.toggle('active');
    des.classList.toggle('active');
    desId.classList.toggle('active');
    shadow.classList.toggle('active');
});