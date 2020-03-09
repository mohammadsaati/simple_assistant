const talk = document.querySelector('#talk');
const message = document.querySelector('#talk-msg');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recongnition = new SpeechRecognition();

const greatting = ['Iam good' , 'Iam not good I have a cold' , 'Thanks for asking , how are you'];
const where = ['Iam from unitedstate' , 'Iam from another country , howeve I an help for you'];

recongnition.onstart = () => {
  console.log('recording is active!')
}

recongnition.onresult = (event) => {
    const current = event.resultIndex;

    const text = event.results[current][0].transcript;
    readShow(text)
    console.log(text);
}

talk.addEventListener('click' , () => {
    recongnition.start();
})

const readShow = (msg) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = msg;

    if (msg.includes('how are you')) {
       const message =  greatting[Math.floor(Math.random() * greatting.length)];
       speech.text = message;
    }

    if (msg.includes('what\'s your name')) {
        speech.text = "my programmer is mohammad , he called me mohammad two"
    }

    if (msg.includes('hello')) {
        speech.text = "hello , How can I help for you?"
       
    }

    if (msg.includes('where are you from')) {
        
        const message = where[Math.floor(Math.random() * where.length)];
        speech.text = message;
    }



    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}