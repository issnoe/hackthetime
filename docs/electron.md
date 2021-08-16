# Electron 

I am folowing this documentation 
https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3
```javascript
/* Step1 */
npm install electron electron-builder wait-on concurrently --dev
/* Step 2 */
npm install electron-is-dev --save
/* Step 3 */
view rawelectron.js hosted with ❤ by GitHub
/* Step 4 */
"main": "public/electron.js"
/* Step 5 */
"main": "public/electron.js",
"e:dev": "concurrently \"BROWSER=none npm start\" \"wait-on http://localhost:3000 && electron .\""
/* Step 6 */
"build": {
  "appId": "com.example.electron-cra",
  "files": [
    "build/**/*",
    "node_modules/**/*"
  ],
  "directories":{
    "buildResources": "assets"
  }
}
/* Step 7 */
/* Step 8 */

```

 /*  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "e:build": "build --em.main=build/electron.js",
    "preelectron-pack": "npm build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "e:dev": "concurrently \"BROWSER=none npm start\" \"wait-on http://localhost:3000 && electron .\""
  }, */
