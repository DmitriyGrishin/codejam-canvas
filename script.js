const context = document.getElementById("canvas").getContext("2d");

function drawCanvas(canvasImg,width,color) {
  for (let i = 0; i < canvasImg.length; i++) {
    for (let j = 0; j < canvasImg[i].length; j++) {
      if (color === "rgba")
      {
        context.fillStyle = "rgba("+canvasImg[i][j]+")";
      }
      else
      context.fillStyle = "#"+canvasImg[i][j];
      context.fillRect(i * width, j * width, width, width);
    }
  }
}

function RsImg() {
  let image = new Image(canvas.width, canvas.width);
  image.src = "data/image.png";
  image.onload = () =>
  context.drawImage(image, 0, 0, canvas.width, canvas.width);
}