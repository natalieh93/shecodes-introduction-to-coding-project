 function interestAdoptFoster() {
    let name = prompt("What is your name?");
    let choice = prompt("Are you looking for a dog or a cat?");
    let city = prompt("Which city do you live in?");
    let email = prompt("What is your email address?");

     name = name.trim();
     city = city.trim();
     email = email.trim();

    if (
        name.length > 0 &&
        choice.length > 0 &&
        city.length > 0 &&
        email.length > 0
        ) {
        alert(
        "Thank you, " +  name + "! We will send you an email with a list of all the animal shelters in " + city +  "." );
        } else {
        alert(
        "Entering information for all four questions is required for us to begin your adoption or fostering process."
        );
    }
 }

let interestAdoptFosterButton = document.querySelector("button");
interestAdoptFosterButton.addEventListener("click", interestAdoptFoster);
