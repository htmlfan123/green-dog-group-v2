/**
 * Green Dog Group V2 - Main Application
 * Modern ES6+ implementation
 */

'use strict';

const App = (() => {
  // DOM Elements
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const errorDisplay = document.getElementById('error-display');
  const errorMessage = document.getElementById('error-message');
  const errorCode = document.getElementById('error-code');

  /**
   * Initialize application
   */
  const init = () => {
    setupEventListeners();
    console.log('✨ Green Dog Group V2 initialized');
  };

  /**
   * Setup event listeners
   */
  const setupEventListeners = () => {
    if (searchForm) {
      searchForm.addEventListener('submit', handleSearch);
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);
  };

  /**
   * Handle search submission
   */
  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();

    if (!query) {
      showError('Please enter a search query');
      return;
    }

    clearError();
    performSearch(query);
  };

  /**
   * Perform the actual search
   */
  const performSearch = async (query) => {
    try {
      // URL encode the search query
      const encodedQuery = encodeURIComponent(query);

      // Check if we have the Scramjet search engine available
      if (window.SearchAPI && typeof window.SearchAPI.search === 'function') {
        const results = await window.SearchAPI.search(encodedQuery);
        handleSearchResults(results);
      } else {
        // Fallback: use a privacy-focused search engine
        const searchUrl = `https://duckduckgo.com/?q=${encodedQuery}`;
        window.location.href = searchUrl;
      }
    } catch (error) {
      handleSearchError(error);
    }
  };

  /**
   * Handle search results
   */
  const handleSearchResults = (results) => {
    console.log('Search results:', results);
    // Handle results based on your search engine implementation
  };

  /**
   * Handle search errors
   */
  const handleSearchError = (error) => {
    console.error('Search error:', error);
    showError(
      'An error occurred during search',
      error.message || JSON.stringify(error)
    );
  };

  /**
   * Handle keyboard shortcuts
   */
  const handleKeyboard = (event) => {
    // Focus search input on '/' key
    if (event.key === '/' && document.activeElement !== searchInput) {
      event.preventDefault();
      searchInput.focus();
    }

    // Clear search on 'Escape'
    if (event.key === 'Escape') {
      searchInput.value = '';
      clearError();
    }
  };

  /**
   * Show error message
   */
  const showError = (message, details = '') => {
    if (errorDisplay) {
      errorMessage.textContent = message;
      if (details) {
        errorCode.textContent = details;
      }
      errorDisplay.classList.add('show');
    }
  };

  /**
   * Clear error message
   */
  const clearError = () => {
    if (errorDisplay) {
      errorDisplay.classList.remove('show');
      errorMessage.textContent = '';
      errorCode.textContent = '';
    }
  };

  /**
   * Get version
   */
  const getVersion = () => {
    return '2.0.0';
  };

  // Public API
  return {
    init,
    getVersion,
    showError,
    clearError
  };
})();

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', App.init);
} else {
  App.init();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = App;
}