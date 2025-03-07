const TitleEl = document.getElementById("title")
// generate Dog breeds on click
document
	.getElementById("image-section")
	.addEventListener("click", function () {
		//Api to get random dog breeds
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);

				document.getElementById(
					"display"
				).innerHTML = `<img src=${data.message} width="50%">`;
			});
	});

//generate activities on click
document
  .getElementById("text-cont")
  .addEventListener("click", function () {
    //Api to get random activity
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
        console.log(data)
  
        document.getElementById(
					"display"
				).textContent = `${data.type}: ${data.activity}`;
			TitleEl.classList.add("fun")
      }
			
      )
  })

//generate random bible verses on click
document.getElementById("bible-text").addEventListener("click", function () {
	//Api to get random bible passage
	fetch("https://bible-api.com/data/web/random")
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			document.getElementById(
				"display"
			).textContent = `${data.random_verse.book} ${data.random_verse.chapter}:${data.random_verse.verse} - ${data.random_verse.text}`;
		});
});
