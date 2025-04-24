export default class NavbarView {
  private readonly navbarHTML: HTMLElement

  constructor() {
    this.navbarHTML = document.createElement('navbar')
    this.navbarHTML.classList.add('navbar')
  }

  readonly init = () => {
    console.log('NavbarView.init()')
  }

  readonly getNavbarHTML = (): HTMLElement => {
    return this.navbarHTML
  }

  readonly render = () => {
    this.navbarHTML.innerHTML = `
      <h1>Navbar View</h1>
      <p>Este es el contenido de la vista de Navbar.</p>
    `
  }
}

