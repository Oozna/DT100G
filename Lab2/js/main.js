"use strict";





const baseURL = "https://api.sr.se/api/v2/";
const baseMusicURL = "https://sverigesradio.se/topsy/direkt/srapi/"
const loadURL = baseURL + "channels?size=100&format=json";
var music = new Audio;

document.addEventListener("DOMContentLoaded", function () {

	loadChannels(loadURL);

	document.getElementById("searchbutton").addEventListener("click", function (e) {
		let options = document.getElementById("searchProgram").options;
		let index = document.getElementById("searchProgram").selectedIndex;
		let url = baseURL + "scheduledepisodes?channelid=" + options[index].value + "&format=json";
		document.getElementById("info").innerHTML = "";
		loadScheule(url);
	})

	document.getElementById("mainnavlist").addEventListener("click", function (e) {
		playMusic(e.target.id, music);
		let url = baseURL + "channels/" + e.target.id + "?format=json";
		fetch(url)
			.then(response => response.json())
			.then(data => {
				document.getElementById("searchProgram").value = data.channel.name;
				document.getElementById("info").innerHTML =
					"<h1>" + data.channel.name + "</h1>" + "<h3>" + data.channel.tagline + "</h3>" + "<hr/>" + "<p id='Previous'></p>" + "<p id='Current'></p>" + "<p id='Next'></p>";
				loadPlaylist(e.target.id);
			})
			.catch(error => {
				console.log("An error occured during the mainnavlist eventlistener." + error);
			})

	})

	document.getElementById("logo").addEventListener("click", function () {
		music.pause();
		document.getElementById("info").innerHTML = "";
	})

})

function loadChannels(URL) {
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			for (let i = 0; i < data.channels.length; i++) {
				let id = data.channels[i].id;
				let name = data.channels[i].name;
				var image;
				if (typeof data.channels[i].image != "undefined") {
					image = data.channels[i].image;
				}
				document.getElementById("mainnavlist").innerHTML += "<li id='" + id + "'> <img src='" + image + "' width=30rem height=30rem>" + name + "</li>";
				document.getElementById("searchProgram").innerHTML += "<option value='" + id + "'>" + name + "</option>";
			}
		})
		.catch(error => {
			console.log("An error occured during the load_channels(URL) function " + error);
		});
}

function loadPlaylist(id) {
	console.log("TEST");
	let url = "http://api.sr.se/api/v2/playlists/rightnow?channelid=" + id + "&format=json";
	fetch(url)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			if (typeof data.playlist.previoussong != "undefined")
				document.getElementById("Previous").innerHTML = "Previous song: " + data.playlist.previoussong.description;
			if (typeof data.playlist.song != "undefined")
				document.getElementById("Current").innerHTML = "Current song: " + data.playlist.song.description;
			if (typeof data.playlist.nextsong != "undefined")
				document.getElementById("Next").innerHTML = "Next song: " + data.playlist.nextsong.description;
		})
		.catch(error => {
			console.log("An error occured during the loadPlaylist(id) function " + error);
		});
}

function loadScheule(URL) {
	fetch(URL)
		.then(response => response.json())
		.then(data => {
			for (var i = 0; i < data.pagination.size; i++) {
				let h1 = document.createElement("h1");
				let h4 = document.createElement("h4");
				let p = document.createElement("p");
				let hr = document.createElement("hr");

				h1.innerHTML = data.schedule[i].title;
				h4.innerHTML = data.schedule[i].description;
				p.innerHTML = new Date(parseInt(data.schedule[i].starttimeutc.substr(6, 13)));

				//Adds them to html
				document.getElementById("info").appendChild(h1);
				document.getElementById("info").appendChild(h4);
				document.getElementById("info").appendChild(p);
				document.getElementById("info").appendChild(hr);
			}
		})
		.catch(error => {
			console.log("An error occured during the loadScheule(URL) function " + error);
		})
}

function playMusic(id, audio) {
	audio.src = baseMusicURL + id + "-hi.mp3";
	audio.play();
}