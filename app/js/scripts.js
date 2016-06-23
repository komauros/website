/*$(document).ready(function() {
    $('.btn').on('click', function() {
       alert('You clicked me!!!') ;
    });
});*/

$(function() {
		$('.pop').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   
		});		
});