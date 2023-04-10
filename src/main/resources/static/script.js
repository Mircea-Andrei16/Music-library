let navbar = document.querySelector('.navbar');

document.getElementById("formButton").addEventListener("click", clearForm);

document.getElementById("subscribe").addEventListener("click", clearSubscribe);

function clearSubscribe() {
	document.getElementById("subscribeEmail").value = "";
  }

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("number").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  }

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}


$(document).ready(function(){

    $('.button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.gallery .image').show(400);
        }
        else{
            $('.gallery .image').not('.' +filter).hide(200);
            $('.gallery .image').filter('.' +filter).show(200);
        }

    });

    $('.gallery').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true,
        }
    });

});