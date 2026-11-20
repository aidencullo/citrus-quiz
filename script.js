const QUESTIONS = [
  {
    emoji: "🍊",
    label: "Which citrus am I?",
    text: "I'm small and oval. You can eat me peel and all — my peel is sweet and my flesh is tart.",
    options: ["Kumquat", "Key lime", "Clementine", "Bergamot"],
    answer: 0,
    fact: "Kumquats are the only citrus commonly eaten whole. The peel is sweet, while the juice inside is pleasingly sour.",
  },
  {
    emoji: "🍐",
    label: "Flavor detective",
    text: "This pear-shaped, intensely fragrant citrus gives Earl Grey tea its signature flavor.",
    options: ["Yuzu", "Bergamot", "Citron", "Pomelo"],
    answer: 1,
    fact: "Bergamot is grown almost exclusively in Calabria, Italy. Its aromatic peel oils are what flavor Earl Grey tea.",
  },
  {
    emoji: "🍊",
    label: "Which citrus am I?",
    text: "I'm the largest citrus fruit, with a thick spongy rind and mild, sweet flesh.",
    options: ["Grapefruit", "Citron", "Pomelo", "Navel orange"],
    answer: 2,
    fact: "Pomelos (also spelled pummelos) can weigh several pounds. Their thick rind peels away easily in large segments.",
  },
  {
    emoji: "🍋",
    label: "Which citrus am I?",
    text: "My juice looks like tiny pearls that burst in your mouth — a favorite in modern Australian cooking.",
    options: ["Finger lime", "Blood lime", "Key lime", "Calamansi"],
    answer: 0,
    fact: "Finger limes are native to Australia and contain caviar-like juice vesicles, which is why they're called 'citrus caviar'.",
  },
  {
    emoji: "🍋",
    label: "Which citrus am I?",
    text: "I'm knobbly and yellow, wildly aromatic, and a splash of my juice is essential to Japanese ponzu sauce.",
    options: ["Meyer lemon", "Yuzu", "Bitter orange", "Tangelo"],
    answer: 1,
    fact: "Yuzu is a Japanese citrus prized more for its perfume than its juice. It's a hybrid of mandarin and a papeda relative.",
  },
  {
    emoji: "🍊",
    label: "True or false?",
    text: "A grapefruit is a natural hybrid of a sweet orange and a pomelo.",
    options: ["True", "False"],
    answer: 0,
    fact: "True! Grapefruits arose naturally in the Caribbean from a sweet orange × pomelo cross, and were named for their grape-like clusters.",
  },
  {
    emoji: "🍊",
    label: "Which citrus am I?",
    text: "I'm a seedless mandarin–sweet orange hybrid, easy to peel, sweet, and a classic lunchbox fruit.",
    options: ["Clementine", "Seville orange", "Citron", "Ugli fruit"],
    answer: 0,
    fact: "Clementines are generally seedless because they can't self-pollinate. They're one of the smallest and sweetest mandarins.",
  },
  {
    emoji: "🍋",
    label: "Which citrus am I?",
    text: "I'm a sweeter, thinner-skinned cross between a lemon and a mandarin, beloved by chefs for baking.",
    options: ["Eureka lemon", "Meyer lemon", "Key lime", "Lisbon lemon"],
    answer: 1,
    fact: "Meyer lemons are less acidic and more floral than standard lemons. They're named after Frank Meyer, who brought them to the U.S. from China.",
  },
  {
    emoji: "🍋",
    label: "True or false?",
    text: "The colorful outer part of citrus peel that you zest is the pith — the white, bitter layer.",
    options: ["True", "False"],
    answer: 1,
    fact: "False! Zest is the colored outer layer, where the fragrant oils live. The white pith underneath is bitter and is usually avoided.",
  },
  {
    emoji: "🍋",
    label: "Which citrus am I?",
    text: "I'm a tiny Filipino citrus, a mandarin–kumquat hybrid, essential to dipping sauces and a popular pancake topping.",
    options: ["Calamansi", "Yuzu", "Kumquat", "Bergamot"],
    answer: 0,
    fact: "Calamansi (also called calamondin) is tart and aromatic. Its juice is used across the Philippines in everything from fish sauce to iced drinks.",
  },
  {
    emoji: "🖐️",
    label: "Which citrus am I?",
    text: "I have long, finger-like segments, almost no pulp or juice, and I'm a variety of citron.",
    options: ["Buddha's hand", "Finger lime", "Yuzu", "Pomelo"],
    answer: 0,
    fact: "Buddha's hand is grown for its extraordinary rind, which has no pith or pulp. It's used for zest, perfumes and religious offerings.",
  },
  {
    emoji: "🍊",
    label: "Which citrus am I?",
    text: "I'm a pink-fleshed navel orange whose color comes from lycopene — the same pigment in tomatoes.",
    options: ["Moro", "Cara Cara", "Tarocco", "Sanguinello"],
    answer: 1,
    fact: "Cara Caras are seedless and sweet, with a distinctive berry-like flavor. The other three are blood oranges, colored by anthocyanins.",
  },
  {
    emoji: "🍊",
    label: "Citrus science",
    text: "What gives blood oranges their crimson flesh?",
    options: ["Chlorophyll", "Lycopene", "Anthocyanin pigments", "Caramelized sugars"],
    answer: 2,
    fact: "Anthocyanins — the same class of pigments found in berries and red wine. Cool nights help blood oranges develop their deepest color.",
  },
  {
    emoji: "🍊",
    label: "Which citrus am I?",
    text: "I'm a lumpy-looking Jamaican hybrid of grapefruit, orange and mandarin. My name literally means 'ugly'.",
    options: ["Oroblanco", "Tangelo", "Ugli fruit", "Shamouti"],
    answer: 2,
    fact: "Ugli fruit is sweet and low in acidity. Its rough, thick peel is easy to remove despite its unpromising appearance.",
  },
  {
    emoji: "🍋",
    label: "Which citrus am I?",
    text: "I'm a gnarled, fragrant citron used as the etrog during the Jewish festival of Sukkot.",
    options: ["Etrog (citron)", "Pomelo", "Seville orange", "Kumquat"],
    answer: 0,
    fact: "The etrog is a citron with a distinctive pointed tip. Citrons are grown mostly for their peel rather than their meager pulp.",
  },
  {
    emoji: "🍊",
    label: "Which citrus am I?",
    text: "I was developed in Israel, have a thick easy-to-peel rind and almost no seeds, and I'm famous as the Jaffa orange.",
    options: ["Shamouti", "Navel", "Valencia", "Blood orange"],
    answer: 0,
    fact: "The Shamouti is Israel's best-known citrus export. Its thick peel made it sturdy enough to travel long distances by ship.",
  },
  {
    emoji: "🍊",
    label: "Citrus science",
    text: "Where does a navel orange get its name?",
    options: [
      "A small undeveloped fruit at the blossom end",
      "Its perfectly round shape",
      "A ring of seeds in the center",
      "The shape of its leaves",
    ],
    answer: 0,
    fact: "That little 'navel' is a second, tiny fruit that failed to develop. Navel oranges are seedless and can't reproduce on their own, so they're grafted.",
  },
  {
    emoji: "🍊",
    label: "Citrus science",
    text: "The sweet orange started as a natural hybrid of which two citrus fruits?",
    options: ["Lemon and lime", "Mandarin and pomelo", "Grapefruit and kumquat", "Citron and yuzu"],
    answer: 1,
    fact: "Sweet oranges are mandarin × pomelo hybrids. That makes grapefruit a relative too — it's orange × pomelo.",
  },
  {
    emoji: "🍋",
    label: "True or false?",
    text: "Key limes are typically smaller, rounder and more acidic than the Persian limes found in most supermarkets.",
    options: ["True", "False"],
    answer: 0,
    fact: "True. Key limes are tiny and tart, with a more complex aroma — that's why classic Key lime pie uses them. Persian limes are bigger and seedless.",
  },
  {
    emoji: "🍊",
    label: "Which citrus am I?",
    text: "I'm a sweet, seedless grapefruit–pomelo hybrid once marketed under the nickname 'Sweetie'.",
    options: ["Tangelo", "Oroblanco", "Ugli fruit", "Meyer lemon"],
    answer: 1,
    fact: "Oroblancos were bred at UC Riverside to be less bitter than grapefruit. 'Oro blanco' means 'white gold' in Spanish.",
  },
];

const els = {
  startScreen: document.getElementById("start-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),
  questionCount: document.getElementById("question-count"),
  scoreInline: document.getElementById("score-inline"),
  progressBar: document.getElementById("progress-bar"),
  fruitEmoji: document.getElementById("fruit-emoji"),
  questionLabel: document.getElementById("question-label"),
  questionText: document.getElementById("question-text"),
  answers: document.getElementById("answers"),
  feedback: document.getElementById("feedback"),
  nextButton: document.getElementById("next-button"),
  resultEmoji: document.getElementById("result-emoji"),
  finalScore: document.getElementById("final-score"),
  finalTotal: document.getElementById("final-total"),
  resultTitle: document.getElementById("result-title"),
  resultMessage: document.getElementById("result-message"),
  resultStats: document.getElementById("result-stats"),
  playAgain: document.getElementById("play-again"),
  shareButton: document.getElementById("share-button"),
  shareStatus: document.getElementById("share-status"),
};

let deck = [];
let current = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let locked = false;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function show(screen) {
  for (const el of [els.startScreen, els.quizScreen, els.resultScreen]) {
    el.classList.toggle("hidden", el !== screen);
  }
}

function startGame(count) {
  deck = shuffle(QUESTIONS).slice(0, Math.min(count, QUESTIONS.length));
  current = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  els.shareStatus.textContent = "";
  show(els.quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const q = deck[current];
  locked = false;

  els.questionCount.textContent = `Question ${current + 1} of ${deck.length}`;
  els.progressBar.style.width = `${(current / deck.length) * 100}%`;
  els.fruitEmoji.textContent = q.emoji;
  els.questionLabel.textContent = q.label;
  els.questionText.textContent = q.text;
  els.answers.replaceChildren();
  els.feedback.className = "feedback";
  els.feedback.replaceChildren();
  els.nextButton.classList.add("hidden");
  updateScore();

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";

    const key = document.createElement("span");
    key.className = "key";
    key.setAttribute("aria-hidden", "true");
    key.textContent = String(index + 1);

    const label = document.createElement("span");
    label.textContent = option;

    button.append(key, label);
    button.addEventListener("click", () => answer(index));
    els.answers.append(button);
  });
}

function updateScore() {
  els.scoreInline.textContent = `${score} correct`;
}

function answer(index) {
  if (locked) return;
  locked = true;

  const q = deck[current];
  const isCorrect = index === q.answer;

  if (isCorrect) {
    score++;
    streak++;
    bestStreak = Math.max(bestStreak, streak);
  } else {
    streak = 0;
  }

  [...els.answers.children].forEach((button, i) => {
    button.disabled = true;
    if (i === q.answer) button.classList.add("correct");
    if (i === index && !isCorrect) button.classList.add("wrong");
  });

  els.progressBar.style.width = `${((current + 1) / deck.length) * 100}%`;
  updateScore();

  const headline = document.createElement("strong");
  headline.textContent = isCorrect
    ? "🍊 Nailed it!"
    : `Not quite — it's ${q.options[q.answer]}.`;

  const fact = document.createElement("span");
  fact.textContent = q.fact;

  els.feedback.replaceChildren(headline, fact);
  els.feedback.className = `feedback show ${isCorrect ? "is-correct" : "is-wrong"}`;
  els.nextButton.classList.remove("hidden");
  els.nextButton.focus({ preventScroll: true });
}

function nextQuestion() {
  if (!locked) return;
  if (current + 1 < deck.length) {
    current++;
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const percent = score / deck.length;
  let emoji, title, message;

  if (percent >= 0.9) {
    emoji = "👑";
    title = "Citrus royalty!";
    message = "You know your pomelos from your papedas. The orchard bows to you.";
  } else if (percent >= 0.7) {
    emoji = "🍊";
    title = "Zesty work!";
    message = "A fine harvest. A little more practice and you'll be a true citrus connoisseur.";
  } else if (percent >= 0.5) {
    emoji = "🍋";
    title = "Pretty peely good!";
    message = "Sweet, with a little tartness. Give it another go and watch your score rise.";
  } else if (percent >= 0.3) {
    emoji = "🍋‍🟩";
    title = "A little green";
    message = "Some answers were seedless, others need a squeeze of practice. Try again?";
  } else {
    emoji = "🫒";
    title = "Time to hit the grove";
    message = "Not your juiciest round. The good news: you learned 15 fruity facts along the way.";
  }

  els.resultEmoji.textContent = emoji;
  els.finalScore.textContent = String(score);
  els.finalTotal.textContent = `/ ${deck.length}`;
  els.resultTitle.textContent = title;
  els.resultMessage.textContent = message;

  els.resultStats.replaceChildren();
  const stats = [
    [score, "Correct"],
    [`${Math.round(percent * 100)}%`, "Accuracy"],
    [bestStreak, "Best streak"],
  ];
  stats.forEach(([value, label]) => {
    const stat = document.createElement("div");
    stat.className = "stat";
    const b = document.createElement("b");
    b.textContent = String(value);
    const span = document.createElement("span");
    span.textContent = label;
    stat.append(b, span);
    els.resultStats.append(stat);
  });

  show(els.resultScreen);
}

async function shareScore() {
  const text = `I scored ${score}/${deck.length} on the Citrus Quiz 🍊 — think you can beat me?`;
  try {
    await navigator.clipboard.writeText(text);
    els.shareStatus.textContent = "Copied to clipboard! Go challenge a friend.";
  } catch {
    const input = document.createElement("textarea");
    input.value = text;
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.append(input);
    input.select();
    const copied = document.execCommand("copy");
    input.remove();
    els.shareStatus.textContent = copied
      ? "Copied to clipboard! Go challenge a friend."
      : text;
  }
}

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => startGame(Number(button.dataset.count)));
});

els.nextButton.addEventListener("click", nextQuestion);
els.playAgain.addEventListener("click", () => show(els.startScreen));
els.shareButton.addEventListener("click", shareScore);

document.addEventListener("keydown", (event) => {
  if (!els.quizScreen.classList.contains("hidden")) {
    if (!locked && /^[1-4]$/.test(event.key)) {
      const button = els.answers.children[Number(event.key) - 1];
      if (button) button.click();
    } else if (locked && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      nextQuestion();
    }
  } else if (!els.resultScreen.classList.contains("hidden") && event.key === "Enter") {
    show(els.startScreen);
  }
});
