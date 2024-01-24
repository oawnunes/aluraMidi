function playAudio(audioSelector) {
    const element = document.querySelector(audioSelector);

    if (element != null && element.localName === 'audio') {
        element.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const keyList = document.querySelectorAll('.tecla');


for (let keyCounter = 0; keyCounter < keyList.length; keyCounter++) {

    const key = keyList[keyCounter];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`;

    key.onclick = function () {
        playAudio(idAudio);
    }

    key.onkeydown = function (event) {
        if (event.code === "Enter" || event.code === "Space" || event.code === "NumpadEnter") {
            key.classList.add("ativa");
        }
    }

    key.onkeyup = function () {
        key.classList.remove("ativa");
    }

}
