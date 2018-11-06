import { Navigation, ScreenVisibilityListener } from "react-native-navigation"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo"
import PageThree from "./PageThree"

export function registerScreens() {
  Navigation.registerComponent("example.PageOne", () => PageOne)
  Navigation.registerComponent("example.PageTwo", () => PageTwo)
  Navigation.registerComponent("example.PageThree", () => PageThree)
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    didAppear: ({ screen, startTime, endTime, commandType }) =>
      console.log(
        "screenVisibility",
        `Screen ${screen} displayed in ${endTime -
          startTime} millis [${commandType}]`
      ),
    willDisappear: ({ screen }) =>
      console.log(`Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`)
  }).register()
}
