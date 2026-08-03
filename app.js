const videoInput = document.getElementById("videoInput");
const selectVideo = document.getElementById("selectVideo");

const videoPlayer = document.getElementById("videoPlayer");
const emptyText = document.querySelector(".empty-text");


const tools = document.querySelectorAll(".tool");

const toolTitle = document.getElementById("toolTitle");
const toolContent = document.getElementById("toolContent");



// باز کردن انتخاب ویدیو

selectVideo.addEventListener("click", function(){

    videoInput.click();

});




// دریافت ویدیو

videoInput.addEventListener("change", function(){

    const file = this.files[0];


    if(!file){
        return;
    }


    const url = URL.createObjectURL(file);


    videoPlayer.src = url;


    emptyText.style.display = "none";


    selectVideo.style.display = "none";


    console.log("Video:", file.name);

});





// ابزارها


tools.forEach(tool => {


    tool.addEventListener("click", function(){


        tools.forEach(item=>{

            item.classList.remove("active");

        });


        this.classList.add("active");


        let name = this.dataset.tool;


        openTool(name);


    });


});





function openTool(name){


    if(name === "cut"){

        toolTitle.innerHTML="✂️ برش";

        toolContent.innerHTML=`

        <p>انتخاب محدوده ویدیو</p>

        <input type="range">

        `;

    }



    else if(name === "audio"){


        toolTitle.innerHTML="🎵 صدا";

        toolContent.innerHTML=`

        <p>تنظیم صدا</p>

        <input type="range">

        `;


    }



    else if(name === "text"){


        toolTitle.innerHTML="📝 متن";

        toolContent.innerHTML=`

        <input placeholder="متن خود را وارد کنید">

        `;


    }



    else{


        toolTitle.innerHTML=name;

        toolContent.innerHTML="به زودی اضافه می‌شود";


    }


}
