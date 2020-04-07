
<div align="center">

  ### React Native App with a robust structure from scratch.

</div>

## What's that about?

This skeleton was built with productivity in mind. After at least 4 projects using the same structure, it starts making sense to have a robust boilerplate that you can start shipping features in small amount of time. You don't want to see yourself spending one or two days to setup initial files, tests etc.

_We currently support only Reactjs_

### Codebase

#### Technologies
* React Native 0.61
* UI Kitten Design System
* Reactjs (with Hooks)
* Redux
* Redux-observables (Rxjs)
* Jest
* Axios

#### Folder structure

```sh
src/
├── client       # All http clients, following Base Http file that also uses Axios library for http calls
├── components   # UI Components following Internal Design System
├── interface    # All interfaces that can be shared between other files
├── screens      # Main file for each Page i.e Home, Details
├── store        # State management files, usually 1 folder per context, containing reducers, epics, actions, types
├── utils        # Redux utilities, config utilities, numbers ....
```

### First time setup

```sh
npm i
```

The project was started with Expo, and on top of it, I added some skeleton with production environment in mind. First step to run your web app is making sure you have a valid `public/index.html`
The default value in this file is `theiconicapp`, but you should rename it to what suits your app better.

* Change /public/index.html and replace `theiconicapp` by your correct app name.
* Change /src/utils/config.ts and replace `theiconicapp` by your correct app name.
* Change /src/module/Modal.tsx and replace `theiconicapp` by your correct app name.

### Running the app locally

#### Develop the web UI

`npm run dev`

Node is a great choice for building command line tools.
In this tutorial, James Hibbard and Lukas White show you how to build a Node CLI which interacts with the GitHub API.

Article URL: https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/

## Requirements

* [Node.js](http://nodejs.org/)
* [Git](https://git-scm.com/)
* [GitHub account](https://github.com/)

## Installation Steps (if applicable)

1. Clone repo
2. Run `npm install`
3. Install the module globally with `npm install -g` from within the project directory
4. Run `ginit`

## License

The MIT License (MIT)

Copyright (c) 2020 Victor Kurauchci

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
