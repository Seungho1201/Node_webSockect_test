const express = require('express');
const app = express();
const http = require('http');
const WebSocket = require('ws');

// Express 설정
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('test'); // views 폴더에 test.ejs 필요
});

app.get('/client', (req, res) => {
  res.render('client');
});

// HTTP & WebSocket 서버 생성
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('클라이언트가 연결됨');

    ws.on('message', (message) => {
        console.log(`받은 메시지: ${message}`);
        ws.send(`서버 응답: ${message}`); // 클라이언트에게 메시지 반환
    });

    ws.on('close', () => {
        console.log('클라이언트 연결 종료');
    });
});

// 서버 실행
server.listen(8080, () => {
    console.log('서버 실행: http://localhost:8080');
});
