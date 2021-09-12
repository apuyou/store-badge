let poly = require('preact-cli/lib/lib/webpack/polyfills');

import { h } from 'preact';
import habitat from 'preact-habitat';

import Widget from 'react-store-badge';

const proxy = ({
  dataName,
  dataAppStoreUrl,
  dataGooglePlayUrl,
  dataTarget,
}) => {
  return (
    <Widget
      name={dataName}
      appStoreUrl={dataAppStoreUrl}
      googlePlayUrl={dataGooglePlayUrl}
      target={dataTarget}
      rel="noopener noreferrer"
    />
  );
};

let _habitat = habitat(proxy);

_habitat.render({
  selector: '.store-badge',
  clean: true,
});
