// VARIABLES REMOVED FOR SECURITY

const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

// send message at 10am:
// from stackoverflow: https://stackoverflow.com/questions/4455282/call-a-javascript-function-at-a-specific-time-of-day
var now = new Date();
var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0) - now;
if (millisTill10 < 0) {
    millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
}
setTimeout(function () {
    client.messages
        .create({
            body: 'Look at you slaying the women in tech game ❤',
            from: '+19106988490',
            to: phoneNumber
        })
        .then(message => console.log(message.sid));
}, millisTill10);

