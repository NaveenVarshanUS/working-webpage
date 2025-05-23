// Array of motivational quotes with authors
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    }
];

// DOM elements
const quoteTextElement = document.getElementById('quote-text');
const quoteAuthorElement = document.getElementById('quote-author');
const nextQuoteButton = document.getElementById('next-quote');

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display a new quote with animation
function displayNewQuote() {
    // Start fade out (by removing fade-in class)
    quoteTextElement.classList.remove('fade-in');
    quoteAuthorElement.classList.remove('fade-in');
    
    // After a short delay, change the quote and fade in
    setTimeout(() => {
        const randomQuote = getRandomQuote();
        quoteTextElement.textContent = randomQuote.text;
        quoteAuthorElement.textContent = `— ${randomQuote.author}`;
        
        // Add fade-in class to trigger animation
        quoteTextElement.classList.add('fade-in');
        quoteAuthorElement.classList.add('fade-in');
    }, 300); // This should match the duration of the fade-out transition
}

// Event listener for the button
nextQuoteButton.addEventListener('click', displayNewQuote);

// Display a random quote when the page loads
window.addEventListener('load', displayNewQuote);