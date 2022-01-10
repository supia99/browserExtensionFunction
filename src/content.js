console.log('ようつべ広告スキップします!');
// window.alert('アプリ開いたね！');

// let time = 0;
const TIME_INTERVAL = 100;

let skipButton = undefined;
let adMessageContainer = undefined;
setInterval(() => {
  // time = time + TIME_INTERVAL
  // console.log('youtube経過時間: ', time);

  skipButton = document.getElementsByClassName('ytp-ad-skip-button-text');
  if(skipButton.length !== 0) {
    // console.log('skip buttonあり: ', skipButton);
    skipButton[0].click();
  } else {
    // console.log('skip button無し:', skipButton);
  }

  adMessageContainer = document.getElementsByClassName('ytp-ad-message-container');
  if(adMessageContainer.length !== 0) {
    adMessageContainer[0].style.display = 'none';
  } else {
    // console.log('adMessageContainer無し')
  }

}, TIME_INTERVAL);
