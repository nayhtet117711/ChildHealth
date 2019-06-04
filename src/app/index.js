import { Navigation } from "react-native-navigation";

import { initScreens } from "../screens";
import { setStartRoot, setHomeRoot } from "../navigation/navigations";

initScreens();
Navigation.events().registerAppLaunchedListener(() => {
	setStartRoot()
});