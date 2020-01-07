import IO from 'socket.io-client';

const socket = IO('http://127.0.0.1:9200');

export default socket;

// socket.on('connect', () => console.log('连接成功'));
// socket.on('disconnect', () => console.log('连接断开'));