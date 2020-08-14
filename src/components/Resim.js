import React from 'react';
import { Image, View } from 'react-native';
import FastImage from 'react-native-fast-image';

class Resim extends React.Component {
	state = { boyut: null, source: null };

	UNSAFE_componentWillMount() { this.hesapla(); }
	UNSAFE_componentWillReceiveProps() { this.guncelle = true; }
	componentDidUpdate() { if (this.guncelle) this.hesapla(); }

	hesapla = () => {
		if (typeof this.props.source === 'object') Image.getSize(this.props.source.uri, (width, height) => this.oranla({ width, height }));
		else this.oranla(Image.resolveAssetSource(this.props.source));
	}

	oranla = ({ width, height }) => {
		const oran = width / height;

		let w = this.props.width;
		let h = this.props.height;

		if (w && !h) h = w * (1 / oran);
		else if (!w && h) w = h * oran;
		else if (!w && !h) { w = 100; h = 100; }

		this.setState({ boyut: { width: w, height: h } });
		this.guncelle = false;
	}

	render() {
		if (!this.state.boyut) return null;

		return (
			<>
				<FastImage
					source={this.props.source}
					style={[this.state.boyut, this.props.style]}
					resizeMode={this.props.resizeMode}
				/>

				{
					this.props.arkaplan &&
					<View
						style={{
							...this.state.boyut,
							position: 'absolute',
							backgroundColor: this.props.arkaplanRenk || '#00000088',
							borderRadius: this.props.arkaplanRadius || 10
						}}
					/>
				}
			</>
		);
	}
}

export default Resim;
