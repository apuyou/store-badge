import { h } from 'preact';

import appStoreBadge from './appstore.svg';
import googlePlayBadge from './googleplay.svg';

function Widget({ dataName, dataAppStoreUrl, dataGooglePlayUrl }) {
  return (
    <div>
      {dataAppStoreUrl && (
        <a href={dataAppStoreUrl} title={dataName}>
          <img src={appStoreBadge} alt="Download on the App Store" />
        </a>
      )}

      {dataGooglePlayUrl && (
        <a href={dataGooglePlayUrl} title={dataName}>
          <img src={googlePlayBadge} alt="Get it on Google Play" />
        </a>
      )}
    </div>
  );
}

export default Widget;
