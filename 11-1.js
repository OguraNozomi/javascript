// console.log(document.body);


// for (let i = 0; i < document.body.childElementCount; i++) {
//     console.log(i + ':' + document.body.children[i]);
// }

// console.log(document.body.children);

// console.log(document.getElementsByTagName('span'));

// console.log(document.getElementById('id'));

console.log(document.querySelector('#fashion'));
console.log(document.querySelectorAll('.item'));
console.log(document.querySelectorAll('#goods .item'));

//テキストボックスの値を取得する
let element = document.getElementById('item');
console.log(element.value);

//テキストボックスのtype属性を取得する
let element2 = document.getElementById('item');
console.log(element2.type);

let element3 = document.getElementById('item');
element3.value = '新しい商品';
element3.type = 'password';

let e1 = document.getElementById('p1');
let e2 = document.getElementById('p2');
let e3 = document.getElementById('p3');

e1.innerText = 'テキストの部分の文字列';//<div id="p1">テキストの部分の文字列</div>
e2.innerHTML = '<p>HTMLの文字列</p>'; //<div id="p2"><p>HTMLの文字列</p></div>
//e3.outerHTML = '<h1>変更したタグ</h1>'; // <h1>変更したタグ</h1>

let e11 = document.getElementById('p1');
let e22 = document.getElementById('p2');
let e33 = document.getElementById('p3');

console.log(e11.tagName);    //　タグ名を取得
console.log(e22.id);         //　id属性の値を取得
e22.id = 'p4';               //　id属性の値を変更
console.log(e33.className);  //　class属性の値を取得