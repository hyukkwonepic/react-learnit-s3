// 0. 동기적 프로그래밍
function getTime() {
  setTimeout(() => {
    console.log('The current time is', new Date());
  }, 1000);
}

function execute() {
  getTime();
  console.log('Haha did I get the time?'); // 먼저 실행
}

execute();