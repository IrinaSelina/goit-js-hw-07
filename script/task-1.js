const  navListItemEl= document.querySelectorAll('li.item')
console.log(`В списке ${navListItemEl.length} категории`);

navListItemEl.forEach(function (element) {
    const titelEl = element.querySelector('h2')
    console.log(`Категория: ${titelEl.textContent}`);
    const categoriesEl = element.querySelectorAll('li')
    console.log(`Количество элементов: ${categoriesEl.length}`);
    // console.log(element);
})
