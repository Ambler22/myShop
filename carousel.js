"use strict";

class Carousel extends HTMLElement {
  static tagName = "carousel-root";

  constructor() {
    super();
  }
}

class CarouselActiveImage extends HTMLElement {
  static tagName = "carousel-active-img";

  constructor() {
    super();
    const rootEl = this.closest(Carousel.tagName);
    if (rootEl === null) {
      throw new Error(
        `"${CarouselActiveImage.tagName}" must be a descendant of "${Carousel.tagName}"`
      );
    }
    const selectedImageEl = rootEl.querySelector(
      `${CarouselImage.tagName}[selected]`
    );
    if (selectedImageEl === null) {
      throw new Error(
        `"${Carousel.tagName}" must have at least one "${CarouselImage.tagName}" with selected attribute"`
      );
    }
    const width = Number(this.getAttribute("width"));
    const height = Number(this.getAttribute("height"));
    const activeImageEl = new Image(width, height);
    activeImageEl.src = selectedImageEl.getAttribute("src");
    this.appendChild(activeImageEl);
  }
}

class CarouselList extends HTMLElement {
  static tagName = "carousel-list";

  constructor() {
    super();
    const images = Array.from(
      this.querySelectorAll(`${CarouselImage.tagName}`)
    );
    this.setAttribute("tabindex", "0");
    console.log(images);
    const selectedImg = this.querySelector(
      `${CarouselImage.tagName}[selected]`
    );
    if (selectedImg === null) {
      throw new Error(
        `"${Carousel.tagName}" must have at least one "${CarouselImage.tagName}" with selected attribute"`
      );
    }
    selectedImg.setAttribute("tabindex", "0");
    selectedImg.focus();
  }
}

class CarouselImage extends HTMLElement {
  static tagName = "carousel-img";

  constructor() {
    super();
    const listEl = this.closest(CarouselList.tagName);
    if (listEl === null) {
      throw new Error(
        `"${CarouselImage.tagName}" must be a descendant of "${CarouselList.tagName}"`
      );
    }
    this.listEl = listEl;
    const width = Number(this.getAttribute("width"));
    const height = Number(this.getAttribute("height"));
    const image = new Image(width, height);
    image.src = this.getAttribute("src");
    this.appendChild(image);
    this.addEventListener("click", this.handleClick);

    const rootEl = this.closest(Carousel.tagName);
    if (rootEl === null) {
      throw new Error(
        `"${CarouselImage.tagName}" must be a descendant of "${Carousel.tagName}"`
      );
    }
    this.rootEl = rootEl;
    this.setAttribute("tabindex", "-1");
  }

  handleClick() {
    const images = Array.from(
      this.listEl.querySelectorAll(CarouselImage.tagName)
    );
    images.forEach((image) => {
      image.removeAttribute("selected");
    });
    this.setAttribute("selected", "");
    console.log(this.rootEl.querySelector(CarouselActiveImage.tagName));
    const activeImage = this.rootEl.querySelector(
      `${CarouselActiveImage.tagName} > img`
    );
    console.log(activeImage);
    activeImage.src = this.getAttribute("src");
  }
}

window.customElements.define(Carousel.tagName, Carousel);
window.customElements.define(CarouselActiveImage.tagName, CarouselActiveImage);
window.customElements.define(CarouselList.tagName, CarouselList);
window.customElements.define(CarouselImage.tagName, CarouselImage);
