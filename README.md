# service-worker-sandbox

My service worker sandbox

## What is a Service Worker

> A service worker is a script that is run by your browser in the background, separate from a web page, opening the door to features which don't need a web page or user interaction. Today, they already include features like push notifications and in the future it will include other things like, background sync, or geofencing. The core feature discussed in this tutorial is the ability to intercept and handle network requests, including programmatically managing a cache of responses.
> 
> The reason this is such an exciting API is that it allows you to support offline experiences, giving developers complete control over what exactly that experience is. [HTML5 Rocks (2014)](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)

## Install

```
$ git clone https://github.com/dleitee/service-worker-sandbox.git
$ cd service-worker-sandbox
$ npm install
```

## Server Start 

```
$ node index.js
```

Open your browser and access: [http://localhost:3000](http://localhost:3000)

## Offline

If you use Chrome, open *ChromeDevTool -> Network* and change option *No Throttling* to *Offline* and **refresh page**.

If you use other browser, disconnect your server and **refresh page**.

## Push notifications

## Fallback Response

Open your browser and access: [http://localhost:3000/undefined-url](http://localhost:3000/undefined-url)

## Mock Response
