Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})
var camera=document.getElementById("camera");
Webcam.attach(camera);
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_img">'
    })
}
console.log("ml5 version",ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aVu-RoOvo/model.json",modelloaded);
function modelloaded(){
    console.log("model has been loaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is"+ prediction_1
    speak_data_2="the second prediction is" + prediction_2
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

