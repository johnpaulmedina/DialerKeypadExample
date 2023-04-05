class KeyController {

  constructor () {
    this.onClick = () => {
      this.beforeKeyPress(this.onKeyPress);
    }
  }

  beforeKeyPress(onKeyPress) {
    onKeyPress.apply(this, arguments);
    this.afterKeyPress.apply(this, arguments);
  }

  afterKeyPress() {}
}

export default {
  controller: KeyController,
  require: {
    keypadCtrl: "^dialerKeypad"
  },
  template: require('./views/dialer-keypad-key.html'),
  bindings: {
    name: "<name",
    characters: "<characters",
    value: "<value",
    onKeyPress: "&onClick"
  }
}
