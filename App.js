import { Platform } from "react-native"
import { Navigation } from "react-native-navigation"
import { registerScreens } from "./src/screens"

registerScreens()

// const tabs = [
//   {
//     label: "Navigation",
//     screen: "example.App",
//     icon: require("./transform.png"),
//     title: "Navigation Types"
//   }
// ]

// if (Platform.OS === "android") {
//   tabs.push({
//     label: "Transition",
//     screen: "example.App",
//     icon: require("./transform.png"),
//     title: "No Way!"
//   })
// }

// // this will start our app
// Navigation.startTabBasedApp({
//   tabs,
//   animationType: Platform.OS === "ios" ? "slide-down" : "fade",
//   tabsStyle: {
//     tabBarBackgroundColor: "#003a66",
//     tabBarButtonColor: "#ffffff",
//     tabBarSelectedButtonColor: "#ff505c",
//     tabFontFamily: "BioRhyme-Bold"
//   },
//   appStyle: {
//     tabBarBackgroundColor: "#003a66",
//     navBarButtonColor: "#ffffff",
//     tabBarButtonColor: "#ffffff",
//     navBarTextColor: "#ffffff",
//     tabBarSelectedButtonColor: "#ff505c",
//     navigationBarColor: "#003a66",
//     navBarBackgroundColor: "#003a66",
//     statusBarColor: "#002b4c",
//     tabFontFamily: "BioRhyme-Bold"
//   }
// })

const navigatorStyle = {
  navBarTextColor: "white", // change the text color of the title (remembered across pushes)
  navBarBackgroundColor: "black", // change the background color of the nav bar (remembered across pushes)
  navBarButtonColor: "red", // change the button colors of the nav bar (eg. the back button) (remembered across pushes)
  navBarHidden: false // make the nav bar hidden
}
Navigation.startSingleScreenApp({
  screen: {
    screen: "example.PageOne",
    title: "Home One lah",
    navigatorStyle
  }
  // drawer: {
  //   left: {
  //     screen: "app.Drawer"
  //   }
  // }
})
