let square = document.getElementById('square');

square.style.width = '100px';
square.style.height = '100px';
square.style.backgroundColor = 'red';
square.style.position = 'absolute';
square.style.textAlign = 'center';
square.style.lineHeight = '100px';
square.style.cursor = 'pointer';
square.innerText = 'click moi!!';

console.log(square)

//on va definir le style du carre
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

function moveSquare() {
    //largeur de l ecrant
    const screenWidth = window.innerWidth - 100;
    //hauteur
    const screenHeight = window.innerHeight - 100;
    // largeur aleatoir
    let newLeft = getRandomNumber(0, screenWidth);
    //hauteur aleatoir
    let newTop = getRandomNumber(0, screenHeight);

    // on donne les valeurs de top et de left a notre carré
    square.style.left = newLeft + 'px';
    square.style.top = newTop + 'px';
}

// on cree l evenement pour deplacer le carré
square.addEventListener('mouseover', () => {
    setTimeout(moveSquare, 100);
})

//on ajoute un evenement click "bravo"
square.addEventListener('click', () => {
    alert('bravo!');
})
