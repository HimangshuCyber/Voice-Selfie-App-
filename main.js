//Variables
var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
//Functions
function start(){
    document.getElementById('voice').innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById('voice').innerHTML = content;
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    var speak_data = document.getElementById('voice').value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    if(speak_data == 'take my selfie'){
        Webcam.attach(camera);
    }
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
var camera = document.getElementById('camera');