require('dotenv').config();

const endCall = async function (call) {
  console.log('Ending call', call.callSid);
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  return await client.calls(call.callSid)
    .update({ twiml: '<Response><Hangup/></Response>' })
    .then(() => {
      return 'The call was ended successfully.';
    })
    .catch(() => {
      return 'The call could not be ended, advise the customer that the line may disconnect shortly.';
    });
};

module.exports = endCall;
