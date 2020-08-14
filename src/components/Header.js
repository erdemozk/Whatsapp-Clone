import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { header as S } from '../styles/Header';

import Ikon from './Ikon';
import temaH from '../helper/temaH';

class Header extends React.Component {
    render() {
        return (
            <View 
                style={S.main}>
                
                <TouchableOpacity
                    style={S.duzenleTouch}>
                    <Text
                        style={S.duzenleText}>
                        Düzenle
                    </Text>
                </TouchableOpacity>

                <Text
                    style={S.sohbetText}>
                    Sohbetler
                </Text>

                <TouchableOpacity
                    style={S.ikonTouch}>
                    <Ikon
                        is= 'Feather'
                        i= 'edit'
                        s= {24}
                        c= '#288ADD'
                    />
                </TouchableOpacity>

            </View>
        );
    }
}

export default Header;