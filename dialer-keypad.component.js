import $keys from './utils/keys.util.js';
import style from './scss/dialer-keypad.scss';

class KeypadController {
  constructor () {
  }

  onKeyPress(key) {
    this.DialerCtrl.onKeyPress(key);
  }

  $onInit() {}

  keys() {
    return $keys;
  }
}

export default {
  bindToController: true,
  controller: KeypadController,
  require: {
    DialerCtrl: '^dialer',
  },
  template: require('./views/dialer-keypad.html')
}
