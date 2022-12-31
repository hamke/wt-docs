$(document).ready(function(){
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
         $('#chat-button').fadeIn();
         $('#back-to-top').fadeIn();
       } else {
         $('#chat-button').fadeOut();
         $('#back-to-top').fadeOut();
       }
     });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
      // $('#back-to-top').tooltip('hide');
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
    // $('#back-to-top').tooltip('show');
});

function copyToClipboard(param){
	var el =document.createElement('input');
	document.body.appendChild(el)
	el.value =param.textContent
	el.select();
	document.execCommand('copy',false);
	el.remove();
	alert("자동 복사되었습니다 : " + el.value);
}
