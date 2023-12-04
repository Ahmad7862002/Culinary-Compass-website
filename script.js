
// Correct login data

const credentialsArray = [
    { username:"Bakr",email: "123@gmail.com", password: "password" },

  ];

// handle sign
function handleSignUp() {
      const username = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (!username || !email || !password){
        alert("Please Enter all credidentials");
        return;
      }

      addUserCredentials(username,email, password);

      window.location.href = "login.html";
}


// Check password match in sign up (shows and hides elements and colors elements and disables button)

function checkPasswordMatch() {
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirmpassword');
      const submitButton = document.getElementById('signupbutton');
      const passwordlabel = document.getElementById('passworderror');

      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      if (password === confirmPassword) {
        submitButton.disabled = false;
        passwordlabel.style.visibility = 'hidden';
      } else {
        submitButton.disabled = true;
        passwordlabel.style.visibility = 'visible';
      }
    }
              
function removeCredentials(elementId) {
    var element =  document.getElementById(elementId);
    element.value = "";
   }

function addUserCredentials(username,email, password) {
 const userCredentials = { username,email, password };
 credentialsArray.push(userCredentials);
}

function pass(input){
   checkPasswordMatch();
   checkInputValue(input);
}

    function removeCredentials(elementId) {
        var element =  document.getElementById(elementId);
        element.value = "";
       }
//Handle login

       function checkCredentials() {
   
         var enteredEmail = document.getElementById("email").value;
         var enteredPassword = document.getElementById("password").value;
         var loginButton = document.getElementById("loginButton");

         const matchingCredentials = credentialsArray.find(
            (credentials) =>
              credentials.email === enteredEmail && credentials.password === enteredPassword
          );

         if (matchingCredentials) {
      
           
           removeCredentials("email");
           removeCredentials("password");
           window.location.href = "index.html";
           alert("Welcome User");
         
           
         } else {
           removeCredentials("email");
           removeCredentials("password");
       loginButton.classList.add("incorrect-credentials");
   

       setTimeout(function () {
         loginButton.classList.remove("incorrect-credentials");
       }, 1000);
         }
    
         checkInputValue(document.getElementById("email"));
         checkInputValue(document.getElementById("password"));
       }
   
   
    
       function checkInputValue(input) {
         var inputContainer = input.parentElement;
         var inputLabel = inputContainer.querySelector('.input-label');
         if (input.value.trim() != "") {
           inputLabel.style.visibility = 'hidden';
         } else {
           inputLabel.style.visibility = 'visible';
         }
       }

// Create random icon background for sign up page

       function addBackgroundIcons() {
        const iconURLs = [
          'images/restaurant.png',
          'images/restaurant2.png',
          'images/restaurant3.png',
          'images/restaurant4.png',
          'images/restaurant5.png',
        ];
      
        const body = document.body;
        const iconsPerType = 3;
        const minDistance = 150;
      
        if (window.location.pathname === '/signup.html') {
          printIcons(iconURLs, iconsPerType);
        }

   
        function printIcons(iconURLs, iconsPerType) {
          for (let i = 0; i < iconURLs.length; i++) {
            for (let j = 0; j < iconsPerType; j++) {
              const icon = document.createElement('div');
              icon.classList.add('icon');
        
              const size = Math.floor(Math.random() * 100) + 50;
              icon.style.width = `${size}px`;
              icon.style.height = `${size}px`;
        
              let posX, posY;
        
              do {
                posX = Math.random() * (window.innerWidth - size);
                posY = Math.random() * (window.innerHeight - size);
              } while (checkCollision(posX, posY, size));
        
              icon.style.left = `${posX}px`;
              icon.style.top = `${posY}px`;
        
              const rotation = Math.floor(Math.random() * 360);
              icon.style.transform = `rotate(${rotation}deg)`;
        
              icon.style.backgroundImage = `url(${iconURLs[i]})`;
        
              document.body.appendChild(icon);
            }
          }
        }
        

        // Check for overlapping of items

        function checkCollision(posX, posY, size) {
          for (const icon of document.querySelectorAll('.icon')) {
            const rect = icon.getBoundingClientRect();
            const distance = Math.sqrt(
              Math.pow(posX - rect.left, 2) + Math.pow(posY - rect.top, 2)
            );
            if (distance < minDistance) {
              return true;
            }
          }
          return false;
        }





      }
   
      


window.onload = addBackgroundIcons;


// Remove all icons from background

function removeAllBackgroundIcons() {

  const icons = document.querySelectorAll('.icon');


  icons.forEach(icon => {
    icon.remove();
  });
}



function regenerateImages(){
  removeAllBackgroundIcons();
  addBackgroundIcons();
}


// make border glow


function addGlowBorder(element) {
  element.style.backgroundColor= "rgb(245, 245, 245)";
}



function removeGlowBorder(element) {
element.style.backgroundColor= "white";
}



function setCustomCursor() {
  var customElement = document.getElementById('registration-container');

  customElement.style.cursor = 'crosshair';
}


if(document.getElementById("registration-container")) {
  document.getElementById("registration-container").addEventListener("mouseover" , () => {
    setCustomCursor()
}
);
}



if(document.getElementById("chef-button")) {
  document.getElementById("chef-button").addEventListener("click" , () => {
  window.location.href = 'beefwellington.html'
}
);
}


if(document.getElementById("go-to")) {
  document.getElementById("go-to").addEventListener("click" , () => {
  window.location.href = '#food-categories'
}
);
}


const foodOptions = ["meat", "chicken", "fish"];

// Randomize word in button (for entertainment purposes)

function getRandomFood() {
  const randomIndex = Math.floor(Math.random() * foodOptions.length);
  return foodOptions[randomIndex];
}


function randomShow(){
const button  = document.getElementById("random-button");
const pshow  = document.getElementById("p-show");
pshow.style.visibility = 'visible';
const food = getRandomFood();
button.innerText= food;

}

if(document.getElementById("random-button")) {
  document.getElementById("random-button").addEventListener("click" , () => {
randomShow()
}
);
}



// Add event for when clicking on submit in registration form


if(document.getElementById("registration-button")) {
  document.getElementById("registration-button").addEventListener("click" , () => {
alert("Registered Successfully")
}
);
}