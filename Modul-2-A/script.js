const display = document.querySelector('input[name="display"]');

function calculate() {
    try {
        const expression = display.value.replace(/\^/g, '**');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

document.querySelector('input.equal').addEventListener('click', calculate);
