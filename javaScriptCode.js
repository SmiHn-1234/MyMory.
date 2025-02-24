// Navigation and Page Switching Logic
const startingPage = document.getElementById('starting-page');
const navBar = document.querySelector('.navbar');
const loginPage = document.getElementById('login-page');
const libraryPage = document.getElementById('library-page');
const createTimelinePage = document.getElementById('create-timeline-page');
const startButton = document.getElementById('start-button');
const addNewButton = document.getElementById('add-new');
const libraryButton = document.getElementById('library');
const loginForm = document.getElementById('login-form');

// Initial State
let isLoggedIn = false;

// Show Page Function
function showPage(page) {
    startingPage.style.display = 'none';
    navBar.style.display = 'none';
    loginPage.style.display = 'none';
    libraryPage.style.display = 'none';
    createTimelinePage.style.display = 'none';

    page.style.display = 'block';
}

// Starting Page Button
startButton.addEventListener('click', () => {
    showPage(loginPage);
});

// Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    isLoggedIn = true;
    showPage(libraryPage);
    navBar.style.display = 'flex';
});

// Navigate to Library Page
libraryButton.addEventListener('click', () => {
    showPage(libraryPage);
});

// Navigate to Timeline Creation Page
addNewButton.addEventListener('click', () => {
    showPage(createTimelinePage);
});
