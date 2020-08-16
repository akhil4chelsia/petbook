# petbook
A sample react + ionic(capacitor) mobile app 

![](/screenshots/image1.png)
![](/screenshots/image2.png)

Steps to convert ReactJS app to Mobile app (Android and iOS)

Requirements
Existing React App
Ionic
Android Studio
Xcode

First, go to the root of your existing react app and create a file capacitor.config.json and inside that put the below code.

```
{
  "appId": "io.ionic.nameofyourapp",
  "appName": "nameofyourapp",
  "bundledWebRuntime": false,
  "npmClient": "npm",
  "webDir": "build",
  "cordova": {}
}
```

2. Now create another file name ionic.config.json and inside that insert the below code.
```
{
  "name": "nameofyourapp",
  "integrations": {
    "capacitor": {}
  },
  "type": "react"
}
```

Note: replace nameofyourapp in both files with the name of your app.

3. Now we need to build our react project. To build your react app open your terminal to the root of the project and run the below-mentioned command
npm run build
Note: this will create the build folder in your root porject and the name of the folder should match the webDir name inside capacitor.config.json file


4. Now we will install ionic globally in our machine. To install ionic globally in your machine open your terminal and run the below command.
`npm install -g @ionic/cli`

5. Now install the capacitor core in our project.
`npm install @capacitor/core --save`

Android

6. After that, we will first create an android app with our existing react app. Open your terminal and type

`ionic capacitor add android`

This will create the android folder in your root project and install all the required dependencies.

7. Now run the below command to open your android project in android studio.

`npx cap open android`

Wait some time and then it will ask you to update the Gradle. Just update the Gradle to the latest version and run the project in the emulator. You can also connect your mobile to run the project live on your mobile phone.
Image for post

8. Now open the build menu from the android studio and build your apk file.
iOS

9. To create ios app run the below command

`ionic capacitor add ios`

This will install all the required dependencies and ios folder to your project.
10. Now run the below command to open your ios project in Xcode.

`npx cap open ios`
