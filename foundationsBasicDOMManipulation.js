const content = document.querySelector('.content');

const redPara = document.createElement('p');
redPara.textContent = "Hey I'm red!";
redPara.style.color = 'red'; 
container.appendChild(redPara);

const blueHead3 = document.createElement('h3');
blueHead3.textContent = "Hey I'm blue!";
blueHead3.style.color = 'blue';
container.appendChild(blueHead3);

const newDiv = document.createElement('div');
newDiv.style.borderColor = 'black';
newDiv.style.backgroundColor = 'pink';

    const newHead1 = document.createElement('h1');
    newHead1.textContent = ("I'm in a div");
    newDiv.appendChild(newHead1);

    const newPara = document.createElement('p');
    newPara.textContent = ("ME TOO");
    newDiv.appendChild(newPara);

container.appendChild(newDiv);

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});