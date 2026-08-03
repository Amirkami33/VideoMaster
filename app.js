const fileInput = document.getElementById("file");
const chooseVideo = document.getElementById("chooseVideo");

const video = document.getElementById("video");
const placeholder = document.querySelector(".placeholder");

const marker = document.querySelector(".marker");
const timeText = document.querySelector(".time-text");



// انتخاب ویدیو

chooseVideo.addEventListener("click", function(){

    fileInput.click();

});




// دریافت فایل

fileInput.addEventListener("change", function(){


    const file = this.files[0];


    if(!file){

        return;

    }



    const url = URL.createObjectURL(file);



    video.src = url;

    video.controls = true;

    video.style.display = "block";

    video.play();



    placeholder.style.display = "none";

    chooseVideo.style.display = "none";



});





// اطلاعات ویدیو

video.addEventListener("loadedmetadata", function(){


    timeText.innerHTML =

    "00:00 / " +

    formatTime(video.duration);


});






// حرکت تایم لاین

video.addEventListener("timeupdate", function(){


    if(!video.duration){

        return;

    }



    let progress =

    (video.currentTime / video.duration) * 90 + 5;



    marker.style.left = progress + "%";



    timeText.innerHTML =

    formatTime(video.currentTime)

    +

    " / "

    +

    formatTime(video.duration);


});






function formatTime(seconds){


    if(isNaN(seconds)){

        return "00:00";

    }


    let min = Math.floor(seconds / 60);

    let sec = Math.floor(seconds % 60);



    if(sec < 10){

        sec = "0" + sec;

    }



    return min + ":" + sec;

}
