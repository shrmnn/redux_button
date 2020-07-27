const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3030 })

let toggled_state = 'false';
let click_counter = 0;

console.log('WSS working');

const broadcast = (toggled_state, ws) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            console.log('Broadcast Sent: ', {toggled_state});
            client.send(JSON.stringify({toggled_state}))
        }
    })
}

wss.on('connection', (ws) => {
    console.log("New connection was establied");
    ws.send(JSON.stringify({toggled_state}));
    ws.on('message', (message) => {
        console.log('Message is', message);
        let value = JSON.parse(message);
        console.log(value.type);
        switch (value.type) {
            case 'TOGGLE':
                if (toggled_state === 'false') {
                    toggled_state = 'true';
                } else {
                    toggled_state = 'false';
                }
                console.log('Sent: ', toggled_state);
                
                click_counter++;
                console.log(click_counter);

                broadcast({ toggled_state }, ws);
                break;
            case 'CONNECT':
                broadcast({ toggled_state }, ws);
                break;
            default:
                break;
        }
    })

  ws.on('close', () => {
    console.log("Connection was closed");
  })
})