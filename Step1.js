var HID = require('node-hid');
var devices = HID.devices();

//Define Controller
var vid = 1411;
var pid = 8288;

//New Method
var device = new HID.HID(vid,pid);

device.on("data", function(data) {
	console.log("Data");
	
	//Add delay to prevent from reading too quickly or often.
	device.pause();
	
	//Slice data to usable pieces
	buff1 = data.slice(0,1).toString('hex');
	buff2 = data.slice(1,2).toString('hex');
	buff3 = parseInt(data.slice(2,3).toString('hex'), 16);
	
	console.log(data);
	
	if (buff1 == "ff") { console.log("Right"); }
	if (buff1 == "00") { console.log("Left"); }
	
	if (buff2 == "ff") { console.log("Down"); }
	if (buff2 == "00") { console.log("Up"); }
	
});