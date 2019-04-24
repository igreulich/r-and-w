require.config({
  paths: {
    // moment: 'lib/moment',
    // jquery: 'lib/jquery',
    jquery: 'https://code.jquery.com/jquery-3.4.0.slim.min',
  },
  packages: [{
    name: 'moment',
    location: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/',
    main: 'moment'
  }]
});

requirejs([
  'jquery',
  'b.require',
  ],
  function($, currentTime) {
    console.log('loaded a');

    return $('.require-time').html(currentTime);
});
