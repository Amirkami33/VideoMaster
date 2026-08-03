const fileInput = document.getElementById("file");
const chooseBtn = document.getElementById("chooseVideo");

const video = document.getElementById("video");
const placeholder = document.querySelector(".placeholder");


// باز کردن فایل

chooseBtn.onclick = function(){

    console.log("button clicked");

    fileInput.click();

};



// انتخاب فایل

fileInput.onchange = function(){

    const file = this.files[0];


    if(!file){

        return;

    }


    console.log("selected:", file.name);


    const videoURL = URL.createObjectURL(file);


    video.src = videoURL;


    video.style.display = "block";

    placeholder.style.display = "none";


};
