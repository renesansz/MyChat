Ionic MyChat App
================

# What is Ionic?

Ionic is the open source HTML5 Mobile Framework for building amazing, cross-platform hybrid native apps with HTML, JavaScript, and CSS.

![Ionic GUI](http://ionicframework.com/img/gui_screen.jpg)

We built Ionic because we wanted a framework that focused on building hybrid native apps, rather than mobile websites. We wanted this framework to be obsessive about great design and performance. A framework that left the past behind and focused on the future where mobile devices could make HTML5 feel native.

It's important to realize that Ionic is not a replacement for frameworks used for building mobile web apps. There are a lot
of great solutions that work well for websites, like [jQuery Mobile](http://jquerymobile.com/).

Ionic is also not a good solution if you need to support older generation devices. Our compatibility *starts* at iOS 6 and Android 4.1. We will never support versions earlier than those. This is a framework for the future. Learn more: [Where does the Ionic Framework fit in?](http://ionicframework.com/blog/where-does-the-ionic-framework-fit-in/)

## Quick Start

To start using ionic, you have two options: copy over the built JS and CSS files, or
use the `ionic` tool ([ionic-cli](https://github.com/driftyco/ionic-cli)) which can be installed through npm: _(You may need to prefix the command with `sudo` depending on your OS and setup.)_

```bash
$ npm install -g ionic
```

Then, you can start a new ionic project by running:

```bash
$ ionic start myproject
```

### Manual Start

- Download the latest **stable** release from:
  * The `release` folder of this repository
  * Ionic CDN: [Latest Release](http://code.ionicframework.com/)
  * Using bower: `bower install ionic`
  * For [Meteor](https://www.meteor.com/) applications: `meteor add driftyco:ionic`
- Download the **bleeding edge just-from-master release** from:
  * Ionic CDN: [Nightly Build](http://code.ionicframework.com/#nightly)
  * Using bower: `bower install driftyco/ionic-bower#master`

Once you have a release, use `js/ionic.js`, `js/ionic-angular.js`, and `css/ionic.css`.

For most cases, you'll need AngularJS as well.  This is bundled in `js/angular/` and `js/angular-ui-router/`.
