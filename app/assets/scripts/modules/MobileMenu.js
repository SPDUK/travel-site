import $ from 'jquery';


class MobileMenu {
  constructor() {
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $ (".site-header__menu");
    this.events();
}
  events() {
    this.menuIcon.click(this.toggleMenu.bind(this));
  }
  toggleMenu() {
    this.menuContent.toggleClass("site-header__menu-visible");
    this.siteHeader.toggleClass("site-header__expanded");
  }
}

export default MobileMenu;
