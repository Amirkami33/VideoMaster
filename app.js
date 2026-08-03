const fileInput = document.getElementById("file");
const chooseBtn = document.getElementById("chooseVideo");

const video = document.getElementById("video");
const placeholder = document.querySelector(".placeholder");

const marker = document.querySelector(".marker");
const timeText = document.querySelector(".time-text");



// باز کردن انتخاب ویدیو

chooseBtn.addEventListener("click",()=>{

    fileInput.click();

});





// دریافت ویدیو

fileInput.addEventListener("change",()=>{


    const file = fileInput.files[0];


    if(!file) return;



    const url = URL.createObjectURL(file);


    video.src = url;


    placeholder.style.display="none";

    chooseBtn.style.display="none";


});





// وقتی اطلاعات ویدیو آماده شد

video.addEventListener("loadedmetadata",()=>{


    let total = formatTime(video.duration);


    timeText.innerHTML =
    "00:00 / " + total;


});







// حرکت نشانگر روی تایم لاین

video.addEventListener("timeupdate",()=>{


    let current = video.currentTime;

    let duration = video.duration;


    if(duration){


        let percent =
        (current / duration) * 90 + 5;


        marker.style.left =
        percent + "%";



        timeText.innerHTML =
        formatTime(current)
        +
        " / "
        +
        formatTime(duration);


    }


});







// تبدیل زمان

function formatTime(seconds){


    let min = Math.floor(seconds / 60);

    let sec = Math.floor(seconds % 60);



    if(sec < 10){

        sec="0"+sec;

    }


    return min + ":" + sec;


}
