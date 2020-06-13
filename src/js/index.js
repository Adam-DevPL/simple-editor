import '../scss/main.scss';

/* place your code below */

const textEditor = document.querySelector('.textarea--js');
const loadButton = document.querySelector('.button__load--js');
const saveButton = document.querySelector('.button__save--js'); 

saveButton.addEventListener('click', () => {
    const textEditorString = JSON.stringify(textEditor.value);
    localStorage.setItem('textarea', textEditorString);
    textEditor.value = '';
})

loadButton.addEventListener('click', () => {
    const textEditorObject = JSON.parse(localStorage.getItem('textarea'));
    textEditor.value = textEditorObject;
})