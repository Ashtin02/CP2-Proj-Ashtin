
async function fetchData(){
    let button = document.getElementById("MemeButton");
    button.addEventListener("click", async () =>{
        try{
        let {url: memeUrl, id: MemeId} = await getMemeData();
        ReplaceImg(memeUrl);

        let topCaption = document.getElementById("caption0").value;
        let botCaption = document.getElementById("caption1").value;

        captionMeme(MemeId, "AshRiv", "Riv02$00$",topCaption, botCaption )
        }catch (error){
            handleError(error);
        }



    });
}

async function getMemeData(){
    let resp = await fetch("https://api.imgflip.com/get_memes");
    await statusCheck(resp); 
    let data = await resp.json();
    let url = data.data.memes[0].url;
    let id = data.data.memes[0].id;
    return {url, id};
    
}


function ReplaceImg(url){
    let oldImg = document.getElementById("MemePicture");
    let memeContainer = document.getElementById("MemeContainer")
    let newImg = document.createElement("img");
    newImg.src = url;
    newImg.alt = "Meme"
    newImg.id = "MemePicture"

    memeContainer.replaceChild(newImg, oldImg);


}

async function captionMeme(memeId, userName, Password, text0, text1){
    
}

fetchData();


async function handleError(err){
    console.error(err)
}
async function statusCheck(response){
if(!response.ok){
    throw new Error(await response.text());
}
return response; 
}