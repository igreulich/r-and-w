define(['moment'],
  function(moment) {
    console.log('loaded b');

    const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    return currentTime;
});
