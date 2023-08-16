$(window).ready(()=>{
    $("#spinner").slideUp(4000,function()
    {
        $('body').css({overflow: "scroll"})
    })
})

// Navebar
$('#open').click(function()
{
    let navpos = $('.navbarList').offset().left
    if(navpos != 0 )
    {
        $('.navbarList').animate({left:"0"},1000)
        $('#open').animate({left:`250px`},1000)
    }
})
$('#close').click(function()
{
    let navpos = $('.navbarList').offset().left
    if(navpos === 0 )
    {
        $('.navbarList').animate({left:"-250px"},1000)
        $('#open').animate({left:'0px'},1000)   
    }
})
$(window).scroll(function()
{
    let a = $(window).scrollTop();
    let Duration = $('#Duration').offset().top
    if(a>=Duration)
    {
        $('#open').css({color:"#D62E33"})
    }
    else
    {
        $('#open').css({color:"#fff"})
    }
})



// SlideUp
$(".slideUp").click(function()
{
    $(this).next(".slideUp-content").slideToggle(1000).siblings(".slideUp-content").slideUp(1000)
    // console.log('hi');
})



// Counter
function geteveent(event)
{

    let NowDate = new Date()
    let eventDate = new Date(event)
    NowDate = NowDate/1000 
    eventDate = eventDate/1000
    let deffrent = eventDate - NowDate
    let day =  Math.floor(deffrent/(24*60*60))
    let hour =  Math.floor((deffrent - (day * (24*60*60))) / 3600)
    let minutes =  Math.floor((deffrent - (day * (24*60*60)) - (hour * 3600 )) / 60);
    let second =  Math.floor((deffrent - (day * (24*60*60)) - (hour * 3600) - (minutes * 60)))
    $(".event-Day").html(day + " D")
    $(".event-hour").html(hour  + " H")
    $(".event-minutes").html(minutes  + " M")
    $(".event-Second").html(second  + " S")
   
}
setInterval(function(){
    geteveent('10-25-2023')
})


// Message Char counter
$('#message').keyup(function(){
    console.log($('#message').val());
    let val = $('#message').val()
    if(val.length>100)
    {
        $('#count').html('your available character finished')
    }
    else
    {
        $('#count').html(100-val.length)
    }
})



// Mouse Slider
// $('.link').click(function()
// {
//     let selection = $(this).attr("href");
//     selectionPosition = $(selection).offset().top;
//     console.log(selectionPosition);
//     $("body,html").animate(
//       {
//         scrollTop: selectionPosition,
//       },
//       2000
//     );
// })