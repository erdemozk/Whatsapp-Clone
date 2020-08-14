import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';


const K = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 };
const resim = { width: '100%', height: '100%' };

export default props => (
	<View style={[K, { backgroundColor: props.arkaplan }]}>
		<FastImage
			source={props.source}
			style={[resim, { opacity: props.opacity }]}
			resizeMode={'cover'}
		/>
	</View>
);