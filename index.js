// Text To Speech
let msg = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
msg.voice = voices[8];
let tags = document.querySelectorAll('p,a,h1,h2,h3,h4,span,textarea,footer,ul,li,input'); // add more tags for you project
tags.forEach((tag) => {
    tag.addEventListener('click', (e) => {
        
        msg.text = e.target.innerText;
        tag.style.backgroundColor = "red";
        speechSynthesis.speak(msg);
        
        let interval = setInterval(() => {
            if(!speechSynthesis.speaking){
                tag.style.removeProperty('background-color');
                clearInterval(interval);
            }
        },);
        
    });
})


// Speech to Text
click_to_convert.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition; const recognition = new SpeechRecognition();
    recognition. interimResults = true;
    recognition.addEventListener('result', (e)=>{ const transcript = Array.from(e.results)
    .map(result =>result[0])
    .map(result => result.transcript)
    convert_text.innerHTML =transcript; 
    })

if(speech == true){
recognition.start();
}

})