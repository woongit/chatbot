const food = function (rtm, channel) {
	    console.log('음식 추천');
  rtm.sendMessage('주변 맛집을 추천해드릴게요.', channel);
};
module.exports = food;
