// 1-1. callback과 onSuccess, onFailure
function getTime(onSuccess, onFailure) {
  setTimeout(() => {
    // const isSuccess = true;
    const isSuccess = Math.random() >= 0.5;

    if (isSuccess) {
      onSuccess(new Date());
    } else {
      onFailure('Error!');
    }
  }, 1000);
}

function execute() {
  getTime((time) => {
    console.log('The current time!' + time);
  }, (e) => {
    console.log('An error', e);
  });
}

execute();