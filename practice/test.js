var s = "obj";
function f(){
    console.log(this.s);
}
f.s = "that";
var obj = {s: "window", f: f};
obj.f();
f();
var f2 = f.bind(f);
f2.apply({s: 'foo'});