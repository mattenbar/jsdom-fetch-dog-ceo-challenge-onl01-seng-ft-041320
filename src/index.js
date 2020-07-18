console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() {
  fetchImgs() 
  fetchBreeds()
})

  

  // gets images from api
  function fetchImgs() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
     .then(resp => resp.json())
     .then(json => renderImages(json));
   }

   // gets breed list from api
   function fetchBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
     .then(resp => resp.json())
     .then(json => renderBreeds(json));
   }
   
   // renders the images
   function renderImages(images) {
     const main = document.getElementById('dog-image-container')
     images.message.forEach(image => {
       const img = document.createElement('IMG')
       img.src = image
       img.height = "250"
       main.appendChild(img)
     })
   }

   //writes out all the breeds
   function renderBreeds(breeds){
    const main = document.getElementById('dog-breeds')
    for (const breed in breeds.message){
      const li = document.createElement('li')
      li.innerHTML = breed
      main.appendChild(li)
      //the event listener to change color
      li.addEventListener('click', function(){
        li.style.color = "blue"
      })
    }
   }









  