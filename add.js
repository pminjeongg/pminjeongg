onmessage = function (e) {
    let sum = 0;
    let from = parseInt(e.data.from);
    let to = parseInt(e.data.to);
    
    // 유효성 검사: from과 to 값이 숫자이고 from이 to보다 작거나 같아야 한다
    if (isNaN(from) || isNaN(to) || from > to) {
        postMessage('Invalid input range');
        return; // 잘못된 입력 범위일 경우 오류 메시지 전송
    }

    // 주어진 범위의 합을 구한다
    for (let i = from; i <= to; i++) {
        sum += i;
    }

    postMessage(sum); // 계산된 합을 브라우저로 전송
}

