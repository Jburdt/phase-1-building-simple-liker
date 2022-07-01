// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//Update Modal
function updateModal() {
  let div = document.querySelector("div")
  div.classList.add("hidden")
  }
  updateModal()

// grabs all the hearts
let elements = document.querySelectorAll('.like-glyph')

//giving each element an event 
for(const element of elements) {
  element.addEventListener('click', likeCallBack);
}
// ALERTS WHEN HEART IS CLICKED
function likeCallBack(e) {
 alert('I was clicked!')
 
 // Invokes mimic server call
 mimicServerCall()
 .then((JSON) => console.log(JSON, 'This is the response'))
 .then(() => {})
 .catch(() => console.log('ERROR'))
}
div.classList.remove("hidden")

//LEFT OFF--ADD EVENT LISTNER TO HEART BUTTON 





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
