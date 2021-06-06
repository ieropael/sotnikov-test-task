const button = document.createElement('button');
const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Indigo',
  'Violet'
]
let i = 0;
button.style.width = '100px';
button.style.height = '30px';
button.innerText = 'Click me';
button.addEventListener('click', () => {
  button.style.backgroundColor = colors[i];
  button.innerText = colors[i];
  i > 5 ? i = 0 : i++;
});
document.body.append(button);

const inputField = document.createElement('input');
const outputField = document.createElement('input');
inputField.addEventListener('input', () => {
  inputField.value = inputField.value.replace(/[^\d,.]/g, '');
  outputField.value = inputField.value.split(',').reduce((acc, curr) => acc + +curr, 0);
});

document.body.append(inputField, outputField);
