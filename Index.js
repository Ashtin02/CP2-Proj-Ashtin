"use strict";

 function fetchData(){
    let button = document.getElementById("MemeButton");
    button.addEventListener("click", async () =>{
            let api = "https://api.imgflip.com/get_memes"
            fetch(api) 
                .then(statusCheck)
                .then(resp => resp.json())
                .then(ProcessData)
                .catch(handleError)
        
        
    });
}



async function ProcessData(data){ 
    let topCaption = document.getElementById("caption0").value;
    let botCaption = document.getElementById("caption1").value;

    if(topCaption === "" || botCaption ===""){
        handleError("Please fill out both Top Section and Bottom Section before using the generate meme button.")
        return;
    }
    let memeID = data.data.memes[0].id;

    let captionMemeUrl = "https://api.imgflip.com/caption_image"


    const formData = new URLSearchParams();
    formData.append('template_id',  memeID);
    formData.append('username', 'AshRiv');
    formData.append('password', 'Riv02$00$'); 
    formData.append('text0', topCaption);
    formData.append('text1', botCaption);

    fetch(captionMemeUrl, {
        method: "POST", 
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: formData
    })
    .then(statusCheck)
    .then(resp => resp.json())
    .then(post)
    .catch(handleError)
}

fetchData();

async function handleError(err){
    alert(err)
    
}
async function statusCheck(response){
if(!response.ok){
    throw new Error(await response.text());
}
return response; 
}

async function post(data){
    let oldImg = document.getElementById("MemePicture");
    let memeContainer = document.getElementById("MemeContainer")
    let newImg = document.createElement("img");

    newImg.src = data.data.url;
    newImg.alt = "Meme"
    newImg.id = "MemePicture"

    memeContainer.replaceChild(newImg, oldImg);
};

