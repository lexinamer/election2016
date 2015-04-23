// JavaScript Document


//Use this url below to get your access token
//https://instagram.com/oauth/authorize/?display=touch&client_id=09233173b22b40e0a0a2dbad44a8287b&redirect_uri=http://lexinamersite.com/api&response_type=token

//if you need a user id for yourself or someone else use:
//http://jelled.com/instagram/lookup-user-id

$(function() {

	var apiurl = "https://api.instagram.com/v1/tags/hillary2016/media/recent?access_token=67161.0923317.a1341a59d4194b778458778936c9d4c2&callback=?"
	var access_token = location.hash.split('=')[1];
	var html = ""

		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: apiurl,
			success: parseData
		});


		function parseData(json){
			console.log(json);

			$.each(json.data,function(i,data){
					html += '<div class="instagram">' + '<img width="40px" class="instagram-profilepictures" src="' + data.user.profile_picture + '">' + '<a target="_blank" href="http://www.instagram.com/' + data.user.username + '">' + data.user.username
					html += '<a target="_blank" href="' + data.link + '">' + '</a>'
					html += '<img width="100%" src ="' + data.images.low_resolution.url + '">'
					html += '<p>' + data.caption.text + '</p>' + '</div>'
			});

			// console.log(html);
			$(".hillary").append(html);

		}
 });



$(function() {
	// console.log("marco");

	var apiurl = "https://api.instagram.com/v1/tags/rubio2016/media/recent?access_token=67161.0923317.a1341a59d4194b778458778936c9d4c2&callback=?"
	var access_token = location.hash.split('=')[1];
	var html = ""

		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: apiurl,
			success: parseData
		});


		function parseData(json){
			// console.log(json);

			$.each(json.data,function(i,data){
					html += '<div class="instagram">' + '<img width="40px" class="instagram-profilepictures" src="' + data.user.profile_picture + '">' + '<a target="_blank" href="http://www.instagram.com/' + data.user.username + '">' + data.user.username
					html += '<a target="_blank" href="' + data.link + '">' + '</a>'
					html += '<img width="100%" src ="' + data.images.low_resolution.url + '">'
					html += '<p>' + data.caption.text + '</p>' + '</div>'
			});

			// console.log(html);
			$(".marco").append(html);

		}
 });




$(function() {
	var apiurl = "https://api.instagram.com/v1/tags/tedcruz2016/media/recent?access_token=67161.0923317.a1341a59d4194b778458778936c9d4c2&callback=?"
	var access_token = location.hash.split('=')[1];
	var html = ""

		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: apiurl,
			success: parseData
		});


		function parseData(json){

			$.each(json.data,function(i,data){
					html += '<div class="instagram">' + '<img width="40px" class="instagram-profilepictures" src="' + data.user.profile_picture + '">' + '<a target="_blank" href="http://www.instagram.com/' + data.user.username + '">' + data.user.username
					html += '<a target="_blank" href="' + data.link + '">' + '</a>'
					html += '<img width="100%" src ="' + data.images.low_resolution.url + '">'
					html += '<p>' + data.caption.text + '</p>' + '</div>'
			});

			// console.log(html);
			$(".ted").append(html);

		}
 });


$(function() {
	var apiurl = "https://api.instagram.com/v1/tags/randpaul2016/media/recent?access_token=67161.0923317.a1341a59d4194b778458778936c9d4c2&callback=?"
	var access_token = location.hash.split('=')[1];
	var html = ""

		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: apiurl,
			success: parseData
		});


		function parseData(json){
			// console.log(json);

			$.each(json.data,function(i,data){
					html += '<div class="instagram">' + '<img width="50px" src="' + data.user.profile_picture + '">' + '<a target="_blank" href="http://www.instagram.com/' + data.user.username + '">' + data.user.username
					html += '<a target="_blank" href="' + data.link + '">' + '</a>'
					html += '<img width="100%" src ="' + data.images.low_resolution.url + '">'
					html += '<p>' + data.caption.text + '</p>' + '</div>'
			});

			// console.log(html);
			$(".rand").append(html);

		}
 });
