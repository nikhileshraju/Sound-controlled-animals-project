function start_sounds(){
    navigator.mediaDevices.getUserMedia({ audio:  true})
    ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QFIeUjGBG/model.json",modelloaded)
}

function modelloaded(){
    classifier.classify(gotResults)
}

function gotResults(error, results){
    if (error){
        console.error(error);
        }
        else {
            console.log(results)
        }
    }