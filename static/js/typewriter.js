/**
 * Typewriter Effect Component
 * Modern ES6+ implementation
 */

'use strict';

const TypeWriter = (() => {
  /**
   * Initialize typewriter elements
   */
  const init = () => {
    const elements = document.querySelectorAll('[data-type]');
    elements.forEach(element => {
      const textArray = JSON.parse(element.getAttribute('data-type'));
      const period = parseInt(element.getAttribute('data-period') || '2000');
      new TypeWriterElement(element, textArray, period);
    });
  };

  /**
   * TypeWriter Element Class
   */
  class TypeWriterElement {
    constructor(element, textArray, period) {
      this.element = element;
      this.textArray = textArray;
      this.period = period;
      this.loopNum = 0;
      this.isDeleting = false;
      this.txt = '';
      this.tick();
    }

    tick() {
      const i = this.loopNum % this.textArray.length;
      const fullTxt = this.textArray[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.element.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => this.tick(), delta);
    }
  }

  return {
    init
  };
})();

// Initialize typewriter when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', TypeWriter.init);
} else {
  TypeWriter.init();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TypeWriter;
}