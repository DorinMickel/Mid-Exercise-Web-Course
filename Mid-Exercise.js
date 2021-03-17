function submitContactUs() {
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;

    if ( fName == "" ) {
        document.getElementById('requiredErrorFName').style = "display:block";
    }

    if ( lName == "" ) {
        document.getElementById('requiredErrorLName').style = "display:block";
    }

    if ( phoneNumber == "" ) {
        document.getElementById('requiredErrorPhoneNumber').style = "display:block";
    }

    if ( email == "" ) {
        document.getElementById('requiredErrorEmail').style = "display:block";
    }

}


var changeImage = setInterval(changeImage,8000);

function changeImage() {
    var image = document.getElementById('changingImage').src;

    if (image == "http://127.0.0.1:5501/paz_250x110103131473.jpg") {
    document.getElementById('changingImage').src = "http://127.0.0.1:5501/250X110668568400.jpg";

    } else if (image == "http://127.0.0.1:5501/250X110668568400.jpg") {
        document.getElementById('changingImage').src = "http://127.0.0.1:5501/250X110571325734.jpg";

    } else {
        document.getElementById('changingImage').src = "http://127.0.0.1:5501/paz_250x110103131473.jpg";
    }
}

var changeHeadline = setInterval(changeHeadline,5000);

function changeHeadline() {
    var headline = document.getElementById('changingHeadline').innerHTML;

    if (headline == "שטחי מסחר פז סנטר") {
    document.getElementById('changingHeadline').innerHTML = "טיפז";

    } else if (headline == "טיפז") {
        document.getElementById('changingHeadline').innerHTML = "yellow click&pick";
        
    } else {
        document.getElementById('changingHeadline').innerHTML = "שטחי מסחר פז סנטר";
    }
    
}
