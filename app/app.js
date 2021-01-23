const relay201 = require("201");
const relay1 = "192.168.80.100";
const relay2 = "192.168.80.101";
const relay3 = "192.168.80.102";

var relay11 = new Boolean(false);
var relay12 = new Boolean(false);
var relay13 = new Boolean(false);
var relay14 = new Boolean(false);
var relay15 = new Boolean(false);
var relay16 = new Boolean(false);
var relay17 = new Boolean(false);
var relay18 = new Boolean(false);
var relay21 = new Boolean(false);
var relay22 = new Boolean(false);
var relay23 = new Boolean(false);
var relay24 = new Boolean(false);
var relay25 = new Boolean(false);
var relay26 = new Boolean(false);
var relay27 = new Boolean(false);
var relay28 = new Boolean(false);
var relay31 = new Boolean(false);
var relay32 = new Boolean(false);
var relay33 = new Boolean(false);
var relay34 = new Boolean(false);
var relay35 = new Boolean(false);
var relay36 = new Boolean(false);
var relay37 = new Boolean(false);
var relay38 = new Boolean(false);

function relaychange(relayIPNum, relayNum) {
        relay201.connect(relayIPNum).then(async (client) => {
                await client.delay(200);
                console.log(client.status(relayNum));
                if (client.status(relayNum) === true) {
                        await client.off(relayNum);
                        console.log('status turn off', relayNum, client.status(relayNum));
                } else {
                        await client.on(relayNum);
                        console.log('status turn on', relayNum, client.status(relayNum));
                }
                await client.end();
        }, (err) => {
                console.log(err);
        });
        }

function relayonofftemplate(relayIPNum, relayNum) {
        relay201.connect(relayIPNum).then(async (client) => {
                console.log('status', relayNum, client.status(relayNum));
                await client.on(relayNum);
                await client.delay(2000);
                await client.off(relayNum);
                console.log('status', relayNum, client.status(relayNum));
                await client.end();
        }, (err) => {
                console.log('error onoff');
        });
        }
        

function relaystatuscheck() {
relay201.connect(relay1).then(async (client) => {
	await client.delay(1000);
	console.log('relay 100', await client.stat());
	relay11 = client.status(1);
	console.log('relay11', relay11);
	await client.end();
}, (err) => {
        console.log('error relay 1 status');
});

relay201.connect(relay2).then(async (client) => {
        await client.delay(1000);
        console.log('relay 101', await client.stat());
	relay28 = client.status(8);
        console.log('relay28', relay28);
        await client.end();
}, (err) => {
        console.log('error relay 2 status');
});

relay201.connect(relay3).then(async (client) => {
	await client.delay(1000);
        console.log('relay 102', await client.stat());
	relay36 = client.status(6);
        console.log('relay36', relay36);
	return relay36;
        await client.end();
}, (err) => {
        console.log('error relay 3 status');
});
}

relaystatuscheck();

setTimeout(() => {
relaychange(relay1, 2);
}, 4000);

setTimeout(() => {
console.log('Relay 11 outside', relay11);
console.log('Relay 28 outside', relay28);
console.log('Relay 36 outside', relay36);

}, 5000);



