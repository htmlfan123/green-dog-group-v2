# Green Dog Group V2

A modern, fast, and privacy-focused search engine interface with interactive particle animations.

## Features

✨ **Modern Design** - Clean, responsive UI with smooth animations
🚀 **Fast Performance** - Optimized for speed and efficiency
🔒 **Privacy First** - No tracking or data collection
🎨 **Interactive** - Beautiful particle background with hover effects
📱 **Responsive** - Works seamlessly on desktop, tablet, and mobile
⚡ **Modern Stack** - ES6+, semantic HTML5, and CSS3

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with responsive design
- **JavaScript (ES6+)** - Modern vanilla JS, no dependencies
- **Particles.js** - Beautiful particle animations
- **Scramjet** - Privacy-focused search functionality

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/htmlfan123/green-dog-group-v2.git
cd green-dog-group-v2

# No dependencies to install - works with vanilla JS!
```

### Running Locally

Simply open `static/index.html` in your browser, or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using Ruby
ruby -run -ehttpd . -p8000
```

Then navigate to `http://localhost:8000`

## Project Structure

```
├── index.html              # Root redirect page
├── README.md              # This file
├── static/
│   ├── index.html         # Main application page
│   ├── styles.css         # Modern responsive styles
│   ├── app.js             # Main application logic
│   └── particles/
│       ├── particles.js   # Particle animation library
│       └── config.json    # Particle configuration
└── scram/                 # Scramjet search functionality
```

## Features in Detail

### Particle Background
- Smooth, interactive particle animations
- Responds to mouse hover and click events
- Configurable through `config.json`
- Optimized rendering with requestAnimationFrame

### Search Interface
- Clean, minimalist search bar
- Real-time search results
- Keyboard shortcuts support
- Error handling and display

### Performance
- No external dependencies (except particles.js)
- Lazy loading of resources
- Optimized CSS with minimal repaints
- Service Worker support for offline functionality

## Configuration

Edit `static/particles/config.json` to customize particle behavior:

```json
{
  "particles": {
    "number": {
      "value": 80           // Number of particles
    },
    "color": {
      "value": "#ffffff"    // Particle color
    },
    "move": {
      "speed": 6            // Movement speed
    }
  }
}
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Reduce particle count** for lower-end devices
2. **Disable animations** on mobile if needed
3. **Use Service Workers** for offline support
4. **Lazy load** external resources

## License

MIT License - feel free to use this project however you'd like!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Deployment

The project is deployed on [Vercel](https://green-dog-group-v2-three.vercel.app)

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Support

For issues or questions, please open a GitHub issue or contact the maintainer.

---

**Made with ❤️ by the Green Dog Group team**