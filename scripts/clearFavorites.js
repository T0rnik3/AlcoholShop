
// Function to clear the local storage
function clearLocalStorage() {
    localStorage.clear();
    alert('Your Favorites List is Clear');
}

// Add event listener to the clear button
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearLocalStorage);