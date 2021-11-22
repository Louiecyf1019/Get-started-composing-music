var acousticGuitar = new Pz.Sound({ source: 'file', options: {
	path: '../audio/guitar.mp3',
	loop: true
}});

var reverb = new Pizzicato.Effects.Reverb({
    time: 0.01,
    decay: 0.01,
    reverse: false,
    mix: 0.5
});
acousticGuitar.addEffect(reverb);

function changevol(){
	var volumewave=document.getElementById('volumewave');
	acousticGuitar.volume=parseFloat(volumewave.value);
	var dispvol = document.getElementById("dispvol");
    dispvol.innerHTML= volumewave.value; 
}

function guitarplay(){
	acousticGuitar.play();
}
function guitarstop(){
	acousticGuitar.pause();
}
function changert(){
	var reverbtime=document.getElementById('reverbtime');
	var disprt = document.getElementById("disprt");
    disprt.innerHTML= reverbtime.value; 
    reverb.time=parseFloat(reverbtime.value);
}
function changerd(){
	var reverbdecay=document.getElementById('reverbdecay');
	var disprd = document.getElementById("disprd");
    disprd.innerHTML= reverbdecay.value; 
    reverb.decay=parseFloat(reverbdecay.value);
}
function changerm(){
	var reverbmix=document.getElementById('reverbmix');
	var disprm = document.getElementById("disprm");
    disprm.innerHTML= reverbmix.value; 
    reverb.mix=parseFloat(reverbmix.value);
}
new Ctor().$mount('#abtn')
new Ctor().$mount('#bbtn')
new Ctor().$mount('#notert')
new Ctor().$mount('#noterd')
new Ctor().$mount('#noterm')
new Ctor().$mount('#noteff')
new Ctor().$mount('#notefp')
new Ctor().$mount('#rebtnroll')
new Ctor().$mount('#filbtnroll')

var astronomia = new Pz.Sound({ source: 'file', options: {
	path: '../audio/Astronomia.mp3',
	loop: true
}});
var lowPassFilter = new Pizzicato.Effects.LowPassFilter({
    frequency: 22050,
    peak: 10
});

astronomia.addEffect(lowPassFilter);

function aplay(){
	astronomia.play();
}
function astop(){
	astronomia.pause();
}
function changevol2(){
	var volumewave2=document.getElementById('volumewave2');
	astronomia.volume=parseFloat(volumewave2.value);
	var dispvol2 = document.getElementById("dispvol2");
    dispvol2.innerHTML= volumewave2.value; 
}
function changeff(){
	var filfreq=document.getElementById('filfreq');
	var dispff = document.getElementById("dispff");
    dispff.innerHTML= filfreq.value; 
    lowPassFilter.frequency=parseFloat(filfreq.value);
}
function changefp(){
	var filpeak=document.getElementById('filpeak');
	var dispfp = document.getElementById("dispfp");
    dispfp.innerHTML= filpeak.value; 
    lowPassFilter.peak=parseFloat(filpeak.value);
}
function hallreverb(){
	reverb.time = 2;
	reverb.decay=1;
	reverb.mix=0.2;
	var disprt = document.getElementById("disprt");
    disprt.innerHTML= 2; 
    var reverbtime=document.getElementById('reverbtime');
    reverbtime.value = 2;
    var reverbdecay=document.getElementById('reverbdecay');
	var disprd = document.getElementById("disprd");
    disprd.innerHTML= 1; 
    reverbdecay.value= 1;
    var reverbmix=document.getElementById('reverbmix');
	var disprm = document.getElementById("disprm");
    disprm.innerHTML= 0.2; 
    reverbmix.value =0.2;
}
function studioreverb(){
	reverb.time = 1.3;
	reverb.decay= 0.6;
	reverb.mix=0.15;
	var disprt = document.getElementById("disprt");
    disprt.innerHTML= 1.3; 
    var reverbtime=document.getElementById('reverbtime');
    reverbtime.value = 1.3;
    var reverbdecay=document.getElementById('reverbdecay');
	var disprd = document.getElementById("disprd");
    disprd.innerHTML= 0.6; 
    reverbdecay.value= 0.6;
    var reverbmix=document.getElementById('reverbmix');
	var disprm = document.getElementById("disprm");
    disprm.innerHTML= 0.15; 
    reverbmix.value =0.15;
}
function lowpf(){
	lowPassFilter.frequency =600;
	var filfreq=document.getElementById('filfreq');
	var dispff = document.getElementById("dispff");
    dispff.innerHTML= 600; 
    filfreq.value=600;
}

var modulate=false;
var md = window.setInterval("modulation()",1)
function lpfmodulate(){
	modulate=!modulate;
}
var filfreq=document.getElementById('filfreq');
var dispff = document.getElementById("dispff");
var cm=flase;
function modulation(){
	if(modulate){
		if(cm){
			if(lowPassFilter.frequency<1800){
				lowPassFilter.frequency=15+lowPassFilter.frequency
				dispff.innerHTML= lowPassFilter.frequency; 
   				filfreq.value=lowPassFilter.frequency;
			}
			else{
				cm=!cm;
			}
		}
		else{
			if(lowPassFilter.frequency>600){
				lowPassFilter.frequency=lowPassFilter.frequency-15
				dispff.innerHTML= lowPassFilter.frequency; 
   				filfreq.value=lowPassFilter.frequency;
			}
			else{
				cm=!cm;
			}
		}
	}
}