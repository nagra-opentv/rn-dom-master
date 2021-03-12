# React Native DOM &middot; [![CircleCI](https://circleci.com/gh/vincentriemer/react-native-dom.svg?style=shield&circle-token=96448c580730a065cb93c0a10af0f85f6c954166)](https://circleci.com/gh/vincentriemer/react-native-dom) [![npm version](https://badge.fury.io/js/react-native-dom.svg)](https://badge.fury.io/js/react-native-dom) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![All Contributors](https://img.shields.io/badge/all_contributors-11-orange.svg?style=flat-square)](#contributors)

An experimental, comprehensive port of React Native to the web.

- **Multithreaded by default:** Following the exact same architecture as React
  Native on mobile, all of your react components/app logic are run in web
  worker, leaving the main thread to entirely focus on rendering.
- **Same layout behavior as React Native on mobile:** Powered by custom bindings
  to Yoga and compiled to WebAssembly, avoid layout inconsistencies between your
  native and web projects.
- **Built with the same bundler used for existing React Native platforms:**
  Build both the "native" main and JS threads with the Metro Bundler along with
  all the developer experience features it provides.
- **Ecosystem compatible escape hatch to the DOM:** Using the same native module
  bridge, expose DOM-specific APIs in a more generic way that can easily be made
  into a cross-platform module.

To see it in action, check out these live demos: (TODO: demos are not updated
with latest bundles)

- [Movies Demo](https://rndom-movie-demo.now.sh)
- [RNTester (component playground used for manual testing)](https://rntester.now.sh)
- [Expanding Grid Item Demo](https://github.com/vincentriemer/rndom-expanding-grid-item-demo)

---

## Why?

For the best introduction to this project, check out
[my talk at React Europe 2018](https://youtu.be/aOWIJ4Mgb2k) introducing it.

---

## **WARNING**

This project is in experimental stage and many aspects of it are subject to
breaking changes, continue at your own risk.

please note: current version of react-native-dom is compatible only with
~0.62.\* of react-native.

## ex : react-native init [project name] --version 0.62.2

## Getting Started

Getting your React Native project configured to use `react-native-dom` is a lot
like the process for other 3rd party platforms such as `react-native-windows`.

If you're starting a new project from scratch: ensure you have the react-native
CLI installed globally.

```
npm install -g react-native-cli
# or
yarn global add react-native-cli
```

Next, initialize your React Native project.

```
react-native init [project name] --version 0.62.2
```

Next, Install react-native-dom-init CLI Globally

```
npm install -g react-native-dom-init
# or
yarn global add react-native-dom-init
```

Then, `cd` into your project and run command `react-native-dom-init` after which
react-native project will be initialized to react-native-dom

To run your initialized project in your browser, you can either:

- Start the packager yourself using `react-native start` and navigate open your
  browser to `localhost:8081/dom`
- Leverage the built-in react-native cli command `react-native run-dom` which
  will start the packager and open the browser to the correct URL for you

**NOTE:** After setting up the DOM platform you may need to run
`react-native start` with the `--reset-cache` flag at least once if you recieve
an error message like `Unable to resolve module AccessibilityInfo`.

### Overview of files generated by the react-native-dom-init cli

- `dom/bootstrap.js` - Entry point to the main thread bundle where you can set
  runtime configuration options, register custom native modules, or any other JS
  initialization you would like to do.
- `dom/entry.js` - Entry point to the JS thread bundle, will likely only be
  importing your App's entry point from the top-level folder of your project.
- `dom/index.html` - HTML file which is what references and loads the JS
  bundles.

---

## React Developer Tools

You can use
[the standalone version of React Developer Tools](https://github.com/facebook/react-devtools/tree/master/packages/react-devtools)
to debug the React component hierarchy. To use it, install the react-devtools
package globally:

```
npm install -g react-devtools
```

Now run react-devtools from the terminal to launch the standalone DevTools app:

```
react-devtools
```

In order to activate the connection with the devtools app add '?devtools' to the
end of your development url (e.g. localhost:8081/dom?devtools)

## Building for Production

A built-in script for performing a production build is implemented and can be
invoked using

```
npm buildDom
or
yarn buildDom
```

The resulting folder in `dom/dist` will contain static HTML & JS ready to be
deployed to your hosting provider of choice.

---

## Writing Native Modules/Views

### _Work In Progress_

The API for this is going to be overhauled soon with accompanying documentation.
If you want to see what it currently looks like take a look at some of the built
in native modules such as
[AsyncLocalStorage](../master/packages/react-native-dom-renderer/ReactDom/modules/RCTAsyncLocalStorage.js)

---

## Repository Structure

This project is a workspaces managed monorepo with all the projects living in
the `packages` folder and Library in `react-native-dom` folder.

### Package Overview

- `react-native-dom` - The library itself (this is most likely the package
  you're interested in).
- `react-native-dom-cli` - CLI to build and run React Native for dom apps
- `react-native-dom-init` - CLI to bootstrap the addition of the dom platform to
  react-native projects
- `react-native-dom-renderer` - Browser Implementation of react-native-dom
  components
- `rndom-*` - Custom web components (built with
  [svelte](https://svelte.technology)) used for some of the built-in
  widgets/views in `react-native-dom`.

---

## Contributors

Thanks goes to these wonderful people
([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/1398555?v=4" width="100px;"/><br /><sub><b>Vincent Riemer</b></sub>](http://vincentriemer.com)<br />[💻](https://github.com/vincentriemer/react-native-dom/commits?author=vincentriemer "Code") [🐛](https://github.com/vincentriemer/react-native-dom/issues?q=author%3Avincentriemer "Bug reports") [📖](https://github.com/vincentriemer/react-native-dom/commits?author=vincentriemer "Documentation") [💡](#example-vincentriemer "Examples") [🤔](#ideas-vincentriemer "Ideas, Planning, & Feedback") [🚇](#infra-vincentriemer "Infrastructure (Hosting, Build-Tools, etc)") [📦](#platform-vincentriemer "Packaging/porting to new platform") [📢](#talk-vincentriemer "Talks") | [<img src="https://avatars0.githubusercontent.com/u/8888799?v=4" width="100px;"/><br /><sub><b>Joe Goodall</b></sub>](https://uk.linkedin.com/in/joegoodall)<br />[📖](https://github.com/vincentriemer/react-native-dom/commits?author=joegoodall1 "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/31624379?v=4" width="100px;"/><br /><sub><b>François Rosato</b></sub>](https://github.com/frosato-ekino)<br />[📖](https://github.com/vincentriemer/react-native-dom/commits?author=frosato-ekino "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/2246565?v=4" width="100px;"/><br /><sub><b>Moti Zilberman</b></sub>](https://github.com/motiz88)<br />[💻](https://github.com/vincentriemer/react-native-dom/commits?author=motiz88 "Code") [📖](https://github.com/vincentriemer/react-native-dom/commits?author=motiz88 "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/983071?v=4" width="100px;"/><br /><sub><b>thebetterjort</b></sub>](https://github.com/thebetterjort)<br />[📖](https://github.com/vincentriemer/react-native-dom/commits?author=thebetterjort "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/3089012?v=4" width="100px;"/><br /><sub><b>Bilo Lwabona</b></sub>](https://github.com/bilo-io)<br />[📖](https://github.com/vincentriemer/react-native-dom/commits?author=bilo-io "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/40002855?v=4" width="100px;"/><br /><sub><b>Madhav Varshney</b></sub>](https://github.com/madhavarshney)<br />[📖](https://github.com/vincentriemer/react-native-dom/commits?author=madhavarshney "Documentation") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars0.githubusercontent.com/u/1106239?v=4" width="100px;"/><br /><sub><b>Eric Rozell</b></sub>](https://github.com/rozele)<br />[💻](https://github.com/vincentriemer/react-native-dom/commits?author=rozele "Code") | [<img src="https://avatars0.githubusercontent.com/u/2847127?v=4" width="100px;"/><br /><sub><b>empyrical</b></sub>](https://twitter.com/empyrical)<br />[💻](https://github.com/vincentriemer/react-native-dom/commits?author=empyrical "Code") | [<img src="https://avatars.githubusercontent.com/u/40396240?v=4" width="100px;"/><br /><sub><b>anees ur rahiman</b></sub>](http://aneesrehman.herokuapp.com)<br />[💻](https://github.com/vincentriemer/react-native-dom/commits?author=arehman849 "Code") [📖](https://github.com/vincentriemer/react-native-dom/commits?author=arehman849 "Documentation") [🐛](https://github.com/vincentriemer/react-native-dom/issues?q=author%3Aarehman849 "Bug reports") [💡](#example-arehman849 "Examples") [🤔](#ideas-arehman849 "Ideas, Planning, & Feedback") [🚇](#infra-arehman849 "Infrastructure (Hosting, Build-Tools, etc)") [📦](#platform-arehman849 "Packaging/porting to new platform") | [<img src="https://avatars.githubusercontent.com/u/74712321?v=4" width="100px;"/><br /><sub><b>Harpreet Singh</b></sub>](http://www.nagra.com)<br />[💻](https://github.com/vincentriemer/react-native-dom/commits?author=hps1978 "Code") [📖](https://github.com/vincentriemer/react-native-dom/commits?author=hps1978 "Documentation") [🤔](#ideas-hps1978 "Ideas, Planning, & Feedback") |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!
