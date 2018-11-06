import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"

class PageOne extends Component {
  goToPgeTwo = () => {
    this.props.navigator.push({
      screen: "example.PageTwo", // unique ID registered with Navigation.registerScreen
      title: "Page two lah", // navigation bar title of the pushed screen (optional)
      //   subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
      //   titleImage: require("../../img/my_image.png"), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
      //   passProps: {}, // Object that will be passed as props to the pushed screen (optional)
      animated: true // does the push have transition animation or does it happen immediately (optional)
      //   animationType: "slide-horizontal" // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
      //   backButtonTitle: undefined, // override the back button title (optional)
      //   backButtonHidden: false, // hide the back button altogether (optional)
      //   navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
      //   navigatorButtons: {}, // override the nav buttons for the pushed screen (optional)
      //   // enable peek and pop - commited screen will have `isPreview` prop set as true.
      //   previewView: undefined, // react ref or node id (optional)
      //   previewHeight: undefined, // set preview height, defaults to full height (optional)
      //   previewCommit: true, // commit to push preview controller to the navigation stack (optional)
      //   previewActions: [
      //     {
      //       // action presses can be detected with the `PreviewActionPress` event on the commited screen.
      //       id: "", // action id (required)
      //       title: "", // action title (required)
      //       style: undefined, // 'selected' or 'destructive' (optional)
      //       actions: [] // list of sub-actions
      //     }
      //   ]
    })
  }

  goToPgeThree = () => {
    this.props.navigator.push({
      screen: "example.PageThree", // unique ID registered with Navigation.registerScreen
      title: "Page Three lah", // navigation bar title of the pushed screen (optional)
      //   subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
      //   titleImage: require("../../img/my_image.png"), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
      //   passProps: {}, // Object that will be passed as props to the pushed screen (optional)
      animated: true // does the push have transition animation or does it happen immediately (optional)
      //   animationType: "slide-horizontal" // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
      //   backButtonTitle: undefined, // override the back button title (optional)
      //   backButtonHidden: false, // hide the back button altogether (optional)
      //   navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
      //   navigatorButtons: {}, // override the nav buttons for the pushed screen (optional)
      //   // enable peek and pop - commited screen will have `isPreview` prop set as true.
      //   previewView: undefined, // react ref or node id (optional)
      //   previewHeight: undefined, // set preview height, defaults to full height (optional)
      //   previewCommit: true, // commit to push preview controller to the navigation stack (optional)
      //   previewActions: [
      //     {
      //       // action presses can be detected with the `PreviewActionPress` event on the commited screen.
      //       id: "", // action id (required)
      //       title: "", // action title (required)
      //       style: undefined, // 'selected' or 'destructive' (optional)
      //       actions: [] // list of sub-actions
      //     }
      //   ]
    })
  }

  render() {
    return (
      <View>
        <Text>This is page one</Text>
        <TouchableOpacity onPress={() => this.goToPgeTwo()}>
          <Text>Go to page two</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goToPgeThree()}>
          <Text>Go to page three</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default PageOne
