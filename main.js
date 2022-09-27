x = 0;
y = 0;
draw_apple = "";
number = 0;
w = window.innerWidth;
h = window.innerHeight;
var appleIMG = '';
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start();
}
recognition.onresult = function (event) {
  console.log(event);
  content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
  number = Number(content);
  if(Number.isInteger(number)){
    draw_apple = 'set';
  }
}
function preload() {
  appleIMG = loadImage('apple.png');
}
function setup() {
  canvas = createCanvas(w, h-150);

}
function draw() {
  if (draw_apple == "set") {
    for(i=1;i<=number;i++){
      x = Math.floor(Math.random()*w-100);
      y = Math.floor(Math.random()*h-200);
      image(appleIMG, x, y, 100, 100);
    }
    document.getElementById("status").innerHTML = number + " Apples drawn";
    draw_apple = "";
    speak();
  }
}
function speak() {
  var synth = window.speechSynthesis;
  speak_data = number + " Apples drawn";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
}
