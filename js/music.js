$(function() {
	var music = document.getElementById("bgMusic");

	function autoPlayAudio1() {
		wx.config({
			// 配置信息, 即使不正确也能使用 wx.ready
			debug: false,
			appId: '',
			timestamp: 1,
			nonceStr: '',
			signature: '',
			jsApiList: []
		});
		wx.ready(function() {
			music.play();
		});
	}
	autoPlayAudio1();

	$(".mscBtn").click(function() {
		if (music.paused) {
			music.play()
			// $(".mscBtn").removeClass("pause").addClass("play");
			$('.clo_yin').css('display', 'block')
			$('.yinyue').css('display', 'none')
		} else {
			music.pause();
			// $(".mscBtn").removeClass("play").addClass("pause");
			$('.clo_yin').css('display', 'none')
			$('.yinyue').css('display', 'block')
		}
	});
	$('.yinyue').click(function() {
		$('.clo_yin').css('display', 'block')
		$('.yinyue').css('display', 'none')
	})
	$('.clo_yin').click(function() {
		$('.clo_yin').css('display', 'none')
		$('.yinyue').css('display', 'block')
	})
});


