const video = document.getElementById("video");
const button = document.getElementById("button");

// prompt to select media stream, pass to video element then play
 async function selectMediaStream () {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        }
    } catch (error) {
        console.log("woops, error here:",error)
    }
 }
 button.addEventListener('click', async () => {
    button.disabled = true;
    await video.requestPictureInPicture();
    button.disabled = false;

 })

 selectMediaStream();