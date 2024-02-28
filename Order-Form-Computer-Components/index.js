// Function to change the displayed image
function changeImage(image_path){
    document.getElementById('largeImage').src = image_path
}

// Function to scroll to the 'assessment' section
function scrollToRating(){
    document.querySelector('.assessment').scrollIntoView({
        behavior : 'smooth'
    })
}

// Function to check delivery availability based on entered pincode
function checkPincode(){
    var pincodeString = document.getElementById('pincodeInput').value;
    var pincodeInt = parseInt(pincodeString);
    var currentDate = new Date();

    var fiveDaysLater = new Date(currentDate);
    fiveDaysLater.setDate(currentDate.getDate() + 5);

    var tenDaysLater = new Date(currentDate);
    tenDaysLater.setDate(currentDate.getDate() + 10);

    if(!isNaN(pincodeString) && pincodeString.length === 6){
        if (pincodeInt % 1000 > 500) {
            document.getElementById("result").innerHTML = "Deliverable by " + fiveDaysLater.toDateString();
        } else {
            document.getElementById("result").innerHTML = "Deliverable by " + tenDaysLater.toDateString();
        }
    }else{
        document.getElementById('result').innerHTML = "Invalid Pincode";
    }
}

// Function to toggle the 'read more' content
function toggleReadMore() {
    var readMoreContent = document.getElementById("readMore");
    var readMoreButton = document.getElementsByClassName("readMoreButton")[0];

    if (readMoreContent.style.display === "none") {
        readMoreContent.style.display = "block";
        readMoreButton.style.display = "none";
        readMoreButton.insertAdjacentHTML('afterend', '<hr>');
    } 
}

