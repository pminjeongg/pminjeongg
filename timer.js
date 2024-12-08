let count = 1;
let timerID = null; // 타이머 ID

onmessage = function (e) { // 브라우저로부터 메시지 수신
    if (e.data === "start") { 
        if (timerID !== null) return; // 타이머가 이미 작동 중이면 리턴
        timerID = setInterval(() => { 
            postMessage(count); // 카운트 값을 브라우저로 전송
            count++; // 카운트 값 증가
        }, 1000); // 1초 간격
    }
    else if (e.data === "stop") {
        if (timerID === null) return; // 타이머가 작동하지 않으면 리턴
        clearInterval(timerID);
        timerID = null; // 타이머 ID 초기화
    }
};

