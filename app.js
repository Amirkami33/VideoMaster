// ===============================
// ViCut App
// ===============================


// عناصر صفحه

const fileInput = document.getElementById("file");
const chooseVideo = document.getElementById("chooseVideo");

const video = document.getElementById("video");

const placeholder = document.querySelector(".placeholder");

const marker = document.querySelector(".marker");

const timeText = document.querySelector(".time-text");



// ===============================
// انتخاب ویدیو
// ===============================


chooseVideo.addEventListener("click", function(e){

    e.preventDefault();

    fileInput.click();

});




// ===============================
// دریافت ویدیو
// ===============================


fileInput.addEventListener("change", function(){


    const file = this.files[0];


    if(!file){

        return;

    }



    const videoURL = URL.createObjectURL(file);



    video.src = videoURL;


    video.load();



    // حذف صفحه انتخاب

    if(placeholder){

        placeholder.style.display = "none";

    }



    if(chooseVideo){

        chooseVideo.remove();

    }



});






// ===============================
// اطلاعات ویدیو
// ===============================


video.addEventListener("loadedmetadata", function(){


    timeText.innerHTML =

    "00:00 / " +

    formatTime(video.duration);



});






// ===============================
// حرکت تایم لاین
// ===============================


video.addEventListener("timeupdate", function(){


    if(!video.duration){

        return;

    }



    let percent =

    (video.currentTime / video.duration) * 90 + 5;



    marker.style.left = percent + "%";



    timeText.innerHTML =

    formatTime(video.currentTime)

    +

    " / "

    +

    formatTime(video.duration);



});








// ===============================
// ابزارها
// ===============================


const tools = document.querySelectorAll(".tool");


tools.forEach(tool => {


    tool.addEventListener("click", function(){



        tools.forEach(item=>{

            item.classList.remove("active");

        });



        this.classList.add("active");



    });



});








// ===============================
// تبدیل زمان
// ===============================


function formatTime(seconds){


    if(isNaN(seconds)){

        return "00:00";

    }



    let minutes = Math.floor(seconds / 60);


    let secondsPart = Math.floor(seconds % 60);



    if(secondsPart < 10){

        secondsPart = "0" + secondsPart;

    }



    return minutes + ":" + secondsPart;


}
