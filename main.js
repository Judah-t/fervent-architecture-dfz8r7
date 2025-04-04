// main.js
// Main initialization script and event listener attachments.

// Assumes all other JS files (data, state, ui, quiz, flashcards) are loaded first.

// --- Event Listeners Setup ---
function addNavigationListeners() {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Use closest button to handle clicks on icon inside button
      const button = e.target.closest("button");
      if (button && button.dataset.target) {
        const targetView = button.dataset.target;
        // Ensure showView function exists (defined in ui.js)
        if (typeof showView === "function") {
          showView(targetView);
        } else {
          console.error("showView function not found!");
        }
      }
    });
  });
}

function addModuleEventListeners() {
  const modulesAccordion = document.getElementById("modulesAccordion");
  if (!modulesAccordion) {
    console.error("Modules accordion container not found.");
    return;
  }

  // Use event delegation on the container for better performance and handling dynamic content
  modulesAccordion.addEventListener("click", (e) => {
    const header = e.target.closest(".module-header");
    const quizButton = e.target.closest(".start-quiz-btn");

    // Handle Quiz Button Click
    if (quizButton) {
      e.stopPropagation(); // Prevent accordion toggle
      const quizType = quizButton.dataset.quizType;
      const filterId = quizButton.dataset.filterId;
      console.log(
        `Module Quiz Button Clicked! Type: ${quizType}, Filter ID: ${filterId}`
      );
      if (quizType && filterId && typeof startQuiz === "function") {
        startQuiz(quizType, filterId);
      } else {
        console.error(
          "Quiz button missing data attributes or startQuiz function not found:",
          quizButton
        );
      }
      return; // Stop processing if it was a quiz button
    }

    // Handle Accordion Toggle Click (if click was on header but not button)
    if (header) {
      const content = header.nextElementSibling;
      const icon = header.querySelector(
        '[data-lucide="chevron-down"], [data-lucide="chevron-up"]'
      );
      const moduleId = header.dataset.moduleId;

      if (content.classList.contains("expanded")) {
        content.classList.remove("expanded");
        if (icon && typeof lucide !== "undefined") {
          icon.setAttribute("data-lucide", "chevron-down");
          lucide.createIcons();
        }
      } else {
        // Optional: Collapse others
        // modulesAccordion.querySelectorAll('.module-content.expanded').forEach(openContent => { ... });

        content.classList.add("expanded");
        if (icon && typeof lucide !== "undefined") {
          icon.setAttribute("data-lucide", "chevron-up");
          lucide.createIcons();
        }
        // Ensure updateLastActivity exists (defined in state.js)
        if (typeof updateLastActivity === "function") {
          updateLastActivity(moduleId); // Track interaction
        }
      }
    }
  });
}

function addQuizListeners() {
  // Get buttons (ensure they exist)
  const nextQuestionBtn = document.getElementById("nextQuestionBtn");
  const restartQuizBtn = document.getElementById("restartQuizBtn");
  const startComprehensiveQuizBtn = document.getElementById(
    "startComprehensiveQuizBtn"
  ); // Dashboard button
  const quizSetupContainer = document.getElementById("quizSetup"); // Quiz page container

  // Listener for Next button
  if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener("click", () => {
      if (!nextQuestionBtn.disabled && typeof nextQuestion === "function") {
        nextQuestion();
      }
    });
  }

  // Listener for Restart button
  if (restartQuizBtn) {
    restartQuizBtn.addEventListener("click", () => {
      // Ensure currentQuiz state and startQuiz function exist
      if (
        typeof currentQuiz !== "undefined" &&
        currentQuiz.type &&
        currentQuiz.filterId &&
        typeof startQuiz === "function"
      ) {
        startQuiz(currentQuiz.type, currentQuiz.filterId);
      } else {
        if (typeof showView === "function") showView("quizzes"); // Go back to quiz setup
        const quizResults = document.getElementById("quizResults");
        const quizInProgress = document.getElementById("quizInProgress");
        const quizSetup = document.getElementById("quizSetup");
        if (quizResults) quizResults.classList.add("hidden");
        if (quizInProgress) quizInProgress.classList.add("hidden");
        if (quizSetup) quizSetup.classList.remove("hidden");
      }
    });
  }

  // Listener for the quiz start button on the Dashboard
  if (startComprehensiveQuizBtn) {
    startComprehensiveQuizBtn.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (
        button &&
        button.dataset.quizType &&
        button.dataset.filterId &&
        typeof startQuiz === "function"
      ) {
        startQuiz(button.dataset.quizType, button.dataset.filterId);
      }
    });
  } else {
    console.warn("Dashboard comprehensive quiz button not found");
  }

  // Event Delegation for buttons inside #quizSetup (Quiz Page)
  if (quizSetupContainer) {
    quizSetupContainer.addEventListener("click", (e) => {
      // Quiz start buttons
      const button = e.target.closest("button.quiz-start-button");
      if (button) {
        const quizType = button.dataset.quizType;
        const filterId = button.dataset.filterId;
        if (quizType && filterId && typeof startQuiz === "function") {
          startQuiz(quizType, filterId);
        } else {
          console.error(
            "Quiz start button missing data attributes or startQuiz function not found",
            button
          );
        }
      }

      // "Browse Modules" link/button
      const navLink = e.target.closest("button.nav-link");
      if (
        navLink &&
        navLink.dataset.target === "modules" &&
        typeof showView === "function"
      ) {
        showView("modules");
      }
    });
  } else {
    console.error("#quizSetup container not found for event delegation.");
  }
}

function addFlashcardListeners() {
  // Get buttons (ensure they exist)
  const flipCardBtn = document.getElementById("flipCardBtn");
  const nextCardBtn = document.getElementById("nextCardBtn");
  const prevCardBtn = document.getElementById("prevCardBtn");
  const shuffleCardsBtn = document.getElementById("shuffleCardsBtn");
  const markLearnedBtn = document.getElementById("markLearnedBtn");
  const flashcardFilterModule = document.getElementById(
    "flashcardFilterModule"
  );
  const flashcardFilterLearned = document.getElementById(
    "flashcardFilterLearned"
  );

  if (flipCardBtn && typeof flipCard === "function")
    flipCardBtn.addEventListener("click", flipCard);
  if (nextCardBtn && typeof nextCard === "function")
    nextCardBtn.addEventListener("click", nextCard);
  if (prevCardBtn && typeof prevCard === "function")
    prevCardBtn.addEventListener("click", prevCard);
  if (shuffleCardsBtn && typeof shuffleCards === "function")
    shuffleCardsBtn.addEventListener("click", shuffleCards);
  if (markLearnedBtn && typeof toggleLearnedStatus === "function")
    markLearnedBtn.addEventListener("click", toggleLearnedStatus);

  // Filter listeners
  if (flashcardFilterModule && typeof setupFlashcardDeck === "function") {
    flashcardFilterModule.addEventListener("change", (e) => {
      // Ensure flashcardState exists
      if (typeof flashcardState !== "undefined") {
        flashcardState.filterModuleId = e.target.value;
        setupFlashcardDeck(); // Re-filter and render
      }
    });
  }

  if (flashcardFilterLearned && typeof setupFlashcardDeck === "function") {
    flashcardFilterLearned.addEventListener("change", (e) => {
      // Ensure flashcardState exists
      if (typeof flashcardState !== "undefined") {
        flashcardState.studyUnlearnedOnly = e.target.checked;
        setupFlashcardDeck(); // Re-filter and render
      }
    });
  }
}

function addDashboardListeners() {
  const continueLastBtn = document.getElementById("continueLastBtn");
  if (continueLastBtn) {
    continueLastBtn.addEventListener("click", () => {
      // Ensure appState and showView exist
      if (
        typeof appState !== "undefined" &&
        appState.lastModuleViewed &&
        typeof showView === "function"
      ) {
        showView("modules");
        // Attempt to expand and scroll to the relevant module
        const [mainId] = appState.lastModuleViewed.split(".");
        const modulesAccordion = document.getElementById("modulesAccordion"); // Need this ref here
        if (!modulesAccordion) return;
        const targetModuleHeader = modulesAccordion.querySelector(
          `.module-header[data-module-id="${mainId}.0"]`
        );

        if (targetModuleHeader) {
          const content = targetModuleHeader.nextElementSibling;
          // Ensure click simulation happens only if not already expanded
          if (content && !content.classList.contains("expanded")) {
            // Check if click method exists before calling
            if (typeof targetModuleHeader.click === "function") {
              targetModuleHeader.click(); // Simulate click to expand
            }
          }
          // Scroll after a short delay to allow for expansion animation
          setTimeout(() => {
            if (targetModuleHeader.scrollIntoView) {
              // Check if scrollIntoView exists
              targetModuleHeader.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }, 150);
        }
      }
    });
  }
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed.");

  // Set current year in footer
  const currentYearEl = document.getElementById("currentYear");
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // Verify essential data/state objects are loaded
  let dataReady = true;
  if (typeof modulesData === "undefined") {
    console.error("CRITICAL: modulesData not loaded!");
    dataReady = false;
  }
  if (typeof flashcardsData === "undefined") {
    console.error("CRITICAL: flashcardsData not loaded!");
    dataReady = false;
  }
  if (typeof resourcesData === "undefined") {
    console.error("CRITICAL: resourcesData not loaded!");
    dataReady = false;
  }
  if (typeof quizQuestions === "undefined") {
    console.error("CRITICAL: quizQuestions not loaded!");
    dataReady = false;
  }
  if (typeof appState === "undefined") {
    console.error("CRITICAL: appState not loaded!");
    dataReady = false;
  }
  if (typeof flashcardState === "undefined") {
    console.error("CRITICAL: flashcardState not loaded!");
    dataReady = false;
  }
  if (typeof currentQuiz === "undefined") {
    console.error("CRITICAL: currentQuiz not loaded!");
    dataReady = false;
  }

  if (!dataReady) {
    alert(
      "A critical error occurred loading application data. Please check the console (F12) and ensure all .js files (questions.js, data.js, state.js) are present and correctly loaded before main.js."
    );
    return; // Stop initialization
  }

  // Load saved state from localStorage
  if (typeof loadStateFromLocalStorage === "function") {
    loadStateFromLocalStorage();
  } else {
    console.error("CRITICAL: loadStateFromLocalStorage function not found!");
    return; // Cannot proceed without state loading
  }

  // Populate dynamic UI elements if functions exist
  if (typeof populateFlashcardFilters === "function")
    populateFlashcardFilters();
  if (typeof setupFlashcardDeck === "function") setupFlashcardDeck(); // Setup initial flashcard deck

  // Initial UI rendering if functions exist
  if (typeof renderDashboard === "function") renderDashboard();
  if (typeof renderModules === "function") renderModules(); // Also attaches module listeners

  // Attach remaining event listeners if functions exist
  if (typeof addNavigationListeners === "function") addNavigationListeners();
  if (typeof addQuizListeners === "function") addQuizListeners();
  if (typeof addFlashcardListeners === "function") addFlashcardListeners();
  if (typeof addDashboardListeners === "function") addDashboardListeners();

  // Show initial view if function exists
  if (typeof showView === "function") {
    showView("dashboard");
  } else {
    console.error(
      "CRITICAL: showView function not found! Cannot display initial view."
    );
    // Manual fallback
    const dashboardSection = document.getElementById("dashboard");
    if (dashboardSection) dashboardSection.style.display = "block";
  }

  // Initialize Lucide icons (check if it exists first)
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  } else {
    console.warn("Lucide icons library not loaded.");
  }
  console.log(
    `A+ Study Hub // NT Initialized. Current time: ${new Date().toLocaleTimeString()}`
  );
});

console.log("main.js loaded.");
