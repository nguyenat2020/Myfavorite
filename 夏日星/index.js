document.getElementById("lyric").style.display = "none";
var i = 0;
var txt = "夏日星　何故赤い？\n昨夜悲しい夢を見た\n泣いて腫らした赤い目よ\n\n\d夏日星　何故迷？\n消えた　笑しを探している\nだから　悲しい夢を見る\n\n\d\d\d夏日星　何故赤い？\n昨夜悲しい夢を見た\n泣いて腫らした赤い目よ\n\n\d夏日星　何故迷？\n消えた　笑しを探している\nだから　悲しい夢を見る";
var speed = 600;
let vid = document.getElementById("myVideo"); 
vid.onplaying = function() {
    setTimeout(typeWriter, 12000);
function typeWriter() {
    console.log("1");
  if (i < txt.length) {
    if(txt.charAt(i) == '\n') {
        document.getElementById("seg").innerHTML += "</br>";
        setTimeout(typeWriter, speed);
    } else if(txt.charAt(i) == '\d') {
        setTimeout(typeWriter, 13800);
    } else {
        document.getElementById("seg").innerHTML += txt.charAt(i);
        setTimeout(typeWriter, speed);
    }
    i++;
  }
}
};

vid.onpause = function() {
document.getElementById("lyric").style.display = "block";
i = txt.length;
document.getElementById("seg").innerHTML = "";
}
