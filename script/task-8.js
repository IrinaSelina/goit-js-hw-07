
const mainBox = document.querySelector('#controls');
const input = mainBox.firstElementChild;
const buttonRender = document.querySelector('[data-action="render"]');
const buttonDestroy = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById('boxes');

let amount = 0;
function getAmount(e) {
    amount = +e.target.value;
    return amount;
}
buttonRender.addEventListener('click', function () {
    boxes.append(...createBoxes(amount));
});
buttonDestroy.addEventListener('click', destroyBoxes);

input.addEventListener('input', getAmount)
function createBoxes(amount) {
    // boxes.innerHTML = ''
    const basicSize = 30;
    let acc = []
    for (let i = 1; i <= amount; i +=1){
        let size = basicSize + i * 10
        const makeDiv = document.createElement('div');
        makeDiv.style.backgroundColor = `rgba( ${random()} , ${random()} , ${random()})`;
        makeDiv.style.height = `${size}px`;
        makeDiv.style.width = `${size}px`;
        makeDiv.style.marginTop = `30px`;
        acc.push(makeDiv);
    }
    return acc
}
function destroyBoxes() {
    console.log('Показать удаление');
    boxes.innerHTML = "";
  }

function random() {
    return Math.floor(Math.random() * 256);
}



