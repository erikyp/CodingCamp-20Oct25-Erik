class Me {
  constructtor() {
    this.debug_mode = true;
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

  }

  start() {
    this.#log(`start...`);

    this.asking_name();
  }

  asking_name() {
    this.#log(`asking name...`);
  }


  home() {
    this.#log(`home clicked...?`);

  }

  our_profile() {
    this.#log(`our profile clicked...?`);

  }

  portfolio() {
    this.#log

  }

  message_us() {
    this.#log(`message us clicked...?`);

  }
}

const me = new Me();
