/**
 * Starts the game by hiding the start screen and initializing the world.
 */
function startGame() {
  document.getElementById("start-screen").classList.add("hidden");
  init();
}

/**
 * Shows the Game Over screen.
 */
function showGameOver() {
  document.getElementById("game-over-screen").classList.remove("hidden");
}

/**
 * Restarts the game by clearing all intervals and initializing a new world.
 */
function restartGame() {
  // Clear all running intervals to stop the current game loop cleanly
  for (let i = 1; i < 9999; i++) {
    window.clearInterval(i);
  }
  
  // Hide the Game Over screen
  document.getElementById("game-over-screen").classList.add("hidden");
  
  // Start a fresh game
  init();
}

/**
 * Returns to the Home Screen from the Game Over Screen.
 */
function goHome() {
  // Clear all running intervals to stop the current game loop cleanly
  for (let i = 1; i < 9999; i++) {
    window.clearInterval(i);
  }
  
  // Hide the Game Over screen and show the start screen
  document.getElementById("game-over-screen").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");
}

/**
 * Opens a dialog overlay by adding the 'active' class.
 * @param {string} dialogId - The ID of the dialog overlay element.
 */
function openDialog(dialogId) {
  document.getElementById(dialogId).classList.add("active");
}

/**
 * Closes a dialog overlay by removing the 'active' class.
 * @param {string} dialogId - The ID of the dialog overlay element.
 */
function closeDialog(dialogId) {
  document.getElementById(dialogId).classList.remove("active");
}

/**
 * Closes the dialog when clicking on the backdrop (outside the dialog box).
 * @param {Event} event - The click event.
 * @param {string} dialogId - The ID of the dialog overlay element.
 */
function closeDialogOnBackdrop(event, dialogId) {
  if (event.target === event.currentTarget) {
    closeDialog(dialogId);
  }
}

/**
 * Toggles fullscreen mode on the game container.
 */
function toggleFullscreen() {
  let container = document.getElementById("game-container");
  if (!document.fullscreenElement) {
    container.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
