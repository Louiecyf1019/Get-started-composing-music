var dp1 = false;
var bp1 = false;
var cp1 = false;
var mp1 = false;
var dp2 = false;
var bp2 = false;
var cp2 = false;
var mp2 = false;
var dp3 = false;
var bp3 = false;
var cp3 = false;
var mp3 = false;
var dp4 = false;
var bp4 = false;
var cp4 = false;
var mp4 = false;
var t2 = window.setInterval("hello()",2360)

function hello(){
  if(dp1){
    document.getElementById('d1').className="pat";
    document.getElementById('d1').style.backgroundColor="#F6F680"
    var dd1 = document.getElementById('audio1');
    dd1.play();
  }
  if(!dp1){
    document.getElementById('d1').className="pat";
    document.getElementById('d1').style.backgroundColor="#808080"
    var dd1 = document.getElementById('audio1');
    dd1.pause();
    dd1.currentTime = 0;
  }
  if(bp1){
    document.getElementById('b1').className="pat";
    document.getElementById('b1').style.backgroundColor="#AFF680"
    var bb1 = document.getElementById('audio2');
    bb1.play();
  }
  if(!bp1){
    document.getElementById('b1').className="pat";
    document.getElementById('b1').style.backgroundColor="#808080"
    var bb1 = document.getElementById('audio2');
    bb1.pause();
    bb1.currentTime = 0;
  }
  if(cp1){
    document.getElementById('c1').className="pat";
    document.getElementById('c1').style.backgroundColor="#FF88FF"
    var cc1 = document.getElementById('audio3');
    cc1.play();
  }
  if(!cp1){
    document.getElementById('c1').className="pat";
    document.getElementById('c1').style.backgroundColor="#808080"
    var cc1 = document.getElementById('audio3');
    cc1.pause();
    cc1.currentTime = 0;
  }
  if(mp1){
    document.getElementById('m1').className="pat";
    document.getElementById('m1').style.backgroundColor="#80F6F6"
    var mm1 = document.getElementById('audio4');
    mm1.play();
  }
  if(!mp1){
    document.getElementById('m1').className="pat";
    document.getElementById('m1').style.backgroundColor="#808080"
    var mm1 = document.getElementById('audio4');
    mm1.pause();
    mm1.currentTime = 0;
  }
  if(dp2){
    document.getElementById('d2').className="pat";
    document.getElementById('d2').style.backgroundColor="#F6F680"
    var dd2 = document.getElementById('audio5');
    dd2.play();
  }
  if(!dp2){
    document.getElementById('d2').className="pat";
    document.getElementById('d2').style.backgroundColor="#808080"
    var dd2 = document.getElementById('audio5');
    dd2.pause();
    dd2.currentTime = 0;
  }
  if(bp2){
    document.getElementById('b2').className="pat";
    document.getElementById('b2').style.backgroundColor="#AFF680"
    var bb2 = document.getElementById('audio6');
    bb2.play();
  }
  if(!bp2){
    document.getElementById('b2').className="pat";
    document.getElementById('b2').style.backgroundColor="#808080"
    var bb2 = document.getElementById('audio6');
    bb2.pause();
    bb2.currentTime = 0;
  }
  if(cp2){
    document.getElementById('c2').className="pat";
    document.getElementById('c2').style.backgroundColor="#FF88FF"
    var cc2 = document.getElementById('audio7');
    cc2.play();
  }
  if(!cp2){
    document.getElementById('c2').className="pat";
    document.getElementById('c2').style.backgroundColor="#808080"
    var cc2 = document.getElementById('audio7');
    cc2.pause();
    cc2.currentTime = 0;
  }
  if(mp2){
    document.getElementById('m2').className="pat";
    document.getElementById('m2').style.backgroundColor="#80F6F6"
    var mm2 = document.getElementById('audio8');
    mm2.play();
  }
  if(!mp2){
    document.getElementById('m2').className="pat";
    document.getElementById('m2').style.backgroundColor="#808080"
    var mm2 = document.getElementById('audio8');
    mm2.pause();
    mm2.currentTime = 0;
  }
  if(dp3){
    document.getElementById('d3').className="pat";
    document.getElementById('d3').style.backgroundColor="#F6F680"
    var dd3 = document.getElementById('audio9');
    dd3.play();
  }
  if(!dp3){
    document.getElementById('d3').className="pat";
    document.getElementById('d3').style.backgroundColor="#808080"
    var dd3 = document.getElementById('audio9');
    dd3.pause();
    dd3.currentTime = 0;
  }
  if(bp3){
    document.getElementById('b3').className="pat";
    document.getElementById('b3').style.backgroundColor="#AFF680"
    var bb3 = document.getElementById('audio10');
    bb3.play();
  }
  if(!bp3){
    document.getElementById('b3').className="pat";
    document.getElementById('b3').style.backgroundColor="#808080"
    var bb3 = document.getElementById('audio10');
    bb3.pause();
    bb3.currentTime = 0;
  }
  if(cp3){
    document.getElementById('c3').className="pat";
    document.getElementById('c3').style.backgroundColor="#FF88FF"
    var cc3 = document.getElementById('audio11');
    cc3.play();
  }
  if(!cp3){
    document.getElementById('c3').className="pat";
    document.getElementById('c3').style.backgroundColor="#808080"
    var cc3 = document.getElementById('audio11');
    cc3.pause();
    cc3.currentTime = 0;
  }
  if(mp3){
    document.getElementById('m3').className="pat";
    document.getElementById('m3').style.backgroundColor="#80F6F6"
    var mm3 = document.getElementById('audio12');
    mm3.play();
  }
  if(!mp3){
    document.getElementById('m3').className="pat";
    document.getElementById('m3').style.backgroundColor="#808080"
    var mm3 = document.getElementById('audio12');
    mm3.pause();
    mm3.currentTime = 0;
  }
  if(dp4){
    document.getElementById('d4').className="pat";
    document.getElementById('d4').style.backgroundColor="#F6F680"
    var dd4 = document.getElementById('audio13');
    dd4.play();
  }
  if(!dp4){
    document.getElementById('d4').className="pat";
    document.getElementById('d4').style.backgroundColor="#808080"
    var dd4 = document.getElementById('audio13');
    dd4.pause();
    dd4.currentTime = 0;
  }
  if(bp4){
    document.getElementById('b4').className="pat";
    document.getElementById('b4').style.backgroundColor="#AFF680"
    var bb4 = document.getElementById('audio14');
    bb4.play();
  }
  if(!bp4){
    document.getElementById('b4').className="pat";
    document.getElementById('b4').style.backgroundColor="#808080"
    var bb4 = document.getElementById('audio14');
    bb4.pause();
    bb4.currentTime = 0;
  }
  if(cp4){
    document.getElementById('c4').className="pat";
    document.getElementById('c4').style.backgroundColor="#FF88FF"
    var cc4 = document.getElementById('audio15');
    cc4.play();
  }
  if(!cp4){
    document.getElementById('c4').className="pat";
    document.getElementById('c4').style.backgroundColor="#808080"
    var cc4 = document.getElementById('audio15');
    cc4.pause();
    cc4.currentTime = 0;
  }
  if(mp4){
    document.getElementById('m4').className="pat";
    document.getElementById('m4').style.backgroundColor="#80F6F6"
    var mm4 = document.getElementById('audio16');
    mm4.play();
  }
  if(!mp4){
    document.getElementById('m4').className="pat";
    document.getElementById('m4').style.backgroundColor="#808080"
    var mm4 = document.getElementById('audio16');
    mm4.pause();
    mm4.currentTime = 0;
  }
}

function displayD1(){
  dp1=!dp1;
  dp2=false;
  dp3=false;
  dp4=false;
  document.getElementById('d1').className="patplay pat";
}
function displayB1(){
  bp1=!bp1;
  bp2=false;
  bp3=false;
  bp4=false;
  document.getElementById('b1').className="patplay pat";
}
function displayC1(){
  cp1=!cp1;
  cp2=false;
  cp3=false;
  cp4=false;
  document.getElementById('c1').className="patplay pat";
}
function displayM1(){
  mp1=!mp1;
  mp2=false;
  mp3=false;
  mp4=false;
  document.getElementById('m1').className="patplay pat";
}
function displayD2(){
  dp1=false;
  dp2=!dp2;
  dp3=false;
  dp4=false;
  document.getElementById('d2').className="patplay pat";
}
function displayB2(){
  bp1=false;
  bp2=!bp2;
  bp3=false;
  bp4=false;
  document.getElementById('b2').className="patplay pat";
}
function displayC2(){
  cp1=false;
  cp2=!cp2;
  cp3=false;
  cp4=false;
  document.getElementById('c2').className="patplay pat";
}
function displayM2(){
  mp1=false;
  mp2=!mp2;
  mp3=false;
  mp4=false;
  document.getElementById('m2').className="patplay pat";
}
function displayD3(){
  dp1=false;
  dp2=false;
  dp3=!dp3;
  dp4=false;
  document.getElementById('d3').className="patplay pat";
}
function displayB3(){
  bp1=false;
  bp2=false;
  bp3=!bp3;
  bp4=false;
  document.getElementById('b3').className="patplay pat";
}
function displayC3(){
  cp1=false;
  cp2=false;
  cp3=!cp3;
  cp4=false;
  document.getElementById('c3').className="patplay pat";
}
function displayM3(){
  mp1=false;
  mp2=false;
  mp3=!mp3;
  mp4=false;
  document.getElementById('m3').className="patplay pat";
}
function displayD4(){
  dp1=false;
  dp2=false;
  dp3=false;
  dp4=!dp4;
  document.getElementById('d4').className="patplay pat";
}
function displayB4(){
  bp1=false;
  bp2=false;
  bp3=false;
  bp4=!bp4;
  document.getElementById('b4').className="patplay pat";
}
function displayC4(){
  cp1=false;
  cp2=false;
  cp3=false;
  cp4=!cp4;
  document.getElementById('c4').className="patplay pat";
}
function displayM4(){
  mp1=false;
  mp2=false;
  mp3=false;
  mp4=!mp4;
  document.getElementById('m4').className="patplay pat";
}
