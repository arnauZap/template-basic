import { ViewStyle } from 'react-native'
import Color from '../constants/Color'

const styles = {
	text: ({ color }) => ({ color, fontSize: 12 }),
	icon: { height: 24, width: 24 },
	topTabIndicator: {
		position: 'absolute',
		top: 0,
		left: 42,
		width: 18,
		height: 7,
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
		alignSelf: 'center',
		// height: 0, // Esto elimina la barra indicadora para versiones antiguas
		backgroundColor: Color.primary
	} as ViewStyle
}

export default styles
