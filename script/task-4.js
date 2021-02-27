let counterValue = 0
const takeSpan = document.querySelector('#value')
const takeDecrementButton = document.querySelector('[data-action="decrement"]')
const takeIncrementButton = document.querySelector('[data-action="increment"]')
function increment() {
    counterValue += 1
     takeSpan.textContent = counterValue }

    

function decrement (){
      counterValue -=1
     takeSpan.textContent = counterValue 
}
takeIncrementButton.addEventListener('click', increment)
takeDecrementButton.addEventListener('click', decrement)
