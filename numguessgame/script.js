const btn = document.getElementById('btn');
const output = document.getElementById('output');

const number = [Math.floor(Math.random() * 100)];
btn.addEventListener('click', function() {
    var input = document.getElementById('userInput').value;
    if (input == number) {
        output.innerHTML = `You guessed right, your number was ${number}`
    } else if (input < number) {
        output.innerHTML = "You guessed too low!"
    };
    if (input > number) {
        output.innerHTML = "You guessed too high!"
    }
});