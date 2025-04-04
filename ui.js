// ui.js
// Handles rendering UI components and managing view switching.

// --- DOM References (Assumed to be globally available from main.js or index.html) ---
// It's generally better practice to pass these into functions or have a dedicated DOM module,
// but for simplicity with global scope, we assume they exist.
/*
const mainContent = document.querySelector('main');
const navLinks = document.querySelectorAll('.nav-link');
const modulesAccordion = document.getElementById('modulesAccordion');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
// ... other DOM elements ...
const flashcardFilterModule = document.getElementById('flashcardFilterModule');
const completionMessage = document.getElementById('completionMessage');
const flashcardIconFront = document.getElementById('flashcardIconFront');
const flashcardIconBack = document.getElementById('flashcardIconBack');
const markLearnedBtn = document.getElementById('markLearnedBtn');
const cardCounter = document.getElementById('cardCounter');
const flashcardTerm = document.getElementById('flashcardTerm');
const flashcardDefinition = document.getElementById('flashcardDefinition');
const flashcardContainer = document.getElementById('flashcardContainer');
const portsTableBody = document.getElementById('portsTableBody');
const acronymsList = document.getElementById('acronymsList');
// ... quiz elements ...
*/

// --- Rendering Functions ---

function renderDashboard() {
  // Check if required state/data is loaded
  if (typeof appState === "undefined" || typeof modulesData === "undefined") {
    console.error(
      "Cannot render dashboard: appState or modulesData not loaded."
    );
    return;
  }

  // Update progress bar
  const core1Modules = modulesData.map((m) => m.id);
  const completedCount = core1Modules.filter(
    (id) => appState.completedModules[id] === true
  ).length;
  const totalCore1Modules = core1Modules.length;
  const progressPercentage =
    totalCore1Modules > 0
      ? Math.round((completedCount / totalCore1Modules) * 100)
      : 0;

  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  if (progressBar) progressBar.style.width = `${progressPercentage}%`;
  if (progressText)
    progressText.textContent = `${progressPercentage}% Complete (${completedCount} / ${totalCore1Modules} Modules)`;

  // Update "Continue Last Activity" button and info text
  const continueLastBtn = document.getElementById("continueLastBtn");
  const lastActivityInfo = document.getElementById("lastActivityInfo");
  const lastModuleIdSpan = document.getElementById("lastModuleId");

  if (appState.lastModuleViewed) {
    if (continueLastBtn) continueLastBtn.disabled = false;
    if (lastActivityInfo) lastActivityInfo.classList.remove("hidden");

    let lastName = "Unknown Section";
    const [mainId, subId] = appState.lastModuleViewed.split(".");
    const parentModule = modulesData.find((m) => m.id === `${mainId}.0`);
    if (parentModule) {
      if (subId && subId !== "0") {
        const subObjective = parentModule.objectives.find(
          (o) => o.id === appState.lastModuleViewed
        );
        lastName = subObjective
          ? `Objective ${subObjective.id}`
          : parentModule.name;
      } else {
        lastName = parentModule.name;
      }
    }
    if (lastModuleIdSpan)
      lastModuleIdSpan.textContent = `${lastName} (${appState.lastModuleViewed})`;
  } else {
    if (continueLastBtn) continueLastBtn.disabled = true;
    if (lastActivityInfo) lastActivityInfo.classList.add("hidden");
  }
  // Check if lucide exists before calling
  if (typeof lucide !== "undefined") {
    lucide.createIcons(); // Redraw icons if needed
  }
}

function renderModules() {
  // Check if required state/data is loaded
  if (typeof appState === "undefined" || typeof modulesData === "undefined") {
    console.error("Cannot render modules: appState or modulesData not loaded.");
    return;
  }
  const modulesAccordion = document.getElementById("modulesAccordion");
  if (!modulesAccordion) return; // Exit if container not found

  modulesAccordion.innerHTML = ""; // Clear existing modules
  modulesData.forEach((module) => {
    const isCompleted = appState.completedModules[module.id] === true;
    const moduleElement = document.createElement("div");
    moduleElement.className =
      "bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-md border border-gray-700/50 overflow-hidden";
    moduleElement.innerHTML = `
            <div class="module-header flex justify-between items-center p-4 cursor-pointer" data-module-id="${
              module.id
            }">
                <h3 class="text-lg font-semibold flex items-center text-gray-100">
                     ${
                       isCompleted
                         ? '<i data-lucide="check-circle-2" class="text-green-400 mr-3 h-5 w-5 flex-shrink-0"></i>'
                         : '<i data-lucide="circle" class="text-gray-500 mr-3 h-5 w-5 flex-shrink-0"></i>'
                     }
                    <span class="mr-2 text-cyan-400 font-mono">${
                      module.id
                    }</span> ${module.name}
                 </h3>
                 <div class="flex items-center space-x-3 flex-shrink-0 ml-4">
                     <button class="start-quiz-btn bg-gray-700 hover:bg-gray-600 text-xs px-3 py-1 rounded-md text-gray-300 hover:text-white transition duration-150 transform hover:scale-105" data-quiz-type="module" data-filter-id="${
                       module.id
                     }">
                         <i data-lucide="file-question" class="inline-block mr-1 h-3 w-3"></i> Mod Quiz
                     </button>
                    <i data-lucide="chevron-down" class="text-gray-400 transition-transform duration-300 transform"></i>
                 </div>
            </div>
            <div class="module-content">
                 <ul class="space-y-3 p-4 pt-2">
                    ${module.objectives
                      .map(
                        (obj) => `
                        <li class="flex justify-between items-center text-sm border-l-2 border-gray-700 pl-3 py-1 hover:border-cyan-500 transition-colors duration-200">
                             <span class="text-gray-300"><strong class="text-cyan-400 mr-1">${obj.id}:</strong> ${obj.title}</span>
                             <button class="start-quiz-btn bg-gray-700/70 hover:bg-cyan-600/80 text-xs px-2 py-1 rounded text-gray-400 hover:text-white transition duration-150 transform hover:scale-105 flex-shrink-0 ml-2" data-quiz-type="sub-objective" data-filter-id="${obj.id}">
                                  <i data-lucide="help-circle" class="inline-block h-3 w-3"></i> Quiz
                             </button>
                         </li>
                    `
                      )
                      .join("")}
                 </ul>
             </div>
        `;
    modulesAccordion.appendChild(moduleElement);
  });
  // Check if lucide exists before calling
  if (typeof lucide !== "undefined") {
    lucide.createIcons(); // Make sure icons are rendered
  }
  // Listeners should be attached after rendering, typically in main.js or by calling a function from there
  if (typeof addModuleEventListeners === "function") {
    addModuleEventListeners(); // Re-attach listeners
  } else {
    console.warn(
      "addModuleEventListeners not defined when renderModules finished."
    );
  }
}

function renderResources() {
  // Check if required data is loaded
  if (typeof resourcesData === "undefined") {
    console.error("Cannot render resources: resourcesData not loaded.");
    return;
  }
  const portsTableBody = document.getElementById("portsTableBody");
  const acronymsList = document.getElementById("acronymsList");

  if (portsTableBody) {
    portsTableBody.innerHTML = resourcesData.commonPorts
      .map(
        (p) => `
            <tr class="hover:bg-gray-700/40 transition-colors duration-150">
                <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-100">${p.port}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-400">${p.protocol}</td>
                <td class="px-4 py-2 text-sm text-gray-300">${p.purpose}</td>
            </tr>
        `
      )
      .join("");
  }

  if (acronymsList) {
    const sortedAcronyms = [...resourcesData.acronymGlossary].sort((a, b) =>
      a.acronym.localeCompare(b.acronym)
    );
    acronymsList.innerHTML = sortedAcronyms
      .map(
        (a) => `
             <li class="border-b border-gray-700/50 pb-1 pt-1 hover:bg-gray-700/30 px-1 rounded transition-colors duration-150">
                 <strong class="text-cyan-400 font-semibold">${a.acronym}:</strong> <span class="text-gray-300">${a.definition}</span>
             </li>
        `
      )
      .join("");
  }
}

function renderFlashcards() {
  // Check if required state is loaded
  if (
    typeof flashcardState === "undefined" ||
    typeof appState === "undefined"
  ) {
    console.error(
      "Cannot render flashcards: flashcardState or appState not loaded."
    );
    return;
  }
  // Get DOM elements (might be better to pass these or use a dedicated DOM module)
  const flashcardTerm = document.getElementById("flashcardTerm");
  const flashcardDefinition = document.getElementById("flashcardDefinition");
  const flashcardIconFront = document.getElementById("flashcardIconFront");
  const flashcardIconBack = document.getElementById("flashcardIconBack");
  const cardCounter = document.getElementById("cardCounter");
  const markLearnedBtn = document.getElementById("markLearnedBtn");
  const flashcardContainer = document.getElementById("flashcardContainer");

  // Ensure elements exist
  if (
    !flashcardTerm ||
    !flashcardDefinition ||
    !flashcardIconFront ||
    !flashcardIconBack ||
    !cardCounter ||
    !markLearnedBtn ||
    !flashcardContainer
  ) {
    console.error("One or more flashcard elements not found in the DOM.");
    return;
  }

  // Ensure currentDeck has cards
  if (!flashcardState.currentDeck || flashcardState.currentDeck.length === 0) {
    flashcardTerm.textContent = "No cards match filters.";
    flashcardDefinition.textContent = "";
    flashcardIconFront.innerHTML = ""; // Clear icons
    flashcardIconBack.innerHTML = "";
    cardCounter.textContent = "0 / 0";
    markLearnedBtn.classList.add("hidden"); // Hide button if no card
    return;
  }

  // Ensure currentIndex is valid for the currentDeck
  if (
    flashcardState.currentIndex < 0 ||
    flashcardState.currentIndex >= flashcardState.currentDeck.length
  ) {
    console.warn(
      `Invalid flashcard index ${flashcardState.currentIndex} for deck size ${flashcardState.currentDeck.length}, resetting to 0.`
    );
    flashcardState.currentIndex = 0;
    if (flashcardState.currentDeck.length === 0) {
      // Double check after reset
      return renderFlashcards(); // Re-call to display "No cards" message
    }
  }

  markLearnedBtn.classList.remove("hidden"); // Show button if card exists
  const currentCard = flashcardState.currentDeck[flashcardState.currentIndex];

  // Display Term and Definition
  flashcardTerm.textContent = currentCard.term;
  flashcardDefinition.textContent = currentCard.definition;

  // Display Optional Icon
  const iconHTML = currentCard.icon
    ? `<i data-lucide="${currentCard.icon}" class="w-8 h-8 flashcard-icon"></i>`
    : "";
  flashcardIconFront.innerHTML = iconHTML;
  flashcardIconBack.innerHTML = iconHTML; // Show icon on back too, or customize

  // Update Card Counter based on currentDeck size
  cardCounter.textContent = `${flashcardState.currentIndex + 1} / ${
    flashcardState.currentDeck.length
  }`;

  // Update "Mark as Learned" button state
  const isLearned = appState.learnedFlashcards.has(currentCard.term); // Use term as identifier
  if (isLearned) {
    markLearnedBtn.innerHTML = `<i data-lucide="x-circle" class="inline-block h-3 w-3 mr-1"></i>Mark as Unlearned`;
    markLearnedBtn.className =
      "text-xs px-3 py-1 rounded-full border border-yellow-500 text-yellow-400 hover:bg-yellow-500/20 transition-colors duration-150";
  } else {
    markLearnedBtn.innerHTML = `<i data-lucide="check-circle" class="inline-block h-3 w-3 mr-1"></i>Mark as Learned`;
    markLearnedBtn.className =
      "text-xs px-3 py-1 rounded-full border border-green-500 text-green-400 hover:bg-green-500/20 transition-colors duration-150";
  }

  // Reset flip state
  flashcardContainer.classList.remove("flipped");
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// --- View Switching ---
function showView(viewId) {
  // Check if required state is loaded
  if (typeof appState === "undefined") {
    console.error("Cannot switch view: appState not loaded.");
    return;
  }
  const mainContent = document.querySelector("main");
  const navLinks = document.querySelectorAll(".nav-link");
  if (!mainContent || !navLinks) {
    console.error("Cannot switch view: Main content or nav links not found.");
    return;
  }

  // Hide all sections
  mainContent.querySelectorAll("section").forEach((section) => {
    section.style.display = "none";
  });

  // Show the target section
  const targetSection = document.getElementById(viewId);
  if (targetSection) {
    targetSection.style.display = "block";
    appState.currentView = viewId;

    // Update active nav link
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.dataset.target === viewId) {
        link.classList.add("active");
      }
    });

    // Lazy load/render content if not already done
    // Ensure render functions exist before calling
    if (viewId === "dashboard" && typeof renderDashboard === "function")
      renderDashboard();
    // Setup initial deck only when navigating to flashcards view
    if (viewId === "flashcards" && typeof setupFlashcardDeck === "function")
      setupFlashcardDeck();
    if (viewId === "resources" && typeof renderResources === "function") {
      const portsTableBody = document.getElementById("portsTableBody");
      if (portsTableBody && portsTableBody.innerHTML === "") {
        // Check if already rendered
        renderResources(); // Load once
      }
    }

    // Reset quiz view state only if navigating *to* quizzes and no quiz is active
    if (viewId === "quizzes") {
      const quizInProgress = document.getElementById("quizInProgress");
      const quizResults = document.getElementById("quizResults");
      const quizSetup = document.getElementById("quizSetup");
      if (
        quizInProgress &&
        quizResults &&
        quizSetup &&
        quizInProgress.classList.contains("hidden") &&
        quizResults.classList.contains("hidden")
      ) {
        quizSetup.classList.remove("hidden");
        quizInProgress.classList.add("hidden");
        quizResults.classList.add("hidden");
      }
    }
  } else {
    console.error("Target view not found:", viewId);
    showView("dashboard"); // Fallback
  }
  window.scrollTo(0, 0); // Scroll to top on view change
  if (typeof lucide !== "undefined") {
    lucide.createIcons(); // Re-render icons in the new view
  }
}

// --- Filter Population ---
function populateFlashcardFilters() {
  const flashcardFilterModule = document.getElementById(
    "flashcardFilterModule"
  );
  if (!flashcardFilterModule) {
    console.error("Flashcard module filter dropdown not found.");
    return;
  }
  // Check if modulesData is loaded
  if (typeof modulesData === "undefined" || modulesData === null) {
    console.error("Cannot populate filters: modulesData not loaded.");
    return;
  }

  // Clear existing options except the first ("All Core 1")
  while (flashcardFilterModule.options.length > 1) {
    flashcardFilterModule.remove(1);
  }

  // Add options for each module
  modulesData.forEach((module) => {
    const option = document.createElement("option");
    option.value = module.id; // e.g., "1.0"
    option.textContent = `Module ${module.id}: ${module.name}`;
    flashcardFilterModule.appendChild(option);
  });
  // TODO: Add Core 2 later if implemented
}

console.log("ui.js loaded.");
