const {WebcController} = WebCardinal.controllers;

export default class TemplateController extends WebcController {
  constructor(...props) {
    super(...props);
    let activePage = this.element.getAttribute("active-page");
    Array.from(this.querySelector(".page-menu").children).forEach(child => {
      child.classList.remove("active");
      if (activePage === child.getAttribute("tag")) {
        child.classList.add("active");
      }
    });

    this.onTagClick("go-home", () => {
      this.navigateToPageTag("home");
    })
  }
}
