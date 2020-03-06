let ICAL = require('ical.js');
//let fs = require('file-saver');
let fs = require('fs');

/**
 * Welcome to ICAL.js fiddle
 */

var iCalendarData = [
    'BEGIN:VCALENDAR',
    'CALSCALE:GREGORIAN',
    'PRODID:-//University of Hawaii at Manoa.//ICS 414//EN',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    'DTSTAMP:20200228T232000Z',
    'DTSTART;VALUE=DATE:20201129',
    'DTEND;VALUE=DATE:20201130',
    'GEO:40.0095;105.2669',
    'SUMMARY:Planning meeting',
    'UID:4088E990AD89CB3DBB484909',
    'END:VEVENT',
    'END:VCALENDAR'
].join("\r\n");


var jcalData = ICAL.parse(iCalendarData);
var vcalendar = new ICAL.Component(jcalData);
// var vevent = vcalendar.getFirstSubcomponent('vevent');
//var event = new ICAL.Event(vevent);
// var summary = vevent.getFirstPropertyValue('summary');
// console.log('Summary: ' + summary);


fs.writeFileSync('event.ics', vcalendar);
