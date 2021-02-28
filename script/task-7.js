const refs = {
    input: document.querySelector("#font-size-control"),
    span:document.querySelector("#text"),
}
refs.input.addEventListener('input', changeFontSize) 
function changeFontSize(event) {
    console.log(refs.span.style.fontSize);
    refs.span.style.fontSize = `${event.currentTarget.value}px`
}

