// VideoMaster App

const videoInput = document.getElementById("videoInput");
const videoPlayer = document.getElementById("videoPlayer");

const emptyText = document.querySelector(".empty-text");

const tools = document.querySelectorAll(".tool");

const toolTitle = document.getElementById("toolTitle");
const toolContent = document.getElementById("toolContent");




// انتخاب ویدیو

document.body.addEventListener("click", function(e){

    if(e.target.closest(".preview-area")){

        videoInput.click();

    }

});





videoInput.addEventListener("change", function(){


    const file = this.files[0];


    if(!file){
        return;
    }



    const videoURL = URL.createObjectURL(file);


    videoPlayer.src = videoURL;


    emptyText.style.display = "none";



    console.log("نام فایل:", file.name);

    console.log(
        "حجم:",
        (file.size / 1024 / 1024).toFixed(2),
        "MB"
    );


});







// ابزارها


tools.forEach(tool => {


    tool.addEventListener("click", function(){


        // حذف حالت انتخاب قبلی

        tools.forEach(t=>{

            t.classList.remove("active");

        });



        // فعال کردن ابزار انتخاب شده

        this.classList.add("active");



        let selected = this.dataset.tool;



        showTool(selected);



    });



});








function showTool(tool){


    switch(tool){


        case "cut":

            toolTitle.innerHTML="✂️ برش ویدیو";

            toolContent.innerHTML=`

            <p>انتخاب نقطه شروع و پایان</p>

            <input type="range">

            `;

        break;




        case "audio":

            toolTitle.innerHTML="🎵 تنظیم صدا";

            toolContent.innerHTML=`

            <p>ولوم صدا</p>

            <input type="range">

            `;

        break;





        case "text":

            toolTitle.innerHTML="📝 افزودن متن";

            toolContent.innerHTML=`

            <input placeholder="متن خود را بنویسید">

            `;

        break;





        case "filter":

            toolTitle.innerHTML="🎨 فیلتر";

            toolContent.innerHTML=`

            <button>روشنایی</button>

            <button>کنتراست</button>

            `;

        break;





        case "speed":

            toolTitle.innerHTML="⚡ سرعت";

            toolContent.innerHTML=`

            <button>0.5x</button>

            <button>1x</button>

            <button>2x</button>

            `;

        break;





        default:

            toolTitle.innerHTML="ابزار انتخاب شده";

            toolContent.innerHTML="به زودی اضافه می‌شود";


    }



}
