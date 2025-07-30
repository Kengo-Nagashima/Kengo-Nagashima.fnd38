'use strict';

function checkIfPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


function startPrimeDisplay() {
    // HTMLから入力された最大値を取得し、parseIntで整数に変換。
    const maxNumber = parseInt(document.getElementById("maxNumber").value);
    // HTMLから入力された間隔を取得し、parseFloatで浮動小数点に変換。
    const intervalSeconds = parseFloat(document.getElementById("interval").value);
    // 入力値がNaNでないか、最大値が2以上、間隔が0.001秒以上であるかチェック。
    if (isNaN(maxNumber) || isNaN(intervalSeconds) || maxNumber < 2 || intervalSeconds < 0.001) {
        // 出力エリアを取得。
        const output = document.getElementById("output");
        // エラーメッセージを表示。
        output.innerHTML = "入力に誤りがあります。数値を正しく入力してください。";
        // 関数の実行を中止。
        return;
    }
    // 秒をミリ秒に変換。
    const intervalMs = intervalSeconds * 1000;
    const output = document.getElementById("output");
    const primeList = [];
    // 2から最大値までの数をチェック。
    for (let i = 2; i <= maxNumber; i++) {
        // 素数判定。
        if (checkIfPrime(i)) {
            // 素数なら配列に追加。
            primeList.push(i);
        }
    }
    // 現在表示中の素数のインデックス。
    let index = 0;
    function showNextPrime() {
        // まだ表示していない素数がある場合。
        if (index < primeList.length) {
            // 現在のインデックスにある素数を表示。
            output.innerHTML = primeList[index];
            // インデックスを次に進める。
            index++;
        } else {
            // ビルトイン関数clearInterval(timer)でインターバルを停止。
            clearInterval(timer);
            output.innerHTML = "完";
        }
    }
    // 最初の素数を表示。
    showNextPrime();
    //　ビルトイン関数setIntervalを使用。timerを識別するために関数を代入
    // setInterval(関数, 間隔ミリ秒);指定された間隔で次の素数showNextPrime()を表示する。
    const timer = setInterval(showNextPrime, intervalMs);
}



