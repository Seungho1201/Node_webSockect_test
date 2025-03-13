const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => {
    console.log('웹소켓 연결 성공');
    socket.send('안녕, 서버!');
};

socket.onmessage = (event) => {
    console.log(`서버로부터 받은 메시지: ${event.data}`);
};

socket.onclose = () => {
    console.log('웹소켓 연결 종료');
};

socket.onerror = (error) => {
    console.log(`에러 발생: ${error.message}`);
};
