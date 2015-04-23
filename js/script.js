$(document).ready(function(){

//Creates Slide for Tabs
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(this).attr('href');

    $(target).css('bottom','-'+$(window).height()+'px');
    var bottom = $(target).offset().bottom;
    $(target).css({bottom:bottom}).animate({"bottom":"0px"}, "10");
})


//Show Main Candidates Info
$("#continue").click(function(){
  $( "#container-intro").hide("slide", { direction: "left" }, 1200);
    $(".container.candidates").show("slide", { direction: "right" }, 1200);
    });

});

// Creates Countdown Clock

var clock;

$(document).ready(function() {

  // Grab the current date
  var currentDate = new Date();

  var futureDate  = new Date(2016, 10, 08);

  // Calculate the difference in seconds between the future and current date
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  // Instantiate a coutdown FlipClock
  clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
  });
});
