const elements = ["synth", "piano", "guitar", "trumpet", "drum", "flute"];
for (let i = 0; i < elements.length; i++) {
    {
        const element = document.getElementById(elements[i]);
        element.addEventListener("click", clicked);
    }
}

function clicked(event) {
    let element = event.target;
    let id = element.id;
    let path = 'sounds/' + id + '.wav';

    const sound = new Audio(path);
    sound.play();
}


