const relay201 = require("201");
//status

relay201.connect("192.168.80.100").then(async (client) => {
	await client.delay(2000);
	await client.stat();
	console.log(await client.stat());
	console.log('status 1');
	console.log(client.status(1));
	console.log('status 2');
	console.log(await client.status(2));
	await client.on(1);
	await client.delay(2000);
	await client.on(2);
	await client.off(1);
        console.log('status 3');
        console.log(await client.status(3));
        console.log('status 4');
        console.log(await client.status(4));
	await client.delay(1000);
	await client.off(2);
        console.log('status 1');
 	console.log(client.status(1));
        console.log('status 6');
        console.log(client.status(6));
        console.log('status 7');
        console.log(client.status(7));
        console.log('status 8');
        console.log(client.status(8));
	console.log(client.stat());



	await client.end();
}, (err) => {
	console.log(err);
});
