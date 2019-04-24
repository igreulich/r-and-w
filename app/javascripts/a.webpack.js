import $ from 'jquery';

import currentTime from './b.webpack';

console.log('loaded a');

export default $('.webpack-time').html(currentTime);
