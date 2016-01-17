var express = require('express');
var app = express();
var os = require("os");

function getLocalExternalIp()
{
	try
	{

		var adress = null;
		var ifaces = os.networkInterfaces();

		for (var dev in ifaces)
		{
			var iface = ifaces[dev].filter(function(details) {
				return details.family === 'IPv4' && details.internal === false;
			});
			if(iface.length > 0) address = iface[0].address;
		}

		return address;
	}

	catch(e)
	{
		return null;
	}
}

app.use(express.static(__dirname + "/www"));

var server = app.listen(3000, function () {

	var port = server.address().port;
	var ext = getLocalExternalIp();

	console.log("Express server successfully started\n");

	console.log("Access URLs:");
	console.log("Local:    http://localhost:%s", port);
	if(ext)
		console.log("External: http://%s:%s", ext, port);

	console.log("\nServing files from ./www/");
});