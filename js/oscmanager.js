var sineWave = new Pizzicato.Sound({ 
    source: 'wave', 
    options: {
        frequency: 440
    }
});


var squareWave = new Pizzicato.Sound({ 
    source: 'wave', 
    options: {
        frequency: 440,
        type: 'square'
    }
});

var sawWave = new Pizzicato.Sound({ 
    source: 'wave', 
    options: {
        frequency: 440,
        type: 'sawtooth'
    }
});

var triangleWave = new Pizzicato.Sound({ 
    source: 'wave', 
    options: {
        frequency: 440,
        type: 'triangle'
    }
});

var sound=sineWave;

function oscplay(){
	var soundType=document.getElementById('oscselector').value;
	console.log(soundType);
	if (soundType=='方波'){
		sound.pause();
		sound=squareWave;
    changevol();
    changept();
		sound.play();
	}
	else if(soundType=='锯齿波'){
		sound.pause();
		sound=sawWave;
    changevol();
    changept();
		sound.play();
	}
	else if(soundType=='三角波'){
		sound.pause();
		sound=triangleWave;
    changevol();
    changept();
		sound.play();
	}
	else{
		sound.pause();
		sound=sineWave;
    changevol();
    changept();
		sound.play();
	}
	
}
function oscstop(){
	sound.pause();
}

function aplay(){
	squareWave.play();
}
function astop(){
	squareWave.pause();
}

var oscSelect = {
    data() {
      return {
        options: [{
          value: '1',
          label: '正弦波'
        }, {
          value: '2',
          label: '方波'
        }, {
          value: '3',
          label: '锯齿波'
        }, {
          value: '4',
          label: '三角波'
        }],
        value: ''
      }
    }
  }
var Ctor = Vue.extend(oscSelect)
new Ctor().$mount('#osc')




new Ctor().$mount('#abtn')
new Ctor().$mount('#bbtn')
new Ctor().$mount('#notert')
new Ctor().$mount('#noterd')
new Ctor().$mount('#noterm')
new Ctor().$mount('#noteff')
new Ctor().$mount('#notefp')
new Ctor().$mount('#rebtnroll')
new Ctor().$mount('#filbtnroll')


function changevol(){
  var volumewave=document.getElementById('volumewave');
  sound.volume=parseFloat(volumewave.value);
  var dispvol = document.getElementById("dispvol");
    dispvol.innerHTML= volumewave.value; 
}

function changept(){
  var pitch=document.getElementById('pitch');
  var disppt = document.getElementById("disppt");
    disppt.innerHTML= pitch.value; 
    sound.frequency=parseFloat(pitch.value);
}

sound.attack = 0.2;
sound.release = 0.5;

function changeatk(){
  var soundatk=document.getElementById('soundatk');
  var dispatk = document.getElementById("dispatk");
    dispatk.innerHTML= soundatk.value; 
    sound.attack=parseFloat(soundatk.value);
}

function changerls(){
  var soundrls=document.getElementById('soundrls');
  var disprls = document.getElementById("disprls");
    disprls.innerHTML= soundrls.value; 
    sound.release=parseFloat(soundrls.value);
}