var os = require('os');

function timeCalc() {
	var uptime = os.uptime();
	var uMinutes = (uptime / 60).toFixed(0);
	var uHours = (uMinutes / 60).toFixed(0);
	var uSeconds =  uptime % uMinutes ;
	var hoMin = uMinutes % uHours;
	var uptimeMinSec = uMinutes + ' minutes ' + uSeconds + ' seconds';
	var uptimeHoMinSec = uHours + ' hours ' + hoMin + ' minutes ' + uSeconds + ' seconds';
	if (uHours > 0) {
		return uptimeHoMinSec;
	}
	else {
		return uptimeMinSec;
	}
}
exports.print = timeCalc;