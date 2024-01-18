let o = function AAAA(){}

class AAAAAAAAAAAwange {
  constructor() {
    this.message = "hello";
  }
}
const target = new AAAAAAAAAAAwange();

const proxy2 = new Proxy(target, {});
print(`p`, proxy2.constructor.name)

o.data = {
  a: 1,
  b: true,
  proxy: proxy2,
  proxy_target: target,
  s: "string",
  c: function () {
    return 1;
  },
  // d: new ArrayBuffer((1 << 20) * 50, 0),
  // e: new Uint16Array((1 << 20) * 50, 0),
};

__js_gcdump_objects();
print(o); // retain the obj to prevent it from being freed
