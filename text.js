import Color from './color.js';
import Animation from './animation.js';

const Text = {
  /**
   * Writes text to the console with color and formatting.
   * @param {string} text - The text to be written.
   * @param {object} [options] - An optional object with styling options.
   * @param {string} [options.color] - The color of the text.
   * @param {string} [options.backgroundColor] - The background color of the text.
   * @param {string} [options.style] - The style of the text (e.g., 'bold', 'italic', 'underline').
   * @param {boolean} [options.newLine] - Whether to add a new line after the text.
   */
  write(text, options = {}) {
    const { color, backgroundColor, style, newLine = false } = options;
    let formattedText = text;

    if (color) {
      formattedText = `${Color.ansi[color]}${formattedText}${Color.ansi.reset}`;
    }

    if (backgroundColor) {
      formattedText = `${Color.ansi[backgroundColor]}${formattedText}${Color.ansi.reset}`;
    }

    if (style) {
      const styles = style.split(',').map(s => Color.ansi[s.trim()]);
      formattedText = `${styles.join('')}${formattedText}${Color.ansi.reset}`;
    }

    console.log(formattedText);

    if (newLine) {
      console.log();
    }
  },

  /**
   * Writes text to the console with a typewriter effect.
   * @param {string} text - The text to be written.
   * @param {object} [options] - An optional object with options for the typewriter effect.
   * @param {number} [options.delay] - The delay between each character in milliseconds.
   * @param {boolean} [options.newLine] - Whether to add a new line after the text.
   */
  typewriter(text, options = {}) {
    const { delay = 50, newLine = false } = options;
    let currentIndex = 0;

    const typewriterAnimation = Animation.frame(text.split('').map((char, i) => {
      return `${text.slice(0, i + 1)}${Color.ansi.foreground.white}${char}${Color.ansi.reset}`;
    }), { delay, loop: true, clear: false });

    return typewriterAnimation.start().then(() => {
      if (newLine) {
        console.log();
      }
    });
  }
};

export default Text;