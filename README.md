
<div align="center">

  ### React Native App with a robust structure from scratch.

</div>

## What's that about?

This skeleton was built with productivity in mind. After at least 4 projects using the same structure, it starts making sense to have a robust boilerplate that you can start shipping features in small amount of time. You don't want to see yourself spending one or two days to setup initial files, tests etc.

_We currently support only Reactjs_

## Codebase

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
## Requirements

* [Expo](https://expo.io/)
* [React Native](https://github.com/facebook/react-native)
* [Node.js](http://nodejs.org/)
* [Git](https://git-scm.com/)
* [GitHub account](https://github.com/)

### First time setup

The project was started with Expo, and on top of it, I added some skeleton with production environment in mind.
In order to have the App running, please make sure you have Android/iOS environment setup.

<details>
<summary>Android environment Setup</summary>
  
1. Download and install Java [(preferably Java 8)](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
2. Download [Android Studio](https://developer.android.com/studio)
3. Follow the set up prompts and select the following components when prompted at the SDK Manager step:

* Build Tools: 28.0.2
* SDK: 16 & 27
* NDK

3. Create virtual device for local execution. Run ` adb devices` to list available devices
4. Import the project into Android Studio using the `Existing project in filesystem` option and select the `android` directory in the project root
5. Let Android Studio parse the build scripts and pull in required dependencies (this might take a while for the first build)

NOTE: To use platform tools like `adb` on the command line you will need to add `$ANDROID_HOME/platform-tools` to the `$PATH`. `$ANDROID_HOME` is the root of your android sdk installation which might also require manually setting in your shell rc files ie (`.bashrc`, `.zshrc`).
</details>

<details>
<summary>Application Local Setup</summary>
  
1. Clone the repo
2. `npm install`
3. Make sure a device is available with `adb devices`
4. Go to `/android` and edit the following files
    1. Execute `cp release-keystore.properties.dist release-keystore.properties` and replace the local variables
    2. Replace `local.properties` file content paths with your user
5. `npm run android`
</details>

## Running the App

After having properly configured the Android/iOS environment, you can:

`npm start --reset-cache`
`npm run android`

## License

The MIT License (MIT)

Copyright (c) 2020 Victor Kurauchci

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
