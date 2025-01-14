

function submitRecm() {

  var feedbackerName = document.getElementById("container-feedback-name")
  var nameText = feedbackerName.value.trim();
  var message = document.getElementById("container-feedback-message");
  var messageText = message.value.trim();

    if (nameText!= "" ||  messageText!=""){

    const ul = document.getElementById("containerFeedbackUl");
    ul.classList.add ("container-feedback-ul")
    const li = document.createElement("li");
    const div= document.createElement ("div");
    div.classList.add("contianer-rec-textUserAdded");
    const p = document.createElement("p");
    p.classList.add("rec-para-text")
    p.textContent = (`message from ${nameText}: ${messageText}`)

      if(p.textContent.length <=250 ){
          if (nameText!= ""){
            p.textContent;
          } else {
            p.textContent = (`"${messageText} "`);
            
          }

          
        
       }   else {
        alert(`Enter less than 250 words only. You entered ${p.textContent.length} words`)
        return false;
       }
  
    div.appendChild(p);
    li.appendChild(div)
    ul.appendChild(li);  
    feedbackerName.value = "";
    message.value = "" ;

    document.body.appendChild(popup); // Append the popup to the body
    
    showpopup();
  
    } else {
      alert("Enter valid input");
    }
  
}

const popup = document.createElement("div");
popup.textContent = "Success!, your entered text submitted successfully";
// const popupBtn = document.createElement("button");
// popupBtn.textContent = "Close";
// div.appendChild (popupBtn);
popup.classList.add("popupStyle"); // Add a class for styling
popup.style.display = "none"; // Initially hide the popup


function showpopup() {
  popup.style.display = "block"; // Show the popup

  setTimeout(() => {
    popup.style.display = "none";
  }, 2000); // Hide the popup after 2 seconds
}


  