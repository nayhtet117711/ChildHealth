import { Navigation } from "react-native-navigation";
import { screen } from "../screens/index"

export const setStartRoot = () => {
	Navigation.setRoot({
		root: {
			component: {
				name: screen.START_SCREEN.pathname,
			}
		}
	});
}

export const setHomeRoot = () => {
	Navigation.setRoot({
		root: {
			sideMenu: {
				left: {
					component: {
						name: screen.SIDE_MENU.pathname, //"navigation.side_menu",
						passProps: {
							text: "Left Side Menu"
						}
					}
				},
				center: {
					// stack: {
					// 	options: {
					// 		topBar: {
								
					// 		}
					// 	},
					// 	children: [{}]
					// },
					bottomTabs: {
						options: {
							bottomTabs: {
								visible: true,
								backgroundColor: "#fefefef5",
								animate: true,
								drawBehind: true,
								// titleDisplayMode: "showWhenActive",
								elevation: 24,
								// tabsAttachMode: "onSwitchToTab",
								// translucent: false,
							}, 	
							layout: {
								backgroundColor: "#dae2e5"
							}						
						},
						children : [
							{
								stack: {
									children: [
										{
											component: {
												name: screen.HOSPITAL_SCREEN.pathname,
												options: {
													topBar: {
														title: {
															text: screen.HOSPITAL_SCREEN.title,
															color: "#fffffa",
														},
														background: {
															color: "#4564a5"
														},
														drawBehind: true,
														hideOnScroll: true,
														visible: true,
														animate: true,
													},
													bottomTab : {
														text: screen.HOSPITAL_SCREEN.bottomText,
														textColor: "#adadad",
														selectedTextColor: "#5598cd",											
														icon: require("../assets/icons/hospital.png"),
														selectedIcon: require("../assets/icons/hospital.png"),
													},													
												}
											},
										}
									],
								}
							},
							{
								stack: {
									children: [
										{
											component: {
												name: screen.DOCTOR_SCREEN.pathname,
												options : {
													topBar: {
														title: {
															text: screen.DOCTOR_SCREEN.title,
															color: "#ccdde5",
														},
														background: {
															color: "#131519"
														},
														
													},
													bottomTab : {
														text: screen.DOCTOR_SCREEN.bottomText,
														textColor: "#adadad",
														selectedTextColor: "#5598cd",
														icon: require("../assets/icons/doctor.png"),
														selectedIcon: require("../assets/icons/doctor.png"),	
														disableIconTint: false,
														disableSelectedIconTint: false,								
													}
												}
											}
										}
									],
								}
							},
							{
								stack: {
									children: [
										{
											component: {
												name: screen.EXPERT_SYSTEM_SCREEN.pathname,
												options : {
													topBar: {
														title: {
															text: screen.EXPERT_SYSTEM_SCREEN.title,
															color: "#ccdde5",
														},
														background: {
															color: "#131519"
														},
													},
													bottomTab : {
														text: screen.EXPERT_SYSTEM_SCREEN.bottomText,
														textColor: "#adadad",
														selectedTextColor: "#5598cd",
														icon: require("../assets/icons/search_system.png"),
														selectedIcon: require("../assets/icons/search_system.png")
													},
												}
											},
										}
									],
								}
							}
						]
					
				}
				}
			},
		},

	})
}

export const navigateScreen3ToSetting1 = ({componentId}) => {
	Navigation.push(componentId, {
		component: {
			name: screen.SETTING_1,
			options : {
				bottomTab : {
					icon: require("../assets/icons/hospital.png")
				},
				topBar: {
					visible: false,
					title: {
						text: "Setting One",
						color: "#ccdde5",
					},
					background: {
						color: "#131519"
					},
					backButton: {
						icon: require("../assets/icons/left_arrow.png"),
						visible: true,
						
					},
				},
			}
		}
	})
}