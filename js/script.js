class obj {
  constructor(name) {
    this.Name = name;
    this.Element = document.getElementById(this.Name);
    this.onShow = null;
    this.onHide = null;
  }

  Show() {
    this.Element.classList.remove('bulma-is-hidden');
    if (this.onShow) this.onShow(this);
  }

  Hide() {
    this.Element.classList.add('bulma-is-hidden');
    if (this.onHide) this.onHide(this);
  }
}

class Me {
  constructor() {
    this.debug_mode = true;

    this.ele_nav_bar = null;
    this.ele_asking_name = null;
    this.ele_home = null;
    this.ele_our_profile = null;
    this.ele_portfolio = null;
    this.ele_message_us = null;
  }

  begin() {
    this.initialize();
    this.start();
  }

  #log(msg) {
    if (this.debug_mode) {
      console.log(msg);
    }
  }

  initialize() {
    this.#log(`initilized...`);

    //#region set navbar behavior
    document.addEventListener('DOMContentLoaded', () => {
      const burger = document.querySelector('.bulma-navbar-burger');
      const menu = document.getElementById(burger.dataset.target);

      burger.addEventListener('click', () => {
        burger.classList.toggle('bulma-is-active');
        menu.classList.toggle('bulma-is-active');
      });
    });
    //#endregion

    //#region prepare objects
    this.ele_nav_bar = new obj('NavBar');
    this.ele_nav_bar.onShow = this.#onEleShown.bind(this);
    this.ele_nav_bar.onHide = this.#onEleHidden.bind(this);
    this.ele_nav_bar.Hide();

    this.ele_asking_name = new obj('AskingName');
    this.ele_asking_name.onShow = this.#onEleShown.bind(this);
    this.ele_asking_name.onHide = this.#onEleHidden.bind(this);
    this.ele_asking_name.Hide();

    this.ele_home = new obj('Home');
    this.ele_home.onShow = this.#onEleShown.bind(this);
    this.ele_home.onHide = this.#onEleHidden.bind(this);
    this.ele_home.Hide();

    this.ele_our_profile = new obj('OurProfile');
    this.ele_our_profile.onShow = this.#onEleShown.bind(this);
    this.ele_our_profile.onHide = this.#onEleHidden.bind(this);
    this.ele_our_profile.Hide();

    this.ele_portfolio = new obj('Portfolio');
    this.ele_portfolio.onShow = this.#onEleShown.bind(this);
    this.ele_portfolio.onHide = this.#onEleHidden.bind(this);
    this.ele_portfolio.Hide();

    this.ele_message_us = new obj('MessageUs');
    this.ele_message_us.onShow = this.#onEleShown.bind(this);
    this.ele_message_us.onHide = this.#onEleHidden.bind(this);
    this.ele_message_us.Hide();
    //#endregion
  }

  #onEleShown(sender) {
    if (sender.Name !== this.ele_nav_bar.Name) {
      if (sender.Name == this.ele_asking_name.Name) {
        this.ele_nav_bar.Hide();
      } else {
        this.ele_asking_name.Hide();
        this.ele_nav_bar.Show();
      }
    }
  }

  #onEleHidden(sender) {

  }


  start() {
    this.#log(`start...`);

    this.asking_name();
  }

  asking_name() {
    this.#log(`asking name...`);
    this.ele_asking_name.Show();
  }

  home() {
    this.#log(`home...`);
    this.ele_home.Show();

  }

  our_profile() {
    this.#log(`our profile...`);

  }

  portfolio() {
    this.#log(`portfolio...`);

  }

  message_us() {
    this.#log(`message us...`);

  }
}

const me = new Me();
