jest.mock('twilio', () => {
  return jest.fn(() => ({
    calls: jest.fn(() => ({
      update: jest.fn().mockResolvedValue({ sid: 'CA123' }),
    })),
  }));
});

const endCall = require('../functions/endCall');

test('Expect endCall to request call hangup twiml', async () => {
  const result = await endCall({ callSid: 'CA123' });

  expect(result).toBe('The call was ended successfully.');
});
