import { DefaultTheme } from '@react-navigation/native'

export const navTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#eeeeee'
	}
}
const white = 'white'
const Color = {
	primary: '#d7ca55',
	secondary: '#d7ca55',
	whiteBackground: white,
	backgroundColor: '#eeeeee',
	whiteText: white,
	error: '#eb5b5b',
	success: '#4a934a',
	warning: '#d7ca55',
	text: '#000',
	textGrey: '#616161',
	placeholder: '#9e9e9e',
	inputSelected: '#ffffffcc',
	tapButtonBackground: '#1d1a01',
	blur: '#00000099'
}

export default Color
