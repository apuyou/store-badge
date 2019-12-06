import { h } from "preact";

import appStoreBadge from './appstore.svg';
import googlePlayBadge from './googleplay.svg';

function Widget(props) {
  console.log(props);
  const { name, appStoreUrl, googlePlayUrl } = props;
  return (
    <div className="App">
      <a href={appStoreUrl} title={name}>
        <img src={appStoreBadge} alt="Download on the App Store" />
      </a>
      <a href={googlePlayUrl} title={name}>
        <img src={googlePlayBadge} alt="Get it on Google Play" />
      </a>
    </div>
  );
}

export default Widget;
