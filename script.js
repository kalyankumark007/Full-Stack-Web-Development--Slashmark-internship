document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio loaded successfully!");

    // Example JavaScript functionality (more can be added):
    const profileImg = document.querySelector(".profile-img");
    profileImg.addEventListener("click", function() {
        alert("This is K. Kalyan Kumar's profile!");
    });

    // You can add more interactive features here, like lightbox for the photo gallery or smooth scroll.
    document.getElementById("contactButton").addEventListener("click", function() {
    alert("Contact me at: kalyankumark7034@gmail.com\nPhone: +91 7032647601");
});

});