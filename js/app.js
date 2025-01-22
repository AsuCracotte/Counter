const counterElement = document.querySelector('#counter');
const incrementButton = document.querySelector('#increment');
const resetButton = document.querySelector('#reset');

let count = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
counterElement.textContent = count;

incrementButton.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
    localStorage.setItem('counter', count);
});

resetButton.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = count;
    localStorage.setItem('counter', count);
});