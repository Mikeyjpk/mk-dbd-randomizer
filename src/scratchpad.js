// fisher-Yates algorithm used to shuffle a deck of cards and arrange them in reversed numeric order 

const shuffleCards = () => {
    let deck = []
    for (x = 0; x < 52; x++) {
        deck.push(x)
    }; 

    const shuffledDeck = deck => {
	for(let x = deck.length - 1; x > 0; x--) {
		const y = Math.floor(Math.random() * (x + 1));
		const currentIndex = deck[x];
		deck[x] = deck[y];
		deck[y] = currentIndex;
	}
	return deck;
    }

    console.log(`The deck of cards is: ${deck.join(" ")} 

    The shuffled deck of cards is: 
    ${shuffledDeck(deck).join(" ")}

    The rearranged deck of cards backwards is: 
    ${deck.sort((a,b) => b - a).join(" ")}
    `)
};

// a simple algorithm to create a game of rock, paper, scissors
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else {
      return "invalid input";
    }
  };
  
const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
    }
  };
  
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "Tie";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer Wins!";
      } else {
        return "You Win!";
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer Wins!";
      } else {
        return "You Win!";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer Wins";
      } else {
        return "You Win!";
      }
    }
  };
  
const playRockPaperScissors = () => {
    userChoice = getUserChoice('paper');
    computerChoice = getComputerChoice();
    console.log(`You have chosen ${userChoice}.`);
    console.log(`The Computer has chosen ${computerChoice}.`);
    console.log(determineWinner(userChoice, computerChoice));
  };



  // a simple algorithm to create a game of Magic Eight Ball
  const playMagicEightBall = (userName, userQuestion) => {
    userName ? console.log(`Hello, ${userName}.`) : console.log("Hello!");
    userQuestion
      ? console.log(`You asked:"${userQuestion}"`)
      : console.log("Please enter your name & question.");
  
    let randomNumber = Math.floor(Math.random() * 8) + 1;
    let eightBall = '';
  
    switch (randomNumber) {
      case 1:
        eightBall = "It is certain";
        break;
      case 2:
        eightBall = "It is decidedly so";
        break;
      case 3:
        eightBall = "Reply hazy try again";
        break;
      case 4:
        eightBall = "Cannot predict now";
        break;
      case 5:
        eightBall = "Do not count on it";
        break;
      case 6:
        eightBall = "My sources say no";
        break;
      case 7:
        eightBall = "Outlook not so good";
        break;
      case 8:
        eightBall = "Signs point to yes";
    }
    userQuestion
      ?  console.log(`The Eight Ball has spoken! "${eightBall}"`)
      :  console.log("The EightBall awaits your question");
  };



  // an algorithm to work out the Digital Root/Sum of digits CodeWars
function digitalRoot(n) {
  if ( n < 10 ) {
    return n 
    } 
    return digitalRoot(
      ( n + '').split('').reduce((acc, val) => acc + +val, 0));
  
};



// a function to detect input in an array, Ex & Ohs Codewards
const XO = (str) => {
  let statement;
  const counts = str
    .toLowerCase()
    .split("")
    .reduce(
      (results, currentLetter) => {
        if (currentLetter === "x") {
          results.xCount++;
        } else if (currentLetter === "o") {
          results.oCount++;
        }
        return results;
      },
      { xCount: 0, oCount: 0 }
    );

  if (counts.xCount === counts.oCount) {
    return (statement = true);
  } else {
    return (statement = false);
  }
};