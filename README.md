# tint-tape
**Text Formatting Utility for the Console**  This JavaScript module provides functions for writing formatted text to the console, including color, background, and style customization, as well as a typewriter animation effect. Useful for creating interactive command-line apps, styled logging, and adding visual flair to console-based projects.

# Text Formatting Utility for the Console

This JavaScript module provides functions for writing formatted text to the console, including color, background, and style customization, as well as a typewriter animation effect. Useful for creating interactive command-line apps, styled logging, and adding visual flair to console-based projects.

## Features

1. **Write text with color, background color, and text style**: The `Text.write()` function lets you customize the appearance of text written to the console, including setting the foreground color, background color, and text style (bold, italic, underline).

2. **Implement a typewriter effect**: The `Text.typewriter()` function writes text to the console with a typewriter-like animation, allowing you to control the delay between each character.

## Usage

```javascript
const Text = require('./text.js');

// Write text with custom formatting
Text.write('Hello, world!', { color: 'green', backgroundColor: 'black', style: 'bold' });

// Create a typewriter effect
Text.typewriter('This text will be typed out character by character.', 50);
```

## Installation

1. Clone the repository:
```
git clone https://github.com/your-username/text-formatting-utility.git
```

2. Install the required dependencies:
```
cd text-formatting-utility
npm install
```

## Dependencies

This module integrates with the following external modules:
- `color.js`: Handles color operations
- `animation.js`: Provides the typewriter animation logic

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
