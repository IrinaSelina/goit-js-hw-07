const refs = {
    input: document.querySelector("#validation-input"),
    dataLength: document.querySelector('[data-length]')
}
refs.input.addEventListener('blur', onInputBlur)
function onInputBlur(event) {
    if (event.currentTarget.value.length = event.currentTarget.dataset.length) {
        event.currentTarget.classList.add('valid')
    }
    if (event.currentTarget.value.length != event.currentTarget.dataset.length) {
        event.currentTarget.classList.add('invalid')
    }
    if (event.currentTarget.value.length === 0) {
        return
    }
    return
   
}




