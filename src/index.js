let poly = require('preact-cli/lib/lib/webpack/polyfills');

import { h } from 'preact';
import habitat from 'preact-habitat';

import Widget from './widget';

let _habitat = habitat(Widget);

_habitat.render({
  selector: '.store-badge',
  clean: true,
});
