Vue.createApp({
  data() {
    return {
      fullbody: 0,
      legsquat: 0,
      push_upp: 0,
      armss: 0,
      total: 0,
      page: "home",
      countDown_push_upp: 0,
      count_push_upp: 0,
      countDown_armss: 0,
      count_armss: 0,
      countDown_leg: 0,
      count_leg: 0,
      countDown_full_body: 0,
      count_full_body: 0,
      report: "",
      imageSrc_arms: "tricep-dip.gif",
      imageAlt_arms: "Arms",
      imageSrc_chest: "push-up.gif",
      imageAlt_chest: "Push Up",
      imageSrc_jumpSquat: "jump-squat.gif",
      imageAlt_jumpSquat: "Jump Squat",
      imageSrc_fullBody: "full-body.gif",
      imageAlt_fullBody: "Full Body",
    };
  },

  mounted() {
    //arms
    this.armss = JSON.parse(localStorage.getItem("armss"));
    this.countDown_armss = JSON.parse(localStorage.getItem("countDown_armss"));

    //chest
    this.push_upp = JSON.parse(localStorage.getItem("push_upp"));
    this.countDown_push_upp = JSON.parse(
      localStorage.getItem("countDown_push_upp")
    );

    //legs
    this.legsquat = JSON.parse(localStorage.getItem("legsquat"));
    this.countDown_leg = JSON.parse(localStorage.getItem("countDown_leg"));

    // full body
    this.fullbody = JSON.parse(localStorage.getItem("fullbody"));
    this.countDown_full_body = JSON.parse(
      localStorage.getItem("countDown_full_body")
    );

    let txt =
      "Welcome to our app. We hope you will enjoy the app. We have arms, leg, chest  and  full body";

      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      speech.text = txt;
      speech.rate = 1;
      speech.volume = 1;
      speech.pitch = 1;
      speechSynthesis.speak(speech);
  },

  watch: {
    // Arms localStorage
    armss(newValue, oldValue) {
      localStorage.setItem("armss", JSON.stringify(newValue));
    },
    countDown_armss(newValue, oldValue) {
      localStorage.setItem("countDown_armss", JSON.stringify(newValue));
    },

    // Chest localStorage
    push_upp(newValue, oldValue) {
      localStorage.setItem("push_upp", JSON.stringify(newValue));
    },
    countDown_push_upp(newValue, oldValue) {
      localStorage.setItem("countDown_push_upp", JSON.stringify(newValue));
    },

    // legsquat localStorage
    legsquat(newValue, oldValue) {
      localStorage.setItem("legsquat", JSON.stringify(newValue));
    },
    countDown_leg(newValue, oldValue) {
      localStorage.setItem("countDown_leg", JSON.stringify(newValue));
    },

    // full body localStorage
    fullbody(newValue, oldValue) {
      localStorage.setItem("fullbody", JSON.stringify(newValue));
    },
    countDown4(newValue, oldValue) {
      localStorage.setItem("countDown_full_body", JSON.stringify(newValue));
    },
  },

  methods: {
    countDownTimer_push_upp() {
      if (this.countDown_push_upp >= 0) {
        this.count_push_upp = setTimeout(() => {
          this.countDown_push_upp += 1;
          this.countDownTimer_push_upp();
        }, 1000);
      }
    },
    countDownTimerstop_push_upp() {
      clearInterval(this.count_push_upp);
    },
    countDownTimerclear_push_upp() {
      clearInterval(this.count_push_upp);
      this.countDown_push_upp = 0;
      this.push_upp = 0;
    },

    countDownTimer_armss() {
      if (this.countDown_armss >= 0) {
        this.count_armss = setTimeout(() => {
          this.countDown_armss += 1;
          this.countDownTimer_armss();
        }, 1000);
      }
    },
    countDownTimerstop_armss() {
      clearInterval(this.count_armss);
    },
    countDownTimerclear_armss() {
      clearInterval(this.count_armss);
      this.countDown_armss = 0;
      this.armss = 0;
    },

    countDownTimer_leg() {
      if (this.countDown_leg >= 0) {
        this.count_leg = setTimeout(() => {
          this.countDown_leg += 1;
          this.countDownTimer_leg();
        }, 1000);
      }
    },
    countDownTimerstop_leg() {
      clearInterval(this.count_leg);
    },
    countDownTimerclear_leg() {
      clearInterval(this.count_leg);
      this.countDown_leg = 0;
      this.legsquat = 0;
    },

    countDownTimer_full_body() {
      if (this.countDown_full_body >= 0) {
        this.count_full_body = setTimeout(() => {
          this.countDown_full_body += 1;
          this.countDownTimer_full_body();
        }, 1000);
      }
    },
    countDownTimerstop_full_body() {
      clearInterval(this.count_full_body);
    },
    countDownTimerclear_full_body() {
      clearInterval(this.count_full_body);
      this.countDown_full_body = 0;
      this.fullbody = 0;
    },

    countpushupp() {
      this.push_upp = this.countDown_push_upp * 10;
      let txt =
        "you trained" +
        this.countDown_push_upp +
        " seconds, and you have burned " +
        this.push_upp +
        " kalorie";
      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      speech.text = txt;
      speech.rate = 1;
      speech.volume = 1;
      speech.pitch = 1;
      speechSynthesis.speak(speech);
    },
    countleg() {
      this.legsquat = this.countDown_leg * 9.133;

      let txt =
        "you trained " +
        this.countDown_leg +
        " seconds, and you have burned " +
        this.legsquat +
        " kalorie";

      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      speech.text = txt;
      speech.rate = 1;
      speech.volume = 1;
      speech.pitch = 1;
      speechSynthesis.speak(speech);
    },
    countfullbody() {
      this.fullbody = this.countDown_full_body * 20;
      let txt =
        "you trained " +
        this.countDown_full_body +
        " seconds, and you have burned " +
        this.fullbody +
        " kalorie";

      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      speech.text = txt;
      speech.rate = 1;
      speech.volume = 1;
      speech.pitch = 1;
      speechSynthesis.speak(speech);
    },
    countarms() {
      this.armss = this.countDown_armss * 10;

      let txt =
        "you trained " +
        this.countDown_armss +
        " seconds, and you have burned " +
        this.armss +
        " kalorie";

      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      speech.text = txt;
      speech.rate = 1;
      speech.volume = 1;
      speech.pitch = 1;
      speechSynthesis.speak(speech);
    },

    totalkalories() {
      this.total = this.push_upp + this.armss + this.legsquat + this.fullbody;

      this.report =
        "Hello! you have burned in all workouts, " +
        this.total +
        " kalorie," +
        " you traind: " +
        this.countDown_push_upp +
        " second for chest, " +
        this.countDown_leg +
        " second for legs, " +
        this.countDown_full_body +
        " second for fullbody, and " +
        this.countDown_armss +
        " second for arms. thank you!";

      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      speech.text = this.report;
      speech.rate = 1;
      speech.volume = 1;
      speech.pitch = 1;
      speechSynthesis.speak(speech);
    },
    clearHistory() {
      localStorage.clear();
      this.report = "";
      this.fullbody = 0;
      this.legsquat = 0;
      this.push_upp = 0;
      this.armss = 0;
      this.total = 0;
      this.countDown_push_upp = 0;
      this.count_push_upp = 0;
      this.countDown_armss = 0;
      this.count_armss = 0;
      this.countDown_leg = 0;
      this.count_leg = 0;
      this.countDown_full_body = 0;
      this.count_full_body = 0;
    },
  },
}).mount("#app");



