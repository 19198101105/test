// JavaScript Document
window.onload=function() {
	function hotChange() {
		var current_index=0;
		var timer=window.setInterval(autoChange,3000);
		var pic_li=document.getElementById('banner_pic').getElementsByTagName('li');
		var button_li=document.getElementById('button').getElementsByTagName('li');
			function autoChange() {
				++current_index;
				if(current_index==pic_li.length) {
					current_index=0;
				}
				for(var i in pic_li) {
					if(i==current_index) {
						pic_li[i].className='current';
						button_li[i].className='current';
					}
					else{
			pic_li[i].className='pic';
			button_li[i].className='but';
					}
				}
			}
			for(var i in button_li){
				button_li[i].onmouseover=function() {
					if(timer) {
						window.clearInterval(timer);
					}
					for(var j in button_li){
						if(button_li[j]==this) {
							current_index=j;
							pic_li[j].className='current';
						button_li[j].className='current';
					}
					else{
			pic_li[j].className='pic';
			button_li[j].className='but';
					}
					}
				}
				button_li[i].onmouseout=function() {
					timer=window.setInterval(autoChange,3000);
				}
			}
	}
	hotChange();
function school() {
		var speed=50;
		var imgbox=document.getElementById('imgbox');
		imgbox.innerHTML+=imgbox.innerHTML;
		var span=imgbox.getElementsByTagName('span');
		var timer1=window.setInterval(marquee,speed);
		function marquee() {
			if(imgbox.scrollLeft>span[0].offsetWidth) {
				imgbox.scrollLeft=0;
			}
			else{
				++imgbox.scrollLeft;
			}
		}
		imgbox.onmouseover=function() {
			window.clearInterval(timer1);
		}
		imgbox.onmouseout=function() {
			timer1=window.setInterval(marquee,speed);
		}
	}
	school();



	
	function tableChange() {
		var picNavs=document.getElementById('PicNav').getElementsByTagName('li');
		var bigPics=document.getElementById('BigPic').getElementsByTagName('img');
		var current_index=0;
		var timer=window.setInterval(autoChange,3000);
		
				function autoChange() {
				++current_index;
				if(current_index==bigPics.length) {
					current_index=0;
				}
				for(var i in bigPics) {
					bigPics[i].className='';
				}
		bigPics[current_index].className='CurrentPic';
				}
				for(var i in picNavs) {
					picNavs[i].onmouseover=function() {
						if(timer) {
						window.clearInterval(timer);
					}
					for(var j in picNavs){
						if(picNavs[j]==this) {
							
							bigPics[j].className='CurrentPic';			                       current_index=j;
					}
					else{
						bigPics[j].className='';
					}
					}
					}
					picNavs[i].onmouseout=function() {
					timer=window.setInterval(autoChange,3000);
				}
			}
	}
	tableChange();
	}
	
	
	
	