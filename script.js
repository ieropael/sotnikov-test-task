function makeTask(task) {
  const p = document.createElement('p');
  const h2 = document.createElement('h2');
  h2.innerText = task;
  p.append(h2);
  document.body.append(p);
  return p;
}



// Task 1.1

const p = document.createElement('p');
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
  button.style.color = '#fff';
  button.style.backgroundColor = colors[i];
  button.innerText = colors[i];
  i > 5 ? i = 0 : i++;
});

makeTask('Task 1.1').append(button);



// Task 1.2

const inputField = document.createElement('input');
const outputField = document.createElement('input');

inputField.addEventListener('input', () => {
  inputField.value = inputField.value.replace(/[^\d,.]/g, '');
  outputField.value = inputField.value.split(',').reduce((acc, curr) => acc + +curr, 0);
});

makeTask('Task 1.2').append(inputField, outputField);



// Task 1.3

const obj = {
  data: [
    { itemId: 1, itemName: 'пункт №1', itemParentId: 0 },
    { itemId: 2, itemName: 'пункт №1.1', itemParentId: 1 },
    { itemId: 3, itemName: 'пункт №1.2', itemParentId: 1 },
    { itemId: 4, itemName: 'пункт №1.2.1', itemParentId: 3 },
    { itemId: 5, itemName: 'пункт №1.2.2', itemParentId: 3 },
    { itemId: 6, itemName: 'пункт №1.2.3', itemParentId: 3 },
    { itemId: 7, itemName: 'пункт №2', itemParentId: 0 },
    { itemId: 8, itemName: 'пункт №3', itemParentId: 0 },
    { itemId: 9, itemName: 'пункт №3.1', itemParentId: 8 },
    { itemId: 10, itemName: 'пункт №3.2', itemParentId: 8 },
    { itemId: 11, itemName: 'пункт №3.3', itemParentId: 8 },
    { itemId: 12, itemName: 'пункт №3.3.1', itemParentId: 11 },
    { itemId: 13, itemName: 'пункт №3.3.1.1', itemParentId: 12 },
    { itemId: 14, itemName: 'пункт №3.3.1.2', itemParentId: 12 },
    { itemId: 15, itemName: 'пункт №3.3.1.3', itemParentId: 12 },
    { itemId: 16, itemName: 'пункт №3.3.2', itemParentId: 11 },
    { itemId: 17, itemName: 'пункт №4', itemParentId: 0 },
    { itemId: 18, itemName: 'пункт №5', itemParentId: 0 },
    { itemId: 19, itemName: 'пункт №5.1', itemParentId: 18 }
  ]
}

const data = obj.data;

function makeList(data, i = 0, parent = { 0: document.createElement('ul') }) {
	if (i === data.length) {
    return parent[0];
  }
  
  const listItem = document.createElement('li');
  listItem.textContent = data[i].itemName;
   
  if (data[i + 1] && data[i].itemId === data[i + 1].itemParentId) {
  	const list = document.createElement('ul');
  	listItem.append(list);
   
  	parent[data[i].itemId] = list;
  }
  
  parent[data[i].itemParentId].append(listItem);
  
  return makeList(data, i + 1, parent);
}

makeTask('Task 1.3').append(makeList(data));



// Task 2.1

const headers = [];

for (let i = 0; i < 3; i++) {
  headers.push(document.createElement('h3'));
  headers[i].textContent = 'Привет Мир';
}

makeTask('Task 2.1').append(...headers);

const h3 = $('h3')[0];

h3.append('!!!');

$('h3').css('color', (index) => {
  if (index === 0) {
    return 'red';
  }
});

document.body.append(h3);



// Task 2.2

$('li').each(function(i, item) {
  item.innerHTML = item.innerHTML.replaceAll('пункт №', '');
});



// Task 2.3

$.ajax(
  'test.php',
  {
    success: (data) => {
      makeTask('Task 2.3').append(data);
    },
    error: () => {
      alert('Ошибка при получении данных');
    },
  },
);
