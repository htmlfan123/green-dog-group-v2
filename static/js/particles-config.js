/**
 * Particles.js Configuration
 * Modern ES6+ implementation
 */

'use strict';

const ParticlesConfig = (() => {
  /**
   * Initialize particles background
   */
  const init = () => {
    if (typeof particlesJS === 'undefined') {
      console.warn('Particles.js library not loaded');
      return;
    }

    // Load configuration based on screen size
    const config = getConfigForScreen();

    particlesJS('particles-js', config);
    console.log('✨ Particles initialized');
  };

  /**
   * Get configuration based on screen size
   */
  const getConfigForScreen = () => {
    const width = window.innerWidth;
    const isMobile = width < 768;

    return {
      particles: {
        number: {
          value: isMobile ? 50 : 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: isMobile ? 3 : 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: isMobile ? 3 : 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: !isMobile,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: isMobile ? 2 : 4
          },
          remove: {
            particles_nb: isMobile ? 1 : 2
          }
        }
      },
      retina_detect: true
    };
  };

  /**
   * Handle window resize
   */
  const handleResize = () => {
    if (window.pJSDom && window.pJSDom[0]) {
      window.pJSDom[0].pJS.canvas.resizeCanvas();
    }
  };

  // Listen for window resize
  window.addEventListener('resize', handleResize);

  return {
    init
  };
})();

// Initialize particles when DOM and libraries are ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Wait for Particles.js library to load
    if (typeof particlesJS !== 'undefined') {
      ParticlesConfig.init();
    } else {
      // Retry after a short delay
      setTimeout(ParticlesConfig.init, 500);
    }
  });
} else {
  ParticlesConfig.init();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ParticlesConfig;
}