// flashcards.js
// Handles the logic for flashcard display, filtering, and navigation.

// Assumes flashcardsData is globally available (from data.js)
// Assumes flashcardState, appState are globally available (from state.js)
// Assumes renderFlashcards is globally available (from ui.js)
// Assumes DOM elements for flashcard UI are globally available or accessed via getElementById

function setupFlashcardDeck() {
  // Ensure flashcardsData and state are loaded
  if (
    typeof flashcardsData === "undefined" ||
    flashcardsData === null ||
    typeof flashcardState === "undefined" ||
    typeof appState === "undefined"
  ) {
    console.error(
      "Cannot setup deck: flashcardsData, flashcardState, or appState not loaded!"
    );
    flashcardState.allCards = [];
    flashcardState.currentDeck = [];
    flashcardState.currentIndex = 0;
    if (typeof renderFlashcards === "function") renderFlashcards(); // Render empty state
    return;
  }

  // Store the full deck if not already done
  if (flashcardState.allCards.length === 0) {
    flashcardState.allCards = [...flashcardsData];
  }

  let filteredDeck = [...flashcardState.allCards];

  // 1. Filter by Module
  const selectedModule = flashcardState.filterModuleId;
  if (selectedModule !== "all") {
    filteredDeck = filteredDeck.filter(
      (card) =>
        card.objectiveId &&
        card.objectiveId.startsWith(selectedModule.split(".")[0] + ".")
    );
  }

  // 2. Filter by Learned Status
  if (flashcardState.studyUnlearnedOnly) {
    filteredDeck = filteredDeck.filter(
      (card) => !appState.learnedFlashcards.has(card.term)
    );
  }

  // Update state
  flashcardState.currentDeck = filteredDeck;
  flashcardState.currentIndex = 0; // Reset index
  flashcardState.shuffled = false; // Reset shuffled status

  console.log(
    `Flashcard deck setup: Module=${selectedModule}, UnlearnedOnly=${flashcardState.studyUnlearnedOnly}. Deck size: ${flashcardState.currentDeck.length}`
  );

  // Render the first card (or empty state)
  if (typeof renderFlashcards === "function") {
    renderFlashcards();
  } else {
    console.error("renderFlashcards function not found after setting up deck!");
  }
}

function flipCard() {
  const flashcardContainer = document.getElementById("flashcardContainer");
  // Only flip if there's a card displayed and container exists
  if (
    flashcardContainer &&
    flashcardState.currentDeck &&
    flashcardState.currentDeck.length > 0
  ) {
    flashcardContainer.classList.toggle("flipped");
  }
}

function nextCard() {
  if (!flashcardState.currentDeck || flashcardState.currentDeck.length === 0)
    return;

  if (flashcardState.currentIndex < flashcardState.currentDeck.length - 1) {
    flashcardState.currentIndex++;
  } else {
    // Loop back to start
    flashcardState.currentIndex = 0;
  }
  if (typeof renderFlashcards === "function") renderFlashcards();
}

function prevCard() {
  if (!flashcardState.currentDeck || flashcardState.currentDeck.length === 0)
    return;

  if (flashcardState.currentIndex > 0) {
    flashcardState.currentIndex--;
  } else {
    // Loop back to end
    flashcardState.currentIndex = flashcardState.currentDeck.length - 1;
  }
  if (typeof renderFlashcards === "function") renderFlashcards();
}

function shuffleCards() {
  if (!flashcardState.currentDeck || flashcardState.currentDeck.length === 0) {
    console.warn("Cannot shuffle: No cards in the current deck.");
    return;
  }

  // Fisher-Yates (Knuth) Shuffle on the currentDeck
  for (let i = flashcardState.currentDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flashcardState.currentDeck[i], flashcardState.currentDeck[j]] = [
      flashcardState.currentDeck[j],
      flashcardState.currentDeck[i],
    ];
  }
  flashcardState.currentIndex = 0; // Go back to the first card
  flashcardState.shuffled = true; // Mark as shuffled (optional)
  if (typeof renderFlashcards === "function") renderFlashcards();

  // Visual confirmation
  const shuffleBtn = document.getElementById("shuffleCardsBtn");
  if (shuffleBtn) {
    shuffleBtn.innerHTML =
      '<i data-lucide="check" class="inline-block mr-1 h-4 w-4"></i> Shuffled!';
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
    setTimeout(() => {
      shuffleBtn.innerHTML =
        '<i data-lucide="shuffle" class="inline-block mr-1 h-4 w-4"></i> Shuffle';
      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
    }, 1200);
  }
}

console.log("flashcards.js loaded.");
