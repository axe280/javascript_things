(() => {
  const $ = function (selector) {
    let elements = [];

    if (selector instanceof HTMLElement) {
      elements.push(selector);
    } else {
      elements = Array.from(document.querySelectorAll(selector));
    }

    return new Methods(elements);
  };

  window.$ = $;


  class Methods {
    constructor(selectors = []) {
      this.selectors = selectors;
    }

    find(selector) {
      let newObject = null;

      this.selectors.find(elem => {
        const findElement = elem.querySelector(selector);

        if (findElement) {
          newObject = new Methods();
          newObject.selectors.push(findElement);

          return true;
        }
      });

      return newObject;
    }

    next() {
      let newObject = null;

      const findElement = this.selectors[0].nextElementSibling;

      if (findElement) {
        newObject = new Methods();
        newObject.selectors.push(findElement);

        return newObject;
      }
    }

    prev() {
      let newObject = null;

      const findElement = this.selectors[0].previousElementSibling;

      if (findElement) {
        newObject = new Methods();
        newObject.selectors.push(findElement);

        return newObject;
      }
    }

    parent() {
      let newObject = null;

      const findElement = this.selectors[0].parentElement;

      if (findElement) {
        newObject = new Methods();
        newObject.selectors.push(findElement);

        return newObject;
      }
    }

    hidden() {
      for (const element of this.selectors) {
        element.style.display = 'none';
      }

      return this;
    }

    show() {
      for (const element of this.selectors) {
        element.style.display = '';
      }

      return this;
    };

    toggle() {
      for (const element of this.selectors) {
        if (element.style.display === 'none') {
          element.style.display = '';
        } else {
          element.style.display = 'none';
        }
      }

      return this;
    };

    addClass(className) {
      for (const element of this.selectors) {
        element.classList.add(className);
      }

      return this;
    };

    removeClass(className) {
      for (const element of this.selectors) {
        element.classList.remove(className);
      }

      return this;
    };

    toggleClass(className) {
      for (const element of this.selectors) {
        element.classList.toggle(className);
      }

      return this;
    };

    on(eventName, handler, options) {
      for (const element of this.selectors) {
        element.addEventListener(eventName, handler, options);
      }

      return this;
    };

    off(eventName, handler) {
      for (const element of this.selectors) {
        element.removeEventListener(eventName, handler);
      }

      return this;
    };

    html(content) {
      for (const element of this.selectors) {
        element.innerHTML = content;
      }

      return this;
    };
  }
})();