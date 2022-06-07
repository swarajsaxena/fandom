import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { data } from './data/colors';
import ListScreen from './screens/ListScreen';

export default function App() {
	return (
		<View style={styles.container}>
			<ListScreen />
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: data.backgroundPrimary,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
