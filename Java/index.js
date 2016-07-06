
$(".text1 , .text2").hide();

// $(".box1").click(function(){
// if($(this).attr('data-state') === '0')
// {
// $(this).animate({
//   width:"100%",
//   height:"50%",
//   marginLeft:"0.6em",
// });
// $(this).attr('data-state', '1');
// $(".text1").css
// ({
//   "marginLeft":"0.6em",
//   "background-color":"green",
// "width":"70%"
// })
// $(".text1").slideDown(1000)
// }
//
// else
// {
// $(this).animate({
// width:"5em",
// height:"5em",
// marginLeft:"0em"
//
// });
// $(this).attr('data-state', '0')
// $(".text1").hide();
// } ;
//
// });

$(".box1").click(function(){
$(".text1").toggle(1000);
$(this).toggleClass("biggerImage", 2000, "easeOutCirc");


});


// $(".box2").click(function(){
// if($(this).attr('data-state') === '0')
// {
// $(this).animate({
//   width:"100%",
//   height:"50%",
//   marginLeft:"0.6em",
// });
// $(this).attr('data-state', '1');
// $(".text2").css
// ({
//   "marginLeft":"0.6em",
//   "background-color":"green",
// "width":"70%"
// })
// $(".text2").slideDown(1000)
// }
//
// else
// {
// $(this).animate({
// width:"50%",
// height:"20%",
// marginLeft:"0em"
//
// });
// $(this).attr('data-state', '0')
// $(".text2").hide();
// } ;
//});

$(".box2").click(function(){
$(".text2").toggle(1000);
$(this).toggleClass("biggerImage", 1600, "easeOutCirc");


});
