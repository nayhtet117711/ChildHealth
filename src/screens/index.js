import { Navigation } from "react-native-navigation";
import StartScreen from "./StartScreen";
import { 
    Setting1,
    SideMenu,  } from './Screens'
import HospitalScreen from './HospitalScreen'
import DoctorScreen from './DoctorScreen'
import ExpertSystemScreen from './ExpertSystemScreen'
import HeaderOne from '../app/components/HeaderOne'

const screen = {
    START_SCREEN : { 
        pathname: "navigation.start_screen",
        title: "Loading"    
    },
    HOSPITAL_SCREEN : {
        pathname: "navigation.hospital_screen",
        title: "Hospitals"
    },
    DOCTOR_SCREEN : {
        pathname: "navigation.doctor_screen",
        title: "Doctors"
    },
    EXPERT_SYSTEM_SCREEN : {
        pathname: "navigation.expert_system_screen",
        title: "Expert System"
    },
    HEADER_1 : {
        pathname: "navigation.header_1",
        
    },
    SETTING_1 : {
        pathname: "navigation.setting_1",
        title: "Setting"
    },
    SIDE_MENU : {
        pathname: "navigation.side_menu",
        title: "Side Menu"
    },
}
const initScreens = () => {
    Navigation.registerComponent(screen.START_SCREEN.pathname,           () => StartScreen);
    Navigation.registerComponent(screen.HOSPITAL_SCREEN.pathname,        () => HospitalScreen);
    Navigation.registerComponent(screen.DOCTOR_SCREEN.pathname,          () => DoctorScreen);
    Navigation.registerComponent(screen.EXPERT_SYSTEM_SCREEN.pathname,   () => ExpertSystemScreen);
    Navigation.registerComponent(screen.HEADER_1.pathname,               () => HeaderOne);
    Navigation.registerComponent(screen.SIDE_MENU.pathname,              () => SideMenu);
    Navigation.registerComponent(screen.SETTING_1.pathname,              () => Setting1);
}

export { screen, initScreens }