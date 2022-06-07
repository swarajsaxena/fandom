import React from 'react';
import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { data } from '../data/colors';

const Chat = () => {
	return (
		<View style={styles.container}>
			<Pressable>
				<View style={styles.imageContainer}>
					<Image
						source={require('../assets/avatar.jpg')}
						style={styles.image}
					/>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		margin: 10,
		marginLeft: 0,
		marginRight: 0,
	},
	imageContainer: {
		borderColor: data.text,
		borderWidth: 2,
		display: 'flex',
		flex: 1,
		width: 52,
		height: 52,
		borderRadius: 400,
		padding: 4,
	},
	image: {
		width: 40,
		height: 40,
		borderRadius: 400,
	},
});

export default Chat;
