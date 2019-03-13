# Boiler plate for the react native development # 

*It is ejected application and is not using expo* 


### instructions ### 
1. npm start
2. npm run android / npm run ios 
3. Android Emulator :- Click on it and press CTRL+M and click on ```live Reload```
4. It is recommended to have react-native cli install on your system if not then please type  ```npm install -g react-native-cli``` . 

## Real Device testing ##
You will get error for "Unable to load script assets "index.android.bundle" bla bla  so please 
Follow this

Go to your project directory and check if this folder exists android/app/src/main/assets
1. If it exists then delete two files viz index.android.bundle and index.android.bundle.meta
2. If the folder assets doesn't exist then create the assets directory there.
From your root project directory do
cd android && ./gradlew clean
Finally, navigate back to the root directory and check if there is one single entry file called index.js
1. If there is only one file i.e. index.js then run following command
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
2. If there are two files i.e index.android.js and index.ios.js then run this
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res


*Now run react-native run-android*

