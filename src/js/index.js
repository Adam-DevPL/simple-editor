import '../scss/main.scss';

/* place your code below */

const textEditor = document.querySelector('.textarea--js');
const loadButton = document.querySelector('.button__load--js');
const saveButton = document.querySelector('.button__save--js'); 

saveButton.addEventListener('click', () => {
    localStorage.setItem('textarea', textEditor.value);
    textEditor.value = '';
})

loadButton.addEventListener('click', () => {
    textEditor.value = localStorage.getItem('textarea');
})