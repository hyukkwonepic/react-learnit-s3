// callback hell...

function getTime(callback) {
  setTimeout(() => {
    callback(new Date());
  }, 1000);
}

function execute() {
  getTime((time) => {
    console.log('The first time is ', time);
    getTime((time) => {
      console.log('The second time is', time);
      getTime((time) => {
        console.log('The third time is', time);
        getTime((hell) => {
          console.log('The fourth... What the hell...! pheww...', hell);
        })
      })
    })
  }, (error) => {
    console.log(error);
  });
}

execute();