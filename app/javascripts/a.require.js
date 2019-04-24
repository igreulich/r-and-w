require.config({
  paths: {
    moment: 'lib/moment',
    jquery: 'lib/jquery',
  }
});

requirejs([
  'jquery',
  'b.require',
  ],
  function($, currentTime) {
    console.log('loaded a');

    return $('.require-time').html(currentTime);
});
