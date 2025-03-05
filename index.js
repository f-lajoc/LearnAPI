//Api to get random dog breeds
fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(data => {
     console.log(data);

 document.getElementById("image-section").innerHTML =
      `<img src=${data.message} width="50%">`   
  });
  
 //Api to get random activity
fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response => response.json())
  .then(data => {
    console.log(data)
  
    document.getElementById("text-cont").textContent = data.activity
  }
)
 //Api to get random bible passage
fetch("https://bible-api.com/data/web/random")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
    document.getElementById("bible-text").textContent =
      `${data.random_verse.book} ${data.random_verse.chapter}:${data.random_verse.verse} - ${data.random_verse.text}`;
	});

