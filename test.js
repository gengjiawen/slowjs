let o = function AAAA(){}

class AAAAAAAAAAAwange {
  constructor() {
    this.message = "hello";
    this.b = 10086;
  }
}
const target = new AAAAAAAAAAAwange();
o.target = target;

__js_gcdump_objects();
print(o); // retain the obj to prevent it from being freed
