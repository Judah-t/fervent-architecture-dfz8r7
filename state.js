// state.js
// Handles application state and localStorage interactions.

// --- State Variables ---
let currentQuiz = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  type: null, // 'sub-objective', 'module', 'comprehensive'
  filterId: null, // e.g., '1.1', '1.0', 'core1'
  startTime: null,
  answers: [], // { questionIndex, selectedOption, isCorrect }
};

let flashcardState = {
  allCards: [], // Holds the full, unfiltered deck from flashcardsData
  currentDeck: [], // Holds the currently filtered/shuffled deck being studied
  currentIndex: 0,
  shuffled: false,
  filterModuleId: "all", // 'all', '1.0', '2.0', etc.
  studyUnlearnedOnly: false, // boolean
};

let appState = {
  completedModules: {}, // { "1.0": true, "2.0": false, ... }
  lastModuleViewed: null, // e.g., "1.1" or "1.0"
  learnedFlashcards: new Set(), // Use a Set for efficient add/delete/has checks
  currentView: "dashboard",
};

// --- localStorage Keys ---
const LS_COMPLETED_MODULES = "aPlusStudyHub_completedModules_nt";
const LS_LAST_ACTIVITY = "aPlusStudyHub_lastActivity_nt";
const LS_LEARNED_FLASHCARDS = "aPlusStudyHub_learnedFlashcards_nt";

// --- localStorage Functions ---

function loadStateFromLocalStorage() {
  try {
    const completed = localStorage.getItem(LS_COMPLETED_MODULES);
    appState.completedModules = completed ? JSON.parse(completed) : {};

    const lastActivity = localStorage.getItem(LS_LAST_ACTIVITY);
    appState.lastModuleViewed = lastActivity ? lastActivity : null;

    // Load learned flashcards
    const learned = localStorage.getItem(LS_LEARNED_FLASHCARDS);
    // Convert array back to Set upon loading
    appState.learnedFlashcards = learned
      ? new Set(JSON.parse(learned))
      : new Set();
    console.log(
      `Loaded ${appState.learnedFlashcards.size} learned flashcards.`
    );
  } catch (e) {
    console.error("Error loading state from localStorage:", e);
    // Reset state on error to avoid issues
    appState.completedModules = {};
    appState.lastModuleViewed = null;
    appState.learnedFlashcards = new Set();
  }
  // Ensure all Core 1 modules have an entry (defaulting to false)
  // Check if modulesData is loaded before using it
  if (typeof modulesData !== "undefined" && modulesData !== null) {
    modulesData.forEach((module) => {
      if (!(module.id in appState.completedModules)) {
        appState.completedModules[module.id] = false;
      }
    });
  } else {
    console.error(
      "Cannot initialize completedModules: modulesData not loaded."
    );
  }
  // Don't save here, save only when state changes intentionally
}

function saveStateToLocalStorage() {
  try {
    localStorage.setItem(
      LS_COMPLETED_MODULES,
      JSON.stringify(appState.completedModules)
    );
    if (appState.lastModuleViewed) {
      localStorage.setItem(LS_LAST_ACTIVITY, appState.lastModuleViewed);
    } else {
      localStorage.removeItem(LS_LAST_ACTIVITY);
    }
    // Save learned flashcards (convert Set to Array for JSON)
    localStorage.setItem(
      LS_LEARNED_FLASHCARDS,
      JSON.stringify(Array.from(appState.learnedFlashcards))
    );
    // console.log(`Saved ${appState.learnedFlashcards.size} learned flashcards.`);
  } catch (e) {
    console.error("Error saving state to localStorage:", e);
    alert(
      "Warning: Could not save progress. Local storage might be full or unavailable."
    );
  }
}

function updateLastActivity(moduleId) {
  // Only track Core 1 activities
  if (moduleId && parseFloat(moduleId.split(".")[0]) <= 5.0) {
    appState.lastModuleViewed = moduleId;
    saveStateToLocalStorage();
    // Check if renderDashboard exists before calling (defined in ui.js)
    if (typeof renderDashboard === "function") {
      renderDashboard(); // Refresh dashboard to reflect potential change in button state
    } else {
      // This might happen if state.js loads before ui.js, though unlikely with correct order
      console.warn(
        "renderDashboard function is not defined when called from updateLastActivity"
      );
    }
  }
}

function markModuleComplete(moduleId) {
  const mainModuleId = moduleId.split(".")[0] + ".0";
  // Ensure modulesData is available
  if (
    typeof modulesData !== "undefined" &&
    modulesData.some((m) => m.id === mainModuleId)
  ) {
    // Only update if not already complete to avoid unnecessary saves/renders
    if (appState.completedModules[mainModuleId] !== true) {
      appState.completedModules[mainModuleId] = true;
      console.log(`Module ${mainModuleId} marked complete.`);
      saveStateToLocalStorage();
      if (typeof renderDashboard === "function") {
        renderDashboard();
      }
      if (typeof renderModules === "function") {
        renderModules();
      }
    }
  } else {
    console.warn(
      `Could not mark module complete: Invalid module ID ${moduleId} or modulesData not loaded.`
    );
  }
}

// Moved from flashcards.js as it modifies appState directly
function toggleLearnedStatus() {
  // Ensure currentDeck and card exist
  if (
    !flashcardState.currentDeck ||
    flashcardState.currentDeck.length === 0 ||
    flashcardState.currentIndex >= flashcardState.currentDeck.length
  ) {
    console.warn("Cannot toggle learned status: No valid card selected.");
    return;
  }

  const currentCard = flashcardState.currentDeck[flashcardState.currentIndex];
  const cardTerm = currentCard.term; // Using term as the unique identifier

  if (appState.learnedFlashcards.has(cardTerm)) {
    appState.learnedFlashcards.delete(cardTerm);
    console.log(`Card marked as UNLEARNED: ${cardTerm}`);
  } else {
    appState.learnedFlashcards.add(cardTerm);
    console.log(`Card marked as LEARNED: ${cardTerm}`);
  }

  saveStateToLocalStorage(); // Save the updated set

  // Re-filter the deck immediately if "Study Unlearned Only" is active for instant feedback
  if (flashcardState.studyUnlearnedOnly) {
    console.log("Re-filtering deck after marking learned status.");
    // Ensure setupFlashcardDeck exists (defined in flashcards.js)
    if (typeof setupFlashcardDeck === "function") {
      setupFlashcardDeck();
    } else {
      console.error("setupFlashcardDeck function not found!");
      // Fallback: just update the current card's button state
      if (typeof renderFlashcards === "function") renderFlashcards();
    }
  } else {
    // Otherwise, just update the button for the current card
    if (typeof renderFlashcards === "function") renderFlashcards();
  }
}

console.log("state.js loaded.");
