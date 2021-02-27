const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const findListTitel = document.querySelector('#ingredients')
const vari = ingredients.forEach(function (ingredient) {
  const addListEl = document.createElement('li')
  addListEl.textContent = ingredient
  findListTitel.append(addListEl)
})


