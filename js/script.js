class obj {
  constructor(name) {
    this.Name = name;
    this.Element = document.getElementById(this.Name);
    this.onShow = null;
    this.onHide = null;

    this.#hidden_class_name = "hidden";
  }

  #hidden_class_name;

  Show() {
    this.Element.classList.remove(this.#hidden_class_name);
    if (this.onShow) this.onShow(this);
  }

  Hide() {
    this.Element.classList.add(this.#hidden_class_name);
    if (this.onHide) this.onHide(this);
  }
}

class Me {
  constructor() {
    this.debug_mode = true;

    this.ele_nav_bar = null;
    this.ele_footer = null;
    this.ele_asking_name = null;
    this.ele_home = null;
    this.ele_our_profile = null;
    this.ele_portfolio = null;
    this.ele_message_us = null;

    this.User = null;
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
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');

    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      burger.classList.toggle('text-blue-200'); // optional visual feedback
    });
    //#endregion



    //#region prepare objects
    this.ele_nav_bar = new obj('NavBar');
    this.ele_nav_bar.onShow = this.#onEleShown.bind(this);
    this.ele_nav_bar.onHide = this.#onEleHidden.bind(this);
    this.ele_nav_bar.Hide();

    this.ele_footer = new obj('Footer');
    this.ele_footer.onShow = this.#onEleShown.bind(this);
    this.ele_footer.onHide = this.#onEleHidden.bind(this);
    this.ele_footer.Hide();

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



    //#region Message Us stuff
    const btn = document.getElementById("submitBtn");
    const output = document.getElementById("output");
    const outputBox = document.getElementById("outputBox");
    const currentTime = document.getElementById("currentTime");
    const contentGrid = document.getElementById("contentGrid");
    const formBox = document.getElementById("formBox");

    // Show current time
    function updateTime() {
      const now = new Date();
      currentTime.textContent = now.toString();
    }
    updateTime();

    btn.addEventListener("click", () => {
      const name = document.getElementById("name").value.trim();
      const birthdate = document.getElementById("birthdate").value.trim();
      const gender = document.querySelector('input[name="gender"]:checked')?.value;
      const message = document.getElementById("message").value.trim();

      // 🔸 Validation: Check if all required fields are filled
      if (!name || !birthdate || !gender || !message) {
        alert("Please fill out all fields before submitting.");
        return; // 🚫 Stop execution
      }

      // ✅ If valid, show the output
      output.innerHTML = `
    <p><span class="font-semibold">Nama:</span> ${name}</p>
    <p><span class="font-semibold">Tanggal Lahir:</span> ${birthdate}</p>
    <p><span class="font-semibold">Jenis Kelamin:</span> ${gender}</p>
    <p><span class="font-semibold">Pesan:</span> ${message}</p>
  `;

      // Show the output box and change layout to 2 columns
      outputBox.classList.remove("hidden");
      contentGrid.classList.remove("grid-cols-1");
      contentGrid.classList.add("md:grid-cols-2");
      formBox.classList.remove("mx-auto", "max-w-md");
    });
    //#endregion
  }

  #onEleShown(sender) {
    if (!sender) return;
    if (!this.ele_nav_bar) return;
    if (!this.ele_footer) return;
    if (sender.Name == this.ele_nav_bar.Name) return;
    if (sender.Name == this.ele_footer.Name) return;


    this.#log(sender.Name);

    if (sender.Name == this.ele_asking_name.Name) {
      this.ele_nav_bar.Hide();
      this.ele_footer.Hide();
    } else {
      this.ele_asking_name.Hide();
      this.ele_nav_bar.Show();
      this.ele_footer.Show();
      if (sender.Name !== this.ele_home.Name) this.ele_home.Hide();
      if (sender.Name !== this.ele_our_profile.Name) this.ele_our_profile.Hide();
      if (sender.Name !== this.ele_portfolio.Name) this.ele_portfolio.Hide();
      if (sender.Name !== this.ele_message_us.Name) this.ele_message_us.Hide();
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

  submit_name(name) {
    this.#log(`user is ` + name);
    this.User = name;
    this.ele_home.Show();
  }

  home() {
    this.#log(`home...`);
    this.ele_home.Show();

  }

  our_profile() {
    this.#log(`our profile...`);
    this.ele_our_profile.Show();

  }

  portfolio() {
    this.#log(`portfolio...`);
    this.ele_portfolio.Show();

  }

  message_us() {
    this.#log(`message us...`);
    this.ele_message_us.Show();

  }
}

const me = new Me();
