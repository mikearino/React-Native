import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import HeaderScreen from "./src/screens/HeaderScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: HeaderScreen
  },
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
