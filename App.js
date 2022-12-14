import { useFonts } from "expo-font";
import { LogBox } from "react-native-web";
import Route from "./routing/route";
import { Provider } from "react-redux";
import { store } from "./store/store";
LogBox.ignoreAllLogs();

export default function App() {
  const [loaded] = useFonts({
    K2D: require("./assets/fonts/K2D-Regular.ttf"),
    boldK2D: require("./assets/fonts/K2D-Bold.ttf"),
    semiBoldK2D: require("./assets/fonts/K2D-SemiBold.ttf"),
    lightK2D: require("./assets/fonts/K2D-Light.ttf"),
    CountdownMontserrat: require("./assets/fonts/MontserratAlternates-Regular_102b5e5e57350b70cf32b2e0ae408a53.ttf"),
  });

  if (!loaded) {
    return null;
  }

  // return the logged out screens
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
