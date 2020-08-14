import React, { Component } from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


class Ikon extends Component {
    render() {
        const style = [
            !this.props.golgeYok && {
                textShadowColor: 'rgba(0, 0, 0, 0.5)',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 5,
            },
            this.props.m && { transform: [{ rotateY: '180deg' }] },
            this.props.rotate && { transform: [{ rotate: `${this.props.rotate}deg` }] },
            this.props.rotateX && { transform: [{ rotateX: `${this.props.rotateX}deg` }] },
            this.props.rotateY && { transform: [{ rotateY: `${this.props.rotateY}deg` }] },
            this.props.style
        ];


        if (this.props.is === 'MaterialCommunityIcons') return <MaterialCommunityIcons name={this.props.i} size={this.props.s || 32} color={this.props.c || 'white'} style={style} />;
        else if (this.props.is === 'Ionicons') return <Ionicons name={this.props.i} size={this.props.s || 32} color={this.props.c || 'white'} style={style} />;
        else if (this.props.is === 'Foundation') return <Foundation name={this.props.i} size={this.props.s || 32} color={this.props.c || 'white'} style={style} />;
        else if (this.props.is === 'Fontisto') return <Fontisto name={this.props.i} size={this.props.s || 32} color={this.props.c || 'white'} style={style} />;
        else if (this.props.is === 'FontAwesome') return <FontAwesome name={this.props.i} size={this.props.s || 32} color={this.props.c || 'white'} style={style} />;
        else if (this.props.is === 'FontAwesome5') return <FontAwesome5 name={this.props.i} size={this.props.s || 32} color={this.props.c || 'white'} style={style} />;
        else if (this.props.is === 'MaterialIcons') return <MaterialIcons name={this.props.i} size={this.props.s || 32} color={this.props.c || 'white'} style={style} />;
        else if (this.props.is === 'Entypo') return <Entypo name={this.props.i} size={this.props.s || 32} color={this.props.c || 'white'} style={style} />;
        else if (this.props.is === 'AntDesign') return <AntDesign name={this.props.i} size={this.props.s || 32} color={this.props.c || 'white'} style={style} />;
        else if (this.props.is === 'Octicons') return <Octicons name={this.props.i} size={this.props.s || 32} color={this.props.c || 'white'} style={style} />;
        else if (this.props.is === 'Feather') return <Feather name={this.props.i} size={this.props.s || 32} color={this.props.c || 'white'} style={style} />;
        else if (this.props.is === 'EvilIcons') return <EvilIcons name={this.props.i} size={this.props.s || 32} color={this.props.c || 'white'} style={style} />;
        else if (this.props.is === 'SimpleLineIcons') return <SimpleLineIcons name={this.props.i} size={this.props.s || 32} color={this.props.c || 'white'} style={style} />;

        return null;
    }
}

export default Ikon;
