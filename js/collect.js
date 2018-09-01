window.onload = function () {
	var my_music = document.getElementById('my_music')
	var my_MV = document.getElementById('my_MV')
	var my_atten = document.getElementById('my_atten')
	var music_list = document.getElementById('music_list')
	var MV_list = document.getElementById('MV_list')
	var atten_list = document.getElementById('atten_list')

	my_music.onclick = function () {
		music_list.style.display="block";
		MV_list.style.display="none";		
		atten_list.style.display="none";
		my_music.style.color="rgb(0,0,0)";
		my_music.style.background="white";
		my_MV.style.color="white";
		my_MV.style.background="none";
		my_atten.style.color="white";
		my_atten.style.background="none";
	}

	my_MV.onclick = function () {
		music_list.style.display="none";
		MV_list.style.display="block";		
		atten_list.style.display="none";
		my_music.style.color="white";
		my_music.style.background="none";
		my_MV.style.color="rgb(0,0,0)";
		my_MV.style.background="white";
		my_atten.style.color="white";
		my_atten.style.background="none";
	}

	my_atten.onclick = function () {
		music_list.style.display="none";
		MV_list.style.display="none";		
		atten_list.style.display="block";
		my_music.style.color="white";
		my_music.style.background="none";
		my_MV.style.color="white";
		my_MV.style.background="none";
		my_atten.style.color="rgb(0,0,0)";
		my_atten.style.background="white";
	}	
}