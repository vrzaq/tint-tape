const Color = {
  // ANSI color codes
  ansi: {
    reset: '\u001b[0m',
    bold: '\u001b[1m',
    faint: '\u001b[2m',
    italic: '\u001b[3m',
    underline: '\u001b[4m',
    blink: '\u001b[5m',
    reverse: '\u001b[7m',
    hidden: '\u001b[8m',
    strikethrough: '\u001b[9m',
    foreground: {
      black: '\u001b[30m',
      red: '\u001b[31m',
      green: '\u001b[32m',
      yellow: '\u001b[33m',
      blue: '\u001b[34m',
      magenta: '\u001b[35m',
      cyan: '\u001b[36m',
      white: '\u001b[37m',
      brightBlack: '\u001b[90m',
      brightRed: '\u001b[91m',
      brightGreen: '\u001b[92m',
      brightYellow: '\u001b[93m',
      brightBlue: '\u001b[94m',
      brightMagenta: '\u001b[95m',
      brightCyan: '\u001b[96m',
      brightWhite: '\u001b[97m'
    },
    background: {
      black: '\u001b[40m',
      red: '\u001b[41m',
      green: '\u001b[42m',
      yellow: '\u001b[43m',
      blue: '\u001b[44m',
      magenta: '\u001b[45m',
      cyan: '\u001b[46m',
      white: '\u001b[47m',
      brightBlack: '\u001b[100m',
      brightRed: '\u001b[101m',
      brightGreen: '\u001b[102m',
      brightYellow: '\u001b[103m',
      brightBlue: '\u001b[104m',
      brightMagenta: '\u001b[105m',
      brightCyan: '\u001b[106m',
      brightWhite: '\u001b[107m'
    }
  },

  // Validate and convert HEX color to ANSI
  hex(hexColor) {
    // Validate HEX color format
    if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexColor)) {
      throw new Error('Invalid HEX color format. Example: #RRGGBB or #RGB');
    }

    hexColor = hexColor.substring(1); // Remove the '#' at the beginning

    // Convert HEX to RGB
    let rgb;
    if (hexColor.length === 3) {
      rgb = [
        parseInt(hexColor.substring(0, 1).repeat(2), 16),
        parseInt(hexColor.substring(1, 2).repeat(2), 16),
        parseInt(hexColor.substring(2, 3).repeat(2), 16)
      ];
    } else {
      rgb = [
        parseInt(hexColor.substring(0, 2), 16),
        parseInt(hexColor.substring(2, 4), 16),
        parseInt(hexColor.substring(4, 6), 16)
      ];
    }

    // Validate RGB values
    if (rgb.some(value => isNaN(value) || value < 0 || value > 255)) {
      throw new Error('Invalid RGB color values.');
    }

    return `\u001b[38;2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
  },

  // Convert RGB color to ANSI
  rgb(r, g, b) {
    // Validate RGB values
    if (isNaN(r) || isNaN(g) || isNaN(b) || r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
      throw new Error('Invalid RGB color values.');
    }

    return `\u001b[38;2;${r};${g};${b}m`;
  },

  // Convert RGB color to HEX
  toHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  },

  // Combine ANSI color codes
  combine(...codes) {
    return codes.join('');
  }
};

export default Color;