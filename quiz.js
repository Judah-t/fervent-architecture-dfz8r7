// quiz.js
// Handles the logic for quizzes.

// Assumes quizQuestions, modulesData, appState are globally available
// Assumes UI update functions (showView, renderDashboard, renderModules) are globally available
// Assumes DOM elements for quiz UI are globally available or accessed via getElementById

function filterQuestions(quizType, filterId) {
  // Check if updateLastActivity exists before calling (defined in state.js)
  if (typeof updateLastActivity === "function") {
    updateLastActivity(filterId); // Track interaction
  } else {
    console.error(
      "updateLastActivity function not defined when called from filterQuestions"
    );
  }

  // Ensure quizQuestions is available (loaded from questions.js)
  if (typeof quizQuestions === "undefined" || quizQuestions === null) {
    console.error("quizQuestions array is not defined!");
    return []; // Return empty array if questions aren't loaded
  }

  switch (quizType) {
    case "sub-objective":
      const filtered = quizQuestions.filter((q) => q.objectiveId === filterId);
      // console.log(`Filtering for sub-objective "${filterId}". Found ${filtered.length} questions.`);
      return filtered;
    case "module":
      const mainModuleId = filterId.split(".")[0];
      const moduleFiltered = quizQuestions.filter(
        (q) => q.objectiveId && q.objectiveId.startsWith(mainModuleId + ".")
      );
      // console.log(`Filtering for module "${filterId}". Found ${moduleFiltered.length} questions.`);
      return moduleFiltered;
    case "comprehensive":
      const compFiltered = quizQuestions.filter((q) => {
        const objId = q.objectiveId || "";
        const modId = parseFloat(objId.split(".")[0]);
        return modId >= 1 && modId <= 5; // Core 1 modules
      });
      // console.log(`Filtering for comprehensive. Found ${compFiltered.length} questions.`);
      return compFiltered;
    default:
      console.warn(`Unknown quiz type: ${quizType}`);
      return [];
  }
}

function startQuiz(quizType, filterId) {
  console.log(
    `Attempting to start quiz - Type: ${quizType}, Filter ID: ${filterId}`
  );

  // Ensure quizQuestions is available before filtering
  if (typeof quizQuestions === "undefined" || quizQuestions === null) {
    alert(
      "Error: Question data not loaded. Please ensure questions.js is present."
    );
    console.error("Cannot start quiz: quizQuestions is not defined.");
    return;
  }

  currentQuiz.questions = filterQuestions(quizType, filterId);
  if (currentQuiz.questions.length === 0) {
    alert("No questions available for this section yet!");
    console.warn(
      `No questions found for quiz type ${quizType} and filter ${filterId}`
    );
    return;
  }

  currentQuiz.questions = currentQuiz.questions.sort(() => Math.random() - 0.5);
  currentQuiz.currentQuestionIndex = 0;
  currentQuiz.score = 0;
  currentQuiz.type = quizType;
  currentQuiz.filterId = filterId;
  currentQuiz.answers = [];
  currentQuiz.startTime = new Date();

  showView("quizzes"); // Ensure quiz view is active

  // Get necessary DOM elements within this function's scope
  const quizSetup = document.getElementById("quizSetup");
  const quizResults = document.getElementById("quizResults");
  const quizInProgress = document.getElementById("quizInProgress");
  const feedbackContainer = document.getElementById("feedbackContainer");
  const nextQuestionBtn = document.getElementById("nextQuestionBtn");
  const quizTitle = document.getElementById("quizTitle");

  // Hide setup/results, show progress
  if (quizSetup) quizSetup.classList.add("hidden");
  if (quizResults) quizResults.classList.add("hidden");
  if (quizInProgress) quizInProgress.classList.remove("hidden");
  if (feedbackContainer) feedbackContainer.classList.add("hidden");
  if (nextQuestionBtn) nextQuestionBtn.disabled = true;

  // Set Title
  let titleText = "Quiz";
  if (quizType === "comprehensive")
    titleText = "Comprehensive Core 1 Assessment";
  else if (quizType === "module") {
    const module = modulesData.find((m) => m.id === filterId);
    titleText = module
      ? `Module ${module.id} Test: ${module.name}`
      : `Module ${filterId} Test`;
  } else if (quizType === "sub-objective") {
    const [mainId] = filterId.split(".");
    const parentModule = modulesData.find((m) => m.id === `${mainId}.0`);
    if (parentModule) {
      const subObjective = parentModule.objectives.find(
        (o) => o.id === filterId
      );
      titleText = subObjective
        ? `Sub-Objective ${filterId} Drill`
        : `Quiz for ${filterId}`;
    } else {
      titleText = `Quiz for ${filterId}`;
    }
  }
  if (quizTitle) quizTitle.textContent = titleText;

  displayQuestion();
}

function displayQuestion() {
  // Get necessary DOM elements
  const questionText = document.getElementById("questionText");
  const optionsContainer = document.getElementById("optionsContainer");
  const questionProgress = document.getElementById("questionProgress");
  const feedbackContainer = document.getElementById("feedbackContainer");
  const nextQuestionBtn = document.getElementById("nextQuestionBtn");

  if (
    !questionText ||
    !optionsContainer ||
    !questionProgress ||
    !feedbackContainer ||
    !nextQuestionBtn
  ) {
    console.error(
      "Cannot display question: One or more required elements not found."
    );
    return;
  }

  if (currentQuiz.currentQuestionIndex >= currentQuiz.questions.length) {
    console.error("Tried to display question beyond quiz length.");
    showResults();
    return;
  }
  const question = currentQuiz.questions[currentQuiz.currentQuestionIndex];
  if (!question || !question.options) {
    console.error(
      `Error: Question or options at index ${currentQuiz.currentQuestionIndex} is invalid.`
    );
    showResults(); // Cannot proceed
    return;
  }
  questionText.textContent = question.question;
  optionsContainer.innerHTML = "";

  const optionsWithIndices = question.options.map((option, index) => ({
    text: option,
    originalIndex: index,
  }));
  optionsWithIndices.sort(() => Math.random() - 0.5);

  optionsWithIndices.forEach(({ text, originalIndex }) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.className =
      "block w-full text-left p-3 rounded-md quiz-option-button";
    button.dataset.index = originalIndex;
    button.onclick = () => selectAnswer(button, originalIndex);
    optionsContainer.appendChild(button);
  });

  questionProgress.textContent = `Question ${
    currentQuiz.currentQuestionIndex + 1
  } of ${currentQuiz.questions.length}`;
  feedbackContainer.classList.add("hidden");
  nextQuestionBtn.disabled = true;
  nextQuestionBtn.textContent =
    currentQuiz.currentQuestionIndex === currentQuiz.questions.length - 1
      ? "Finish Assessment"
      : "Next Question";
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function selectAnswer(button, selectedIndex) {
  // Get necessary DOM elements
  const optionsContainer = document.getElementById("optionsContainer");
  const feedbackContainer = document.getElementById("feedbackContainer");
  const feedbackText = document.getElementById("feedbackText");
  const explanationText = document.getElementById("explanationText");
  const nextQuestionBtn = document.getElementById("nextQuestionBtn");

  if (
    !optionsContainer ||
    !feedbackContainer ||
    !feedbackText ||
    !explanationText ||
    !nextQuestionBtn
  ) {
    console.error(
      "Cannot select answer: One or more required elements not found."
    );
    return;
  }

  const buttons = optionsContainer.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));

  const question = currentQuiz.questions[currentQuiz.currentQuestionIndex];
  if (!question) {
    console.error(
      `Error: Cannot process answer, question at index ${currentQuiz.currentQuestionIndex} is undefined.`
    );
    nextQuestionBtn.disabled = false;
    return;
  }
  const correctIndex = question.correctAnswer;
  const isCorrect = parseInt(selectedIndex) === correctIndex;

  currentQuiz.answers.push({
    questionIndex: currentQuiz.currentQuestionIndex,
    selectedOption: selectedIndex,
    isCorrect: isCorrect,
  });

  button.classList.add("selected-option");

  if (isCorrect) {
    currentQuiz.score++;
    feedbackText.textContent = "Correct!";
    feedbackContainer.className =
      "mt-5 p-4 rounded-lg text-base correct-answer";
    button.classList.add("correct-choice");
  } else {
    feedbackText.textContent = "Incorrect.";
    feedbackContainer.className =
      "mt-5 p-4 rounded-lg text-base incorrect-answer";
    button.classList.add("incorrect-choice");
    const correctButton = optionsContainer.querySelector(
      `button[data-index='${correctIndex}']`
    );
    if (correctButton) {
      correctButton.classList.add("correct-choice");
      correctButton.classList.remove("incorrect-choice", "selected-option");
    }
  }

  explanationText.textContent = `Explanation: ${question.explanation}`;
  feedbackContainer.classList.remove("hidden");
  nextQuestionBtn.disabled = false;
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function nextQuestion() {
  currentQuiz.currentQuestionIndex++;
  if (currentQuiz.currentQuestionIndex < currentQuiz.questions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  // Get necessary DOM elements
  const quizInProgress = document.getElementById("quizInProgress");
  const quizResults = document.getElementById("quizResults");
  const quizSetup = document.getElementById("quizSetup");
  const scoreText = document.getElementById("scoreText");
  const percentageText = document.getElementById("percentageText");
  const completionMessage = document.getElementById("completionMessage"); // Reference needed

  if (
    !quizInProgress ||
    !quizResults ||
    !quizSetup ||
    !scoreText ||
    !percentageText ||
    !completionMessage
  ) {
    console.error(
      "Cannot show results: One or more required elements not found."
    );
    return;
  }

  quizInProgress.classList.add("hidden");
  quizResults.classList.remove("hidden");
  quizSetup.classList.add("hidden");

  const numQuestions = currentQuiz.questions.length;
  const percentage =
    numQuestions > 0 ? Math.round((currentQuiz.score / numQuestions) * 100) : 0;
  scoreText.textContent = `Score: ${currentQuiz.score} / ${numQuestions}`;
  percentageText.textContent = `${percentage}%`;

  let messageText = "";
  let messageColorClass = "text-gray-400";

  if (currentQuiz.type === "module") {
    if (percentage >= 80) {
      // Ensure markModuleComplete exists (defined in state.js)
      if (typeof markModuleComplete === "function") {
        markModuleComplete(currentQuiz.filterId);
      } else {
        console.error("markModuleComplete function not found!");
      }
      messageText = `Congratulations! Module marked as complete (Score ${percentage}% >= 80%).`;
      messageColorClass = "text-green-400";
    } else {
      messageText = `Score ${percentage}% is below 80%. Module not marked as complete. Keep studying!`;
      messageColorClass = "text-yellow-400";
    }
  } else if (currentQuiz.type === "comprehensive") {
    console.log("Comprehensive quiz completed.");
    messageText = "Comprehensive assessment finished.";
  } else {
    messageText = "Sub-objective quiz finished.";
  }

  completionMessage.textContent = messageText;
  completionMessage.className = `text-sm mt-1 mb-6 ${messageColorClass}`;

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

console.log("quiz.js loaded.");
