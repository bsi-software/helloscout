# helloscout

This repository contains 2 Scout applications doing the same thing: demonstrating a simple, client only Scout Hello World application. The only difference is that one is written with Java (Scout Classic) and one with JavaScript (Scout JS).

## Prerequisites
* You need Java (>=11): https://jdk.java.net/11/
* You need Node JS (>=18.12.1): https://nodejs.org/
* You need pnpm: npm install -g pnpm (you could also use npm but this guide is based on pnpm).

## Launch
First, choose your IDE (Eclipse or IntelliJ Ultimate / Webstorm), clone the repository and import the modules into your IDE.

In order to launch the applications, you should know, what's going on:
* The Java part uses Maven, importing the projects into your IDE should trigger a Maven build which builds the Java classes.
* The JavaScript part uses Node JS, calling `pnpm install` will download all the necessary JS dependencies. In order to create the JS and CSS bundles an npm task needs to be executed: `npm run build:dev:watch` (it also starts a watcher to trigger a rebuild whenever JS or CSS code changes).
* To serve the web resources to your browser a web server needs to be started.

The actual launching now depends on your chosen IDE.

### IntelliJ
There are two compounds available which run `pnpm install`, `npm run build:dev:watch` and `org.eclipse.scout.dev.jetty.JettyServer`.

So you only need to start one of the compounds and open the application in the browser, check the console output for the URLs.

* **Hello Java App**: \[hellojava\] ui & watcher
* **Hello JS App**: \[hellojs\] ui & watcher

### Eclipse
Before starting one of the launch files which start the web server, you need to run `pnpm install` in the root of the repository and then `npm run build:dev:watch` either in `org.eclipse.scout.hellojava.ui.html.app` or `org.eclipse.scout.hellojs.ui.html.app`.
When the commands succeed you can start the web server and open the application in the browser, check the console output for the URLs.


* **Hello Java App**: org.eclipse.scout.hellojava.ui.html.app.dev/[org.eclipse.scout.hellojava] dev ui.launch
* **Hello JS App**: org.eclipse.scout.hellojs.ui.html.app.dev/[org.eclipse.scout.hellojs] dev ui.launch

## Further Information
You will find more information about Eclipse Scout on our GitHub Page: https://eclipsescout.github.io/.
