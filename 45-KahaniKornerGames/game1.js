// vocabulary list with roman, urdu, image
const vocabList = [
  {
    roman: "DADA JEE",
    urdu: "دادا جی",
    image: "images/flashcards/dada-jee.png",
  },
  { roman: "KHET", urdu: "کھیت", image: "images/flashcards/english/khet.png" },
  {
    roman: "BATAKH",
    urdu: "بطخ",
    image: "images/flashcards/english/batakh.png",
  },
  {
    roman: "GAAYN",
    urdu: "گائے",
    image: "images/flashcards/english/gaayn.png",
  },
  { roman: "SEWR", urdu: "سور", image: "images/flashcards/english/sewr.png" },
  {
    roman: "MURGHI",
    urdu: "مرغی",
    image: "images/flashcards/english/murghi.png",
  },
  {
    roman: "MURGHA",
    urdu: "مرغا",
    image: "images/flashcards/english/murgha.png",
  },
  {
    roman: "CHOOZAY",
    urdu: "چوزے",
    image: "images/flashcards/english/choozay.png",
  },
  {
    roman: "BHAIR",
    urdu: "بھیڑ",
    image: "images/flashcards/english/bhair.png",
  },
  {
    roman: "BAKRI",
    urdu: "بکری",
    image: "images/flashcards/english/bakri.png",
  },
  {
    roman: "GHORA",
    urdu: "گھوڑا",
    image: "images/flashcards/english/ghora.png",
  },
  {
    roman: "TURKEY",
    urdu: "ٹرکی",
    image: "images/flashcards/english/turkey.png",
  },
  {
    roman: "KHARGOSH",
    urdu: "خرگوش",
    image: "images/flashcards/english/khargosh.png",
  },
  {
    roman: "GADHA",
    urdu: "گدھا",
    image: "images/flashcards/english/gadha.png",
  },
  { roman: "HANS", urdu: "ہنس", image: "images/flashcards/english/hans.png" },
  { roman: "OONT", urdu: "اونٹ", image: "images/flashcards/english/oont.png" },
  { roman: "BILLI", urdu: "بلی", image: "images/flashcards/english/billi.png" },
  { roman: "KUTTA", urdu: "کتا", image: "images/flashcards/english/kutta.png" },
];

// confetti function/code
function launchConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.classList.add("confetti-container");

  for (let i = 0; i < 30; i++) {
    // Create 30 pieces of confetti
    const confettiPiece = document.createElement("div");
    confettiPiece.classList.add("confetti");
    confettiPiece.style.left = `${Math.random() * 100}%`;
    confettiPiece.style.animationDelay = `${Math.random() * 2}s`;

    // Randomize confetti color
    confettiPiece.style.backgroundColor = `hsl(${
      Math.random() * 360
    }, 100%, 70%)`;

    confettiContainer.appendChild(confettiPiece);
  }

  document.body.appendChild(confettiContainer);

  // Remove confetti after 3 seconds
  setTimeout(() => {
    confettiContainer.remove();
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const correctSound = new Audio("sounds/success.wav"); // Load sound
  const incorrectSound = new Audio("sounds/incorrect.wav"); // Load sound
  const targetImage = document.getElementById("target-image");
  const wordOptions = document.getElementById("word-options");
  const dropZone = document.getElementById("drop-zone");

  const timerDisplay = document.getElementById("timer");
  const scoreDisplay = document.getElementById("score");
  const timerToggle = document.getElementById("timer-toggle");
  const gameStatus = document.getElementById("game-status");
  let timer = 60;
  let score = 0;
  let gameInterval;

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  //   when user selects answer - different responses on website for correct/incorrect
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    const draggedWordData = JSON.parse(e.dataTransfer.getData("text/plain"));
    const correctWord = targetImage.getAttribute("data-correct");

    if (draggedWordData.urdu === correctWord) {
      dropZone.innerHTML = `<div class="roman">${draggedWordData.roman}</div><div class="urdu">${draggedWordData.urdu}</div>`;
      dropZone.classList.add("correct");

      // ✅ Play success sound
      correctSound.play();
      launchConfetti(); // ✅ Launch confetti

      if (timerToggle.checked) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
      }
      setTimeout(loadNewWord, 1500);
    } else {
      dropZone.classList.add("incorrect");
      // ✅ Play incorrect sound
      incorrectSound.play();

      setTimeout(() => {
        dropZone.classList.remove("incorrect");
      }, 300);
    }
  });

  function startGame() {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    timer = 60;
    timerDisplay.textContent = `Time: ${timer}s`;
    timerDisplay.classList.remove("flash-red"); // Remove red flash at the start

    gameInterval = setInterval(() => {
      if (timer > 0) {
        timer--;
        timerDisplay.textContent = `Time: ${timer}s`;

        // 🔥 Flash red when 5 seconds or less  and pop up box at the end
        if (timer <= 5) {
          timerDisplay.classList.add("flash-red");
        } else {
          timerDisplay.classList.remove("flash-red");
        }
      } else {
        clearInterval(gameInterval);
        alert(
          `Time's up! Your final score is: ${score}\n\nClick OK to restart.`
        );
        location.reload();
      }
    }, 1000);
  }

  function loadNewWord() {
    dropZone.innerHTML = "Drop the correct word here";
    dropZone.classList.remove("correct", "incorrect");

    const word = vocabList[Math.floor(Math.random() * vocabList.length)];
    targetImage.src = word.image;
    targetImage.setAttribute("data-correct", word.urdu);
    targetImage.setAttribute("data-roman", word.roman);
    wordOptions.innerHTML = "";

    let shuffledWords = vocabList
      .filter((w) => w.urdu !== word.urdu)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    shuffledWords.push(word); // Ensure the correct word is included
    shuffledWords.sort(() => 0.5 - Math.random()); // Shuffle again

    shuffledWords.forEach((w) => {
      const wordDiv = document.createElement("div");
      wordDiv.classList.add("word");
      wordDiv.setAttribute("draggable", "true");
      wordDiv.setAttribute("data-urdu", w.urdu);
      wordDiv.setAttribute("data-roman", w.roman);
      wordDiv.innerHTML = `<div class="roman">${w.roman}</div><div class="urdu">${w.urdu}</div>`;

      wordDiv.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData(
          "text/plain",
          JSON.stringify({ roman: w.roman, urdu: w.urdu })
        );
      });

      wordOptions.appendChild(wordDiv);
    });
  }
  loadNewWord();

  //   hide/show timer
  timerToggle.addEventListener("change", () => {
    clearInterval(gameInterval);
    if (timerToggle.checked) {
      gameStatus.classList.remove("hidden"); // Show game-status
      startGame();
    } else {
      gameStatus.classList.add("hidden"); // Hide game-status
    }
  });
});
