const videoInput = document.getElementById("videoInput");
const videoPlayer = document.getElementById("videoPlayer");

const fileName = document.getElementById("fileName");
const fileSize = document.getElementById("fileSize");
const videoDuration = document.getElementById("videoDuration");


videoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {
        return;
    }


    // نمایش نام فایل
    fileName.textContent = file.name;


    // نمایش حجم فایل
    let sizeMB = (file.size / (1024 * 1024)).toFixed(2);

    fileSize.textContent = sizeMB + " MB";


    // قرار دادن ویدیو
    let videoURL = URL.createObjectURL(file);

    videoPlayer.src = videoURL;


    // گرفتن مدت زمان ویدیو
    videoPlayer.onloadedmetadata = function () {

        let minutes = Math.floor(videoPlayer.duration / 60);
        let seconds = Math.floor(videoPlayer.duration % 60);

        if(seconds < 10){
            seconds = "0" + seconds;
        }

        videoDuration.textContent = minutes + ":" + seconds;

    };


});
