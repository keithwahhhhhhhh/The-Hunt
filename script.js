// hide all other content other than the ones from the first part
$(".page2").hide();
$(".page25").hide();
$(".key1").hide();
$(".page26").hide();
$(".endmsg").hide();
$(".treasure1").hide();
$(".treasure2").hide();
$(".treasure3").hide();
$(".treasure4").hide();
$(".money").hide();
$(".final").hide();
$(".money1").hide();
$(".money2").hide();
$(".money3").hide();
// move on to second part of hunt
$(".home1").click(function() {
    $(".page1").hide();
    $(".home").hide();
    $("button").hide();
    $("body").css("background-image", "url(http://images.17173cdn.com/2017/lol/2017/01/10/ww_01.jpg");
   $(".page25").show();
    $(".page2").show();
    
});

$(".box1").click(function() {
    $(".box1").hide();
    
});

$(".box2").click(function() {
    $(".box2").hide();
    
});
$(".box3").click(function() {
    $(".box3").hide();
    
});
    $(".box4").click(function() {
    $(".box4").hide();
    $(".key1").show();
    $(".page25").hide();
    $(".page26").show();
    $(".box1").hide();
    $(".box2").hide();
    $(".box3").hide();
});

 $(".key1").dblclick(function() {
     $(".key1").hide();
     $(".page26").hide();
    $(".endmsg").fadeIn();
     $(".treasure1").fadeIn();
     $(".treasure2").fadeIn();
     $(".treasure3").fadeIn();
     $(".treasure4").fadeIn();
     $("body").css("background-image", "url(https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fbilgewater-bilgewater-bay.jpg&resize=:1200");
 });
 $(".treasure1").click(function() {
   $(".money").fadeIn();  
   $(".treasure1").hide();
     $(".treasure2").hide();
     $(".treasure3").hide();
     $(".treasure4").hide();
    $(".endmsg").hide();
    $(".final").fadeIn();    
});
 $(".treasure2").click(function() {
   $(".money1").fadeIn();  
   $(".treasure1").hide();
     $(".treasure2").hide();
     $(".treasure3").hide();
     $(".treasure4").hide();
    $(".endmsg").hide();
    $(".final").fadeIn();    
});
 $(".treasure3").click(function() {
   $(".money2").fadeIn();  
   $(".treasure1").hide();
     $(".treasure2").hide();
     $(".treasure3").hide();
     $(".treasure4").hide();
    $(".endmsg").hide();
    $(".final").fadeIn();    
});
 $(".treasure4").click(function() {
   $(".money3").fadeIn();  
   $(".treasure1").hide();
     $(".treasure2").hide();
     $(".treasure3").hide();
     $(".treasure4").hide();
    $(".endmsg").hide();
    $(".final").fadeIn();    
});
 
 
 