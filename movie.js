const movie = function (rtm, channel) {
    console.log('영화를 추천합니다.');
    rtm.sendMessage('취향에 맞춘 영화를 추천~', channel);
};

module.exports = movie;
