class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (typeof this.events[event] !== 'object') {
      this.events[event] = [];
    }

    this.events[event].push(listener);
  }

  off(event, listener) {
    if (typeof this.events[event] === 'object') {
      const idx = this.events[event].indexOf(listener);
      if (idx > -1) {
        this.events[event].splice(idx, 1);
      }
    }
  }

  emit(event, ...args) {
    if (typeof this.events[event] === 'object') {
      this.events[event].forEach(listener => listener.apply(this, args));
    }
  }

  once(event, listener) {
    const remove = () => {
      this.off(event, listener);
      this.off(event, remove);
    };
    this.on(event, listener);
    this.on(event, remove);
  }
}

const emitter = new EventEmitter();

class A {
  constructor() {
    this.valid = 'true'
  }
  init() {
    let that = this
    emitter.on('onclick', function onclick(){
      that.hello()
    })
  }
  hello() {
  }
  destroy() {
    this.valid = 'false'
  }
}

let a = new A();
a.init()
a.destroy()

a = null

__js_gcdump_objects();
