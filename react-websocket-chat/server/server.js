const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });

//Sending and receiving text data
wss.on('connection', function connection(ws, req) {
  const ip = req.socket.remoteAddress;
  ws.on('message', function incoming(data) {
     //send a message to a particular user or all users having sockets open on server.
     //A client WebSocket broadcasting to all connected WebSocket clients, excluding  itself.
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});