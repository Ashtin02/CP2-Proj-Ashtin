"use strict";

 function fetchData(){
    let button = document.getElementById("MemeButton");
    button.addEventListener("click", async () =>{
        try{
            let api = "https://api.imgflip.com/get_memes"
            fetch(api) 
                .then(statusCheck)
                .then(resp => resp.json())
                .then(ProcessData)
                .catch(handleError)
        
        
        
        //captionMeme(MemeId, "AshRiv", "Riv02$00$",topCaption, botCaption )

        }catch (error){
            handleError(error);
        }
    });
}



async function ProcessData(data){ 
    let oldImg = document.getElementById("MemePicture");
    let memeContainer = document.getElementById("MemeContainer")
    let newImg = document.createElement("img");
    let topCaption = document.getElementById("caption0").value;
    let botCaption = document.getElementById("caption1").value;
    newImg.src = data.data.memes[0].url;
    newImg.alt = "Meme"
    newImg.id = "MemePicture"


    memeContainer.replaceChild(newImg, oldImg);
}

fetchData();

async function handleError(err){
    alert(console.error(err))
}
async function statusCheck(response){
if(!response.ok){
    throw new Error(await response.text());
}
return response; 
}

// async function captionMeme(memeId, userName, Password, text0, text1){
    
// }

// async function getMemeData(){
//     let api = "https://api.imgflip.com/get_memes"
//     fetch(api) 
//         .then(statusCheck)
//         .then(resp => resp.json())
//         .then(ProcessData)
//         .catch(handleError)


//     // let resp = await fetch("https://api.imgflip.com/get_memes");
//     // await statusCheck(resp); 
//     // let data = await resp.json();
//     // let url = data.data.memes[0].url;
//     // let id = data.data.memes[0].id;
// }