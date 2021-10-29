function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wRBKucSrz/.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var bunny = 0;
var hawk = 0;
var frog = 0;
var crow = 0;

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        document.getElementById("top_bunny").style.color = "rgb("+random_number_r+","+random_number_b+","+random_number_g+")";
        document.getElementById("top_hawk").style.color = "rgb("+random_number_r+","+random_number_b+","+random_number_g+")";
        document.getElementById("top_frog").style.color = "rgb("+random_number_r+","+random_number_b+","+random_number_g+")";
        document.getElementById("top_crow").style.color = "rgb("+random_number_r+","+random_number_b+","+random_number_g+")";
        document.getElementById("bunny_label").style.color = "rgb("+random_number_r+","+random_number_b+","+random_number_g+")";
        document.getElementById("hawk_label").style.color = "rgb("+random_number_r+","+random_number_b+","+random_number_g+")";
        document.getElementById("frog_label").style.color = "rgb("+random_number_r+","+random_number_b+","+random_number_g+")";
        document.getElementById("crow_label").style.color = "rgb("+random_number_r+","+random_number_b+","+random_number_g+")";
        img_thing = document.getElementById("img");
        if(results[0].label=="Mirko"){
            img_thing.src='Mirko.png';
            Mirko = bunny+1;
        }
        else if(results[0].label=="Hakws"){
            img_thing.src='Hawks.png';
            Hawks = hawk+1;
        }
        else if(results[0].label=="Froppy"){
            img_thing.src='Froppy.png';
            Froppy = frog+1;
        }
        else if(results[0].label=="Tsukuyomi"){
            img_thing.src='Tsukuyomi.png';
            Tsukuyomi = crow+1;
        }
        else{
            img_thing.src='';
        }
    }
}