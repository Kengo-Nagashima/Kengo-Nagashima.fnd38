'use strict';

function checkIfPrime(number) {
    if (number < 2) {                               // 素数は2以上なので、2未満の数値は素数ではない。
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {  // 数字の平方根までチェックすることで、効率的に素数判定を行う。
        if (number % i === 0) {                     // 割り切れる場合、素数ではない。
            return false;
        }
    }
    return true;                                    // 割り切れない場合、素数である。
}


function startPrimeDisplay() {
    const maxNumber = parseInt(document.getElementById("maxNumber").value);                                  // HTMLから入力された最大値を取得し、parseIntで整数に変換。
    const intervalSeconds = parseFloat(document.getElementById("interval").value);                          // HTMLから入力された間隔を取得し、浮動小数点数に変換。
    if (isNaN(maxNumber) || isNaN(intervalSeconds) || maxNumber < 2 || intervalSeconds < 0.001) {           // 入力値がNaNでないか、最大値が2以上、間隔が0.001秒以上であるかチェック。
        const output = document.getElementById("output");                                                    // 出力エリアを取得。
        output.innerHTML = "入力に誤りがあります。数値を正しく入力してください。";                               // エラーメッセージを表示。
        return;                                                                                             // 関数の実行を中止。
    }
    const intervalMs = intervalSeconds * 1000;                                                              // 秒をミリ秒に変換。
    const output = document.getElementById("output");                                                       // 出力エリアを取得。
    const primeList = [];                                                                                   // 素数を格納するための配列。
    for (let i = 2; i <= maxNumber; i++) {                                                                  // 2から最大値までの数をチェック。
        if (checkIfPrime(i)) {                                                                              // 素数判定。
            primeList.push(i);                                                                              // 素数なら配列に追加。
        }
    }
    let index = 0;                                                                                          // 現在表示中の素数のインデックス。
    function showNextPrime() {
        if (index < primeList.length) {                                                                     // まだ表示していない素数がある場合。
            output.innerHTML = primeList[index];                                                            // 現在のインデックスにある素数を表示。
            index++;                                                                                        // インデックスを次に進める。
        } else {
            clearInterval(timer);                                                                           // インターバルを停止。
            output.innerHTML = "完";                                                                        // 完了メッセージを表示。
        }
    }
    showNextPrime();                                                                                        // 最初の素数を表示。
    const timer = setInterval(showNextPrime, intervalMs);                                                   // 指定された間隔で次の素数を表示する。
}



