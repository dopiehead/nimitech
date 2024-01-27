




function openform() {
  document.getElementById("myform").
  style.width="10%";
 $(".open-btn").hide();
  $(".close-btn").show();

}

function closeform() {
  document.getElementById("myform").
  style.width="0%";
  $(".open-btn").show();
  $(".close-btn").hide();
}
  




	
$("#search-form").hide();

$("#close-search").on('click',function() {

$("#search-form").hide();



});

	
$(".fa-search").on('click',function(){

$("#search-form").show();

});





