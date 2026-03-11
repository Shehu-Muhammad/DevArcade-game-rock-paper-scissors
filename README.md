# DevArcade-game-rock-paper-scissors

A simple **Rock Paper Scissors** game built with **TypeScript**, **JavaScript**, and **CSS**. The player starts the game, watches a countdown of **Rock, Paper, Scissors, Shoot**, selects a choice, and submits it. The computer’s choice then appears on the right side of the screen, and the winner is displayed below.

## Features

- Click **Start** to begin the game
- Screen shows a **Rock, Paper, Scissors, Shoot** countdown
- User selects their choice
- Click **Submit** to play the round
- Computer choice appears on the right side of the screen
- Winner result is displayed below
- Built with TypeScript, JavaScript, and CSS

## Tech Stack

- **TypeScript**
- **JavaScript**
- **CSS3**

## How It Works

1. The player clicks the **Start** button
2. The game displays a countdown of **Rock, Paper, Scissors, Shoot**
3. The player selects **Rock**, **Paper**, or **Scissors**
4. The player clicks **Submit**
5. The computer generates a random choice
6. The computer’s choice is shown on the right side of the screen
7. The result is displayed below the choices

## Project Structure

```bash
rock-paper-scissors/
│── index.html
│── style.css
│── script.js
│── script.ts
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shehu-Muhammad/DevArcade-game-rock-paper-scissors.git
```

### 2. Open the project folder

```bash
cd rock-paper-scissors
```

### 3. Run the app

Open `index.html` in your browser.

## Game Logic

The game uses a set of three possible choices:

```ts
const choices = ['ROCK', 'PAPER', 'SCISSORS'];
```

When the player submits a choice, the game:

- Randomly generates a computer choice
- Compares the player’s choice against the computer’s choice
- Displays whether the round is a draw, a player win, or a computer win

## Future Improvements

- Add score tracking for player and computer
- Add multiple rounds
- Add animations during the countdown
- Add icons or hand images for each choice
- Improve mobile responsiveness
- Add sound effects for the countdown and result

## Lessons Learned

This project helped strengthen skills in:

- TypeScript fundamentals
- DOM manipulation
- Event handling
- Conditional game logic
- Random value generation
- Updating the UI dynamically
- Styling interactive layouts with CSS

## Live Demo

[Live Demo](https://dev-arcade-game-rock-paper-scissors.vercel.app/)

## Screenshots

Add screenshots here if you want to showcase the game UI.

## Author

**Shehu Muhammad**

- GitHub: [Shehu-Muhammad](https://github.com/Shehu-Muhammad)

## License

This project is open source and available under the [MIT License](LICENSE).
