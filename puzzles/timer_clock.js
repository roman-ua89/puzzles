
// <div className="outer">
//   <div className="timer-container">
//     <div className="display">00:00</div>
//     <div className="actions">
//       <button className="start">Start</button>
//       <button className="stop">Stop</button>
//       <button className="reset">Reset</button>
//     </div>
//   </div>
// </div>


class TimerClock {
  timerId = null;
  timerDelay = 1000;
  timeObj = { min: 0, sec: 0 }

  constructor(parentSelector) {
    this.$parentSelector = document.querySelector(parentSelector);
    this.$start = this.$parentSelector.querySelector('.start');
    this.$stop = this.$parentSelector.querySelector('.stop');
    this.$reset = this.$parentSelector.querySelector('.reset');
    this.$display = this.$parentSelector.querySelector('.display');

    this.init();
  }

  init() {
    this.$start.addEventListener('click', this.startHandler.bind(this));
    this.$stop.addEventListener('click', this.stopHandler.bind(this));
    this.$reset.addEventListener('click', this.resetHandler.bind(this));
  }

  startHandler() {
    this.$start.setAttribute('disabled', true);
    this.timerId = setInterval(() => {
      this.updateTimer();
      this.render();
    }, this.timerDelay)

  }
  stopHandler() {
    clearTimeout(this.timerId);
    this.$start.removeAttribute('disabled');
  }
  resetHandler() {
    clearTimeout(this.timerId);
    this.timeObj = { min: 0, sec: 0 };
    this.render();
  }

  updateTimer() {
    let { min, sec } = this.timeObj;
    if (sec < 60) {
      sec += 1;
    } else if (sec === 60) {
      sec = 0;
      min += 1;
    }
    this.timeObj = { min, sec }
  }

  render() {
    let { min, sec } = this.timeObj;
    this.$display.innerText = `${this.fixZero(min)}:${this.fixZero(sec)}`
  }

  fixZero(number) {
    if (number < 9) {
      return `0${number}`;
    } else {
      return `${number}`;
    }
  }

}

new TimerClock('.timer-container');
