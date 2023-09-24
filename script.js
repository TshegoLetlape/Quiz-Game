document.addEventListener("DOMContentLoaded", function() {
  // Wait for the DOM to be fully loaded

  class QuizButton {
    constructor(buttonId, targetUrl) {
      this.button = document.getElementById(buttonId);
      this.targetUrl = targetUrl;

      this.setupClickHandler();
    }

    setupClickHandler() {
      if (this.button) {
        this.button.addEventListener("click", () => {
          this.navigateToQuiz();
        });
      }
    }

    navigateToQuiz() {
      if (this.targetUrl) {
        window.location.href = this.targetUrl;
      }
    }
  }

  // Create an instance of the QuizButton class
  const playButton = new QuizButton("playButton", "quiz.html");
});
