import { Navigation } from "react-native-navigation";
import { screen } from "../screens/index"

export const setStartRoot = () => {
	Navigation.setRoot({
		root: {
			component: {
				name: screen.START_SCREEN.pathname
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
					stack: {
						options: {},
						children: [{}]
					},
					bottomTabs: {
						options: {
							bottomTabs: {
								backgroundColor: "#fefefe",
								animate: true,
								drawBehind: true
							}
						},
						children : [
							{
								stack: {
									children: [
										{
											component: {
												name: screen.HOSPITAL_SCREEN.pathname,	
											},
										}
									],
									options: {
										topBar: {
											title: {
												text: screen.HOSPITAL_SCREEN.title,
												color: "#ccdde5",
											},
											background: {
												color: "#131519"
											},
										},
										bottomTab : {
											//iconColor: "#ffffff00",
											// selectedIcon: require("../assets/icons/hospital.png"),
											icon: require("../assets/icons/hospital.png"),
										},
										
									}
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
														icon: require("../assets/icons/doctor.png"),
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
														icon: require("../assets/icons/search-system.png")
													},
												}
											},
										}
									]
								}
							}
						]
					
				}
				}
			},
		}
	})
}

export const navigateScreen3ToSetting1 = ({componentId}) => {
	Navigation.push(componentId, {
		component: {
			name: screen.SETTING_1,
			options : {
				bottomTab : {
					icon: require("../assets/icons/adjustment.png")
				},
				topBar: {
					title: {
						text: "Setting One",
						color: "#ccdde5",
					},
					background: {
						color: "#131519"
					},
					backButton: {
						icon: require("../assets/icons/left-arrow.png"),
						visible: true,
						
					},
				},
			}
		}
	})
}