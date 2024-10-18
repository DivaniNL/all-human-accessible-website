let hasShownNewsletterPopup = false; // Flag to track if the popup has been shown by scrolling
let Textsizeison = 0; // Initialize the state variable
const mainContent = document.getElementById('main_content');
const article_btns = document.querySelector('.article_btns');
const popup = document.querySelector('.popup'); // Select your popup element

function showPopUp(popupname) {
    if (popupname) {
        console.log(popupname);
        let selectedPopUp = document.querySelector("[data-popup='" + popupname + "']");
        console.log(selectedPopUp);
        if (selectedPopUp) {
            selectedPopUp.style.display = 'block'; // Show the popup
        }
    }
    document.body.classList.add('has-popup'); // Add class to body
}

const ScrollActions = () => {
    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round(pos * 100 / calcHeight);
    
    console.log(scrollValue);
    // Check if newsletter popup needs to be shown
    if (scrollValue > 50 && !hasShownNewsletterPopup) { // Check if popup has not been shown yet
        console.log('Scroll value passed 50%');
        showPopUp("nieuwsbrief_popup");
        hasShownNewsletterPopup = true; // Set the flag to true
    }

    // Disable utility buttons
    const mainContentRect = mainContent.getBoundingClientRect();
    if (mainContentRect.bottom < 0) {
        // If scrolled past, add the class
        article_btns.classList.add('doneReading');
    } else {
        // If not scrolled past, remove the class
        article_btns.classList.remove('doneReading');
    }
}

// Function to close all popups
function closeAllPopups() {
    console.log('test');
    let allPopups = document.querySelectorAll('.popup'); // Select all popup elements
    allPopups.forEach(popup => {
        popup.style.display = 'none'; // Hide each popup
    });
    document.body.classList.remove('has-popup'); // Remove popup-related class from body
}

// Event listener for closing popups
document.querySelectorAll('.closePopUp').forEach(button => {
    button.addEventListener('click', closeAllPopups);
});

// Allow reopening the newsletter popup on button click
document.querySelectorAll('.openNewsletterPopupButton').forEach(button => {
    button.addEventListener('click', () => {
        showPopUp("nieuwsbrief_popup"); // Open the popup
    });
});

// Allow reopening the search popup on button click
document.querySelectorAll('.openSearchPopupButton').forEach(button => {
    button.addEventListener('click', () => {
        showPopUp("search_popup"); // Open the popup
    });
});

// Select the element with the specified classes and add a click event listener
document.querySelector('.utility_btn.textsize').addEventListener("click", function() {
    if (Textsizeison === 0) {
        // Increase font size by 10% for direct children of #main_content
        document.querySelectorAll('#main_content > *').forEach(function(el) {
            const currentFontSize = parseInt(window.getComputedStyle(el).fontSize);
            const increasedSize = (currentFontSize * 110) / 100; // Increase font size
            el.style.fontSize = increasedSize + 'px'; // Set new font size
        });
        Textsizeison = 1; // Update state variable
    } else {
        // Decrease font size back to original (by dividing by 1.10)
        document.querySelectorAll('#main_content > *').forEach(function(el) {
            const currentFontSize = parseInt(window.getComputedStyle(el).fontSize);
            const decreasedSize = (currentFontSize * 100) / 110; // Decrease font size
            el.style.fontSize = decreasedSize + 'px'; // Set new font size
            el.style.fontSize = '';
        });
        Textsizeison = 0; // Update state variable
    }
});

// Close popup when Escape key is pressed
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { // Check if the pressed key is "Escape"
        closeAllPopups();
    }
});

// Event listener to detect clicks outside the popup and close it
document.addEventListener('click', function(event) {
    // Find the active popup, assuming only one popup is visible at a time
    const activePopup = document.querySelector('.popup[style*="display: block"]');
    
    // Proceed only if an active popup exists
    if (activePopup) {
        // Check if the click target is outside the popup and not one of the buttons that opens the popup
        if (!activePopup.contains(event.target) && 
            !event.target.closest('.openNewsletterPopupButton') && 
            !event.target.closest('.openSearchPopupButton')) {
            closeAllPopups(); // Hide the popup if the click is outside of it
        }
    }
});

// Prevent clicks on the popup itself from closing it
popup.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the document
});

// Scroll actions listener
window.onscroll = ScrollActions;
