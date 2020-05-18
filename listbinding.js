
  class ListBinding {
    constructor(element) {
      this.listElement = element;
      this.textList = [];
    }

    update() {
      // remove all existing li elements/tags
      while (this.listElement.firstChild) {
        this.listElement.removeChild(this.listElement.firstChild);
      }

    }

  }
