# store-badge

![npm](https://img.shields.io/npm/v/store-badge)
![npm bundle size](https://img.shields.io/bundlephobia/min/store-badge)
![GitHub](https://img.shields.io/github/license/apuyou/store-badge)
![npm](https://img.shields.io/npm/dt/store-badge)
[![](https://data.jsdelivr.com/v1/package/npm/store-badge/badge)](https://www.jsdelivr.com/package/npm/store-badge)

## Introduction

Display App Store and/or Google Play badges on your website based on the browser.

If the browser is an iPhone or iPad, only the App Store badge will be displayed. If the browser is running on Android, only the Google Play badge will be displayed. In all other cases, both badges are shown.

## Integration

```html
<p>Download Cheerswipe now!</p>
<div
  class="store-badge"
  data-name="Cheerswipe"
  data-google-play-url="https://play.google.com/store/apps/details?id=fr.puyou.cheerswipe"
  data-app-store-url="https://apps.apple.com/us/app/cheerswipe/id1468158095?ls=1"
></div>
<script async src="https://cdn.jsdelivr.net/npm/store-badge/build/bundle.js"></script>
```

## Customization

If you wish to add some CSS to the badges, you can use the classes `store-badge-app-store` and `store-badge-google-play`.

Badges are SVG so you can scale them as needed.

## Legal

_Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc._

_Google Play and the Google Play logo are trademarks of Google LLC._
