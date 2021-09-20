var buttons = document.querySelectorAll('.drum');


for (var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function (){
        var ch = this.innerHTML;
        cases(ch);
        animation(ch);
    });
}

document.addEventListener('keypress', function(event){
    var ch = event.key;
    cases(ch);
    animation(ch);
});

function cases(ch){
    var audios = ['sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3',
                      'sounds/snare.mp3','sounds/crash.mp3','sounds/kick-bass.mp3'];
    switch (ch){
        case 'w':
            var audio = new Audio(audios[0]);
            audio.play();
        break;
        case 'a':
            var audio = new Audio(audios[1]);
            audio.play();
        break;
        case 's':
            var audio = new Audio(audios[2]);
            audio.play();
        break;
        case 'd':
            var audio = new Audio(audios[3]);
            audio.play();
        break;
        case 'j':
            var audio = new Audio(audios[4]);
            audio.play();
        break;
        case 'k':
            var audio = new Audio(audios[5]);
            audio.play();
        break;
        case 'l':
            var audio = new Audio(audios[6]);
            audio.play();
        break;
        default:
            console.log(ch);
        }
}
function animation(key){
    document.querySelector("."+key).classList.add('pressed');
    setTimeout(function(){document.querySelector("."+key).classList.remove('pressed');},100);
}