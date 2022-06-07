import React from 'react';
import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Chat from '../components/ChatList';
import { data } from '../data/colors';

const ListScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.text}>
					Swaraj Saxena
				</Text>
				<Pressable
					onPress={() => console.log('hello')}>
					<Image
						source={require('../assets/avatar.jpg')}
						style={styles.image}
					/>
				</Pressable>
			</View>
			<View style={styles.listScreen}>
				{/* {[Array(10)].map(() => (
					))} */}
				<Chat />
				<Chat />
				<Chat />
				<Chat />
				<Chat />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	header: {
		padding: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	listScreen: {
		backgroundColor: data.backgroundSecondary,
		flex: 1,
		width: '100%',
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		padding: 20,
		shadowColor: data.text,
		shadowOffset: { width: 0, height: -10 },
		shadowOpacity: 0.1,
		shadowRadius: 40,
	},
	image: {
		width: 40,
		height: 40,
		borderRadius: 400,
		borderColor: data.text,
		borderWidth: 2,
	},
	text: {
		color: 'hsl(214, 87%, 25%)',
		fontSize: 24,
	},
});

export default ListScreen;
