// 3. async/await
function getTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = true;
      if (isSuccess) {
        resolve(new Date());
      } else {
        reject('Error');
      }
    }, 1000);
  })
};

async function execute() {
  try {
    const currentTime = await getTime();
    console.log('The current time is', currentTime);
  } catch (error) {
    console.log(error);
  }
}

execute();