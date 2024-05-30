import Color from './color.js';

const Animation = {
  // ANSI escape codes for cursor movement
  cursorUp: (n = 1) => `\u001b[${n}A`,
  cursorDown: (n = 1) => `\u001b[${n}B`,
  cursorForward: (n = 1) => `\u001b[${n}C`,
  cursorBack: (n = 1) => `\u001b[${n}D`,
  cursorNextLine: (n = 1) => `\u001b[${n}E`,
  cursorPrevLine: (n = 1) => `\u001b[${n}F`,
  cursorPosition: (row, col) => `\u001b[${row};${col}H`,
  cursorHide: `\u001b[?25l`,
  cursorShow: `\u001b[?25h`,
  clearScreen: `\u001b[2J`,
  clearLine: `\u001b[2K`,

  // ANSI escape codes for scrolling
  scrollUp: (n = 1) => `\u001b[${n}S`,
  scrollDown: (n = 1) => `\u001b[${n}T`,

  // ANSI escape codes for text formatting
  reset: Color.ansi.reset,

  // Functions for creating animations
  frame(frames, options = {}) {
    const { delay = 100, loop = false, clear = true } = options;
    let currentFrame = 0;

    return {
      nextFrame() {
        console.clear();
        console.log(frames[currentFrame]);
        currentFrame = (currentFrame + 1) % frames.length;
        return new Promise(resolve => setTimeout(resolve, delay));
      },
      start() {
        return new Promise(resolve => {
          const interval = setInterval(() => {
            this.nextFrame().then(() => {
              if (!loop && currentFrame === 0) {
                clearInterval(interval);
                if (clear) console.clear();
                resolve();
              }
            });
          }, delay);
        });
      }
    };
  }
};

export default Animation;