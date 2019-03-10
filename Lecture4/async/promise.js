	// 2. promise
function getTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = true;
      if (isSuccess) {
        resolve(new Date());
      } else {
        reject('Error!');
      }
    }, 1000);
  });
}

function execute() {
  // promise chain
  getTime()
    .then((currentTime) => {
      console.log('The current time is ', currentTime);
      return getTime();
    })
    .then((newTime) => {
      console.log('The new time', newTime);
      return getTime();
    })
    .then((hahaha) => {
      console.log('The hahaha', hahaha);
    })
    .catch((error) => {
      console.log(error);
    });
}

execute();