// export let A=123;
//
// export function test(){
//   console.log('test');
// }
//
// export class Hello{
//   test(){
//     console.log('class');
//   }
// }
// import {A , test , Hello} from './';
// import * as a from './'  ;  可以设置别名 调用 a.A

let A = 123;
let test = function () {
    console.log('test');
}
class Hello {
    test() {
        console.log('class');
    }
}

export default {
    A,
    test,
    Hello
}
// import name from './'  ;  可以设置别名 调用 a.A