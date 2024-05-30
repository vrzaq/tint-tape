import Color from './color.js';

const AsciiArt = {
  box(text, options = {}) {
    const { borderColor = Color.ansi.foreground.white, backgroundColor = Color.ansi.background.black, padding = 1 } = options;
    const lines = text.split('\n');
    const maxLength = Math.max(...lines.map(line => line.length));
    const formattedText = lines.map(line => line.padEnd(maxLength, ' ')).join('\n');

    const top = `${borderColor}┌${'-'.repeat(maxLength + padding * 2)}┐${Color.ansi.reset}`;
    const middle = `${borderColor}│${' '.repeat(padding)}${formattedText}${' '.repeat(padding)}│${Color.ansi.reset}`;
    const bottom = `${borderColor}└${'-'.repeat(maxLength + padding * 2)}┘${Color.ansi.reset}`;

    return `${backgroundColor}${top}\n${middle}\n${bottom}${Color.ansi.reset}`;
  },

  center(text, width, options = {}) {
    const { borderColor = Color.ansi.foreground.white, backgroundColor = Color.ansi.background.black } = options;
    const lines = text.split('\n');
    const formattedLines = lines.map(line => line.padStart(Math.floor((width + line.length) / 2), ' ').padEnd(width, ' '));
    const formattedText = formattedLines.join('\n');

    return `${backgroundColor}${borderColor}${formattedText}${Color.ansi.reset}`;
  },

  pyramid(text, options = {}) {
    const { borderColor = Color.ansi.foreground.white, backgroundColor = Color.ansi.background.black } = options;
    const lines = text.split('\n');
    const maxLength = Math.max(...lines.map(line => line.length));
    const formattedLines = lines.map(line => line.padStart(Math.floor((maxLength + line.length) / 2), ' '));
    const formattedText = formattedLines.join('\n');

    const top = `${borderColor}   /\\   ${Color.ansi.reset}`;
    const middle = `${backgroundColor}${borderColor} /  \\ ${Color.ansi.reset}`;
    const bottom = `${backgroundColor}${borderColor}/__${formattedText}__\\${Color.ansi.reset}`;

    return `${top}\n${middle}\n${bottom}`;
  }
};

export default AsciiArt;