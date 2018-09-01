window.onload = function () {
	var banner_play = document.getElementById('banner_play')
	var list = document.getElementById('list')
	var prev = document.getElementById('prev')
	var next = document.getElementById('next')
	var timer1
	var album_hot = document.getElementById('album_hot')
	var album_hot_list = document.getElementById('album_hot_list')
	var prev_album = document.getElementById('prev_album')
	var next_album = document.getElementById('next_album')
	var timer2

	/*var sheight=document.documentElement.scrollHeight

	alert(sheight);*/                 //获取页面高度为1744px
	function animate(offset) {
		list.style.left = parseInt(list.style.left) + offset + 'px';
		var newleft = parseInt(list.style.left) + offset;
		if (newleft > 0) {
			list.style.left = -2895 + 'px';
		}
		if (newleft < -2895) {
			list.style.left = -0 + 'px';
		}
	}

	function play1() {
		timer1 = setInterval(function () {
			next.onclick();
		}, 3000);                      //自动播放，间隔为3000毫秒
	}

	next.onclick = function () {
		animate(-965)               //点击右箭头list的left值减去965
	}
	prev.onclick = function () {
		animate(965)                //点击左箭头list的left值加上965
	}
	play1()                         //开始为自动播放
    //滚动的banner


	var banner_play = document.getElementById('banner_play')
	var mask = document.getElementById('mask')
	var login = document.getElementById('login')
	var btnLogin = document.getElementById('btnLogin')
	var close = document.getElementById('close')

	btnLogin.onclick = function () {
		mask.style.display="block";
		login.style.display="block";
	}

	close.onclick = function () {
		mask.style.display="none";
		login.style.display="none";
	}
	//点击登录弹出登录窗口
	function roll(reset) {
		album_hot_list.style.left = parseInt(album_hot_list.style.left) + reset + 'px';
		var anewleft = parseInt(album_hot_list.style.left) + reset;
		if (anewleft > 0) {
			album_hot_list.style.left = -1360 + 'px';
		}
		if (anewleft < -1360) {
			album_hot_list.style.left = -0 + 'px';
		}
	}

	function play2() {
		timer2 = setInterval(function () {
			next_album.onclick();
		}, 4000);
	}

	next_album.onclick = function () {
		roll(-340)
	}
	prev_album.onclick = function () {
		roll(340)
	}

	play2()	
}
/*
window.onload = function () {
	var album_hot = document.getElementById('album_hot')
	var album_hot_list = document.getElementById('album_hot_list')
	var prev_album = document.getElementById('prev_album')
	var next_album = document.getElementById('next_album')
	var timer2

	function roll(reset) {
		album_hot_list.style.left = parseInt(album_hot_list.style.left) + reset + 'px';
		var anewleft = parseInt(album_hot_list.style.left) + reset;
		if (anewleft > 0) {
			album_hot_list.style.left = -1360 + 'px';
		}
		if (anewleft < -1360) {
			album_hot_list.style.left = -0 + 'px';
		}
	}

	function play() {
		timer2 = setInterval(function () {
			next_album.onclick();
		}, 4000);
	}

	next_album.onclick = function () {
		roll(-340)
	}
	prev_album.onclick = function () {
		roll(340)
	}

	play()
}*/
