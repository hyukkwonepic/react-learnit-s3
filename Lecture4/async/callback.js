// 1. callback 함수
function getTime(callback) {
  setTimeout(() => {
    callback(new Date());
  }, 1000);
}

function execute() {
  getTime((currentTime) => {
    console.log('The current time', currentTime);
    console.log('Haha did I get the time? '); // 시간 출력 후 실행
  });
}

execute();