function showProductInfo(productName, ) {
    // Construct the message for the pop-up
    var message = "Selected Product: " + productName + "\n";
    // message += "Price: $" + price.toFixed(2) + "\n\n";
    message += "Are you sure you want to purchase this product?";

    // Display the confirmation pop-up
    var confirmPurchase = confirm(message);

    // If user confirms, proceed with purchase
    if (confirmPurchase) {
        alert("Talk to a representative & Make enquiry");
        alert("Tel: +2349050562329 | Whatsapp: +2349050562329");
        location.href = "https://wa.me/2349050562329?text?";
    } else {
        // If user cancels, redirect to home page
        location.href = "index.html"; // Adjust the URL based on your home page
    }
}