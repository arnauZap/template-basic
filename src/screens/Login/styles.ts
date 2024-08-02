import { StyleSheet } from 'react-native'
import Color from '../../constants/Color'
import FONT_FAMILY from '../../constants/FontFamily'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 64,
		fontFamily: FONT_FAMILY.principal,
		paddingHorizontal: 32,
		backgroundColor: Color.backgroundColor
	},
	hr: {
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		marginVertical: 16
	},
	title: {
		fontFamily: FONT_FAMILY.principal,
		fontSize: 24,
		fontStyle: 'normal',
		letterSpacing: 0,
		textAlign: 'left',
		marginBottom: -10
	},
	titleBold: {
		fontSize: 24,
		fontFamily: FONT_FAMILY.principal_bold,
		letterSpacing: 0,
		textAlign: 'left'
	},
	loginTitle: {
		fontSize: 18,
		fontFamily: FONT_FAMILY.principal_bold,
		textAlign: 'left'
	},
	loginSubtitle: {
		marginTop: 10,
		fontFamily: FONT_FAMILY.principal,
		color: '#616161'
	},
	enterButton: {
		marginTop: 24,
		fontFamily: FONT_FAMILY.principal
	},
	firstTime: {
		fontSize: 14,
		fontFamily: FONT_FAMILY.principal_bold
	},
	firstTimeSubtitle: {
		marginTop: 5,
		textAlign: 'left',
		fontFamily: FONT_FAMILY.principal,
		color: '#616161'
	},
	inputContainer: {
		fontFamily: FONT_FAMILY.principal
	},
	labelInput: {
		marginTop: 16,
		fontSize: 14,
		fontFamily: FONT_FAMILY.principal_bold
	}
})
export default styles
