import { h } from 'preact';

import appStoreBadge from './appstore.svg';
import googlePlayBadge from './googleplay.svg';

function Badge({ name, url, svg, alt, className }) {
  return (
    <a href={url} title={name} className={className}>
      <img src={svg} alt={alt} />
    </a>
  );
}

function Widget({ dataName, dataAppStoreUrl, dataGooglePlayUrl }) {
  const appStore = (
    <Badge
      name={dataName}
      url={dataAppStoreUrl}
      svg={appStoreBadge}
      alt="Download on the App Store"
      className="store-badge-app-store"
    />
  );

  const googlePlay = (
    <Badge
      name={dataName}
      url={dataGooglePlayUrl}
      svg={googlePlayBadge}
      alt="Get it on Google Play"
      className="store-badge-google-play"
    />
  );

  const badges = [];
  if (
    navigator.userAgent.indexOf('iPhone') !== -1 ||
    navigator.userAgent.indexOf('iPad') !== -1
  ) {
    badges.push(appStore);
  } else if (navigator.userAgent.indexOf('Android') !== -1) {
    badges.push(googlePlay);
  } else {
    badges.push(appStore);
    badges.push(googlePlay);
  }

  return <div>{badges}</div>;
}

export default Widget;
