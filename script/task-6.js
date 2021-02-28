const refs = {
    input: document.querySelector("#validation-input"),
    dataLength: document.querySelector('[data-length]')
}
refs.input.addEventListener('blur', onInputBlur)
function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        if (event.currentTarget.classList.contains('invalid')) {
           event.currentTarget.classList.remove('invalid') 
        }
        event.currentTarget.classList.add('valid')
    }
    if (event.currentTarget.value.length != Number(event.currentTarget.dataset.length)) {
         if (event.currentTarget.classList.contains('valid')) {
           event.currentTarget.classList.remove('valid') 
        }
        event.currentTarget.classList.add('invalid')

    }
    if (event.currentTarget.value.length === 0) {
        if (event.currentTarget.classList.contains('invalid')) {
           event.currentTarget.classList.remove('invalid') 
        }
        if (event.currentTarget.classList.contains('valid')) {
           event.currentTarget.classList.remove('valid') 
        }
    }
      
}  





