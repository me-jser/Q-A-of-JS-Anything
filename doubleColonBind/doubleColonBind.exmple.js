let test = 2;
function foo(){
    console.log(this)
}
foo()
let obj = {
    test:1
}
foo::obj
foo()