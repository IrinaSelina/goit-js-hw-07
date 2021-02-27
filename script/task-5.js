const refs = {
    input: document.querySelector("#name-input"),
    output:document.querySelector('#name-output')
}

refs.input.addEventListener('input', () => {
    refs.input.value === "" ? refs.output.textContent = 'незнакомец' : refs.output.textContent = refs.input.value
})

