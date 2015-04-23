<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="tweetLinkIt.js"></script>
<link href="../css/style.css" rel="stylesheet">

<script>

$('.tweet').tweetLinkify();

function pageComplete(){
  $('.tweet').tweetLinkify();
}

</script>


<?php

ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "15843038-22yH1udLdWGqNcR2vtEW5BdrPNtqwC5nSgZVericy",
    'oauth_access_token_secret' => "EFZBMm9qgAFqtLfQeCPPbZiZOGehYHNDDLOt4nDS72LAW",
    'consumer_key' => "48uTsRMReRMcosLr92nDp1OuN",
    'consumer_secret' => "FYxMOFPOFrNfhLB7DahovGtjC9AWQqyae2YLoEvt42JZXzZ6nd"
);

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$getfield = '?screen_name=hillaryclinton&count=20';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
// echo $twitter->setGetfield($getfield)
//              ->buildOauth($url, $requestMethod)
//              ->performRequest();



$string = json_decode($twitter->setGetfield($getfield)
      ->buildOauth($url, $requestMethod)
      ->performRequest(),$assoc = TRUE);

      foreach($string as $items)
      {
          echo "<div class='twitter'>";
          echo "<div class='profile-image'>" . "<img src='", $items['user']['profile_image_url'], "'>" . "</div>";
          echo "<strong class='screen-name'>" . "@" . $items['user']['screen_name'] . "</strong>" .
          "<div class='tweet'>" . $items['text'] . "</strong></div>";
          echo "</div>";
      }

      echo "<script>pageComplete();</script>";
?>
