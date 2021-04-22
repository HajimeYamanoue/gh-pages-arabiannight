AOS.init();

"use strict";


var timerId;

// ボックスを表示して、タイマーを開始
function showBox() {
    document.getElementById("smoke").classList.add('open'); // ボックスを表示
    timerId = setTimeout( closeBox , 1000 ); // タイマーを開始
}

// ボックスを消して、タイマーを終了
function closeBox() {
    document.getElementById("smoke").classList.remove('open'); // ボックスを消す
    clearTimeout( timerId ); // タイマーを終了
}
