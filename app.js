const fileInput = document.getElementById("file");

const chooseVideo = document.getElementById("chooseVideo");

const video = document.getElementById("video");

const placeholder = document.querySelector(".placeholder");

const marker = document.querySelector(".marker");

const timeText = document.querySelector(".time-text");





// باز کردن انتخاب ویدیو

chooseVideo.onclick = () => {

    fileInput.click();

};






// انتخاب فایل

fileInput.onchange = () => {


    let file = fileInput.files[0];


    if(!file){

        return;

    }



    let url = URL.createObjectURL(file);



    video.src = url;


    video.controls = true;


    video.load();




    // مخفی کردن دکمه و متن

    chooseVideo.style.visibility = "hidden";


    placeholder.style.display = "none";



};






// اطلاعات ویدیو

video.onloadedmetadata = () => {


    timeText.innerHTML =

    "00:00 / " +

    formatTime(video.duration);


};







// حرکت تایم لاین

video.ontimeupdate = () => {


    let percent =

    (video.currentTime / video.duration) * 90 + 5;



    marker.style.left = percent + "%";



    timeText.innerHTML =

    formatTime(video.currentTime)

    +

    " / "

    +

    formatTime(video.duration);


};







function formatTime(time){


    if(isNaN(time)){

        return "00:00";

    }


    let m = Math.floor(time / 60);

    let s = Math.floor(time % 60);



    if(s < 10){

        s = "0" + s;

    }



    return m + ":" + s;


}
