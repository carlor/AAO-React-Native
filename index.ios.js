import {AppRegistry} from 'react-native'
import App from './app'
import OneSignal from 'react-native-onesignal'
AppRegistry.registerComponent('AllAboutOlaf', () => App)

let pendingNotifications = [];
// var _navigator; // If applicable, declare a variable for accessing your navigator object to handle payload.
// function handleNotification (notification) { // If you want to handle the notifiaction with a payload.
    // _navigator.to('main.post', notification.data.title, {
    //  article: {
    //    title: notification.data.title,
    //    link: notification.data.url,
    //    action: notification.data.actionSelected
    //  }
    //});
// }

OneSignal.configure({
    onIdsAvailable: function(device) {
        console.log('UserId = ', device.userId);
        console.log('PushToken = ', device.pushToken);
    },
  onNotificationOpened: function(message, data, isActive) {
      var notification = {message: message, data: data, isActive: isActive};
      console.log('NOTIFICATION OPENED: ', notification);
      //if (!_navigator) { // Check if there is a navigator object. If not, waiting with the notification.
      //    console.log('Navigator is null, adding notification to pending list...');
          pendingNotifications.push(notification);
      //    return;
      // }
      handleNotification(notification);
  }
})
