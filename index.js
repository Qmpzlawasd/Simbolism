var imageSources = ["s1.jpeg", "s2.jpeg", "s3.jpeg"];

var index = 0;
setInterval(function () {
  if (index === 3) {
    index = 0;
  }
  document.getElementById("image").src = imageSources[index];
  index++;
}, 2000);
