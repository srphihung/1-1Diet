import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // The package name for Android and the bundle identifier for iOS.
  appId: 'com.diet.app',

      // Your app's name.
      appName: '1:1 Diet',

    // Sets the directory of your built web assets. This is the directory that will be
    // used to run your app in a native environment.
    webDir: 'build',

    // Whether to use capacitor.js as a bundle that is copied to your web code,
    // or require it to be bundled/imported through a typical
    // typescript/babel/webpack/rollup workflow.
    //
    // The starter project sets this to true, but if you're using Ionic or another framework,
    // you'll probably want this to be false (default is false)
    bundledWebRuntime: false,

    // A Boolean value that determines whether to hide native logs for iOS and Android. The preference is ignored if it's also declared inside ios or android
    // Default is false
    hideLogs: true,

    // Server object contains port and url configurations
    server: {
  // You can make the app to load an external url (i.e. to live reload)
  url: 'http://localhost:8100',
      // You can configure the local hostname, but it's recommended to keep localhost
      // as it allows to run web APIs that require a secure context such as
      // navigator.geolocation and MediaDevices.getUserMedia.
      hostname: 'app',
      // It is possible to configure the local scheme that is used. This can be useful
      // when migrating from cordova-plugin-ionic-webview, where the default scheme on iOS is ionic.
      iosScheme: 'ionic',
      androidScheme: 'http',
      // Normally all external URLs are opened in the browser. By setting this option, you tell
      // Capacitor to open URLs belonging to these hosts inside its WebView.
      allowNavigation: ['example.org', '*.example.org', '192.0.2.1'],
},
  // User agent of Capacitor WebView for iOS and Android, unless also declared inside ios or android objects
  overrideUserAgent: 'my custom user agent',
      // String to append to the original user agent of Capacitor WebView for iOS and Android,
      // unless also declared inside ios or android objects. Only if overrideUserAgent is not set.
      appendUserAgent: 'string to append',
    // Background color of Capacitor WebView for both iOS and Android unless also declared inside ios or android objects
    backgroundColor: '#ffffff',
    android: {
  // User agent of Capacitor WebView for Android
  overrideUserAgent: 'my custom user agent for Android',
      // String to append to the original user agent of Capacitor WebView for Android.
      appendUserAgent: 'string to append for Android',
      // Background color of Capacitor WebView for Android only
      backgroundColor: '#ffffff',
      // On Android, if you are loading the app from a remote/testing server from https
      // protocol, you need to enable mixed content mode to allow the WebView to load
      // files from different schemes such as capacitor-content:// or capacitor-file://
      allowMixedContent: true,
      // Android's default keyboard doesn't allow proper JS key capture
      // You can use a simpler keyboard enabling this preference
      // Be aware that this keyboard has some problems and limitations
      captureInput: true,
      // Enables debugging of web contents (HTML / CSS / JavaScript) loaded into
      // any WebViews of this application.
      // This flag can be enabled in order to facilitate debugging of web layouts
      // and JavaScript code running inside WebViews.
      webContentsDebuggingEnabled: true,

      // A Boolean value that determines whether to hide native Android logs or not
      // Default is false
      hideLogs: true,
},
}

export default config;
