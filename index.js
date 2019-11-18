const { RTMClient } = require('@slack/rtm-api');

const token = 'xoxb-831052123879-829198541152-MuupFgqAbgZlvVyF70Bhzrun';

const rtm = new RTMClient(token);
rtm.start();

const food = require('./food');
const movie = require('./movie');

rtm.on('message', (message) => {
    const { channel } = message;
    const { text } = message;
    console.log(`get message ${text}`);

    switch (text) {
    case '영화 ':
        movie(rtm, channel);
        break;
    case '밥':
        food(rtm, channel);
        break;
    case '야,챗봇':
        rtm.sendMessage('흑흑', channel);
        break;
    default: rtm.sendMessage('네 챗봇입니다', channel);
    }
});
