import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { footer as S } from '../styles/Footer';

import Ikon from './Ikon';
import temaH from '../helper/temaH';

class Footer extends React.Component {
    render() {
        return (
            <View 
                style={S.main}>

                <TouchableOpacity
                    style={S.durumTouch}>
                    <Ikon 
                        is= 'MaterialCommunityIcons'
                        i= 'shape-circle-plus'
                        s= {32}
                        c= '#787878'/>
                    <Text
                        style={S.durumText}>
                        Durum
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={S.aramalarTouch}>
                    <Ikon 
                        is= 'SimpleLineIcons'
                        i= 'phone'
                        s= {32}
                        c= '#787878'/>
                    <Text
                        style={S.aramalarText}>
                        Aramalar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={S.kameraTouch}>
                    <Ikon 
                        is= 'Feather'
                        i= 'camera'
                        s= {32}
                        c= '#787878'/>
                    <Text
                        style={S.kameraText}>
                        Kamera
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={S.sohbetlerTouch}>
                    <Ikon 
                        is= 'Ionicons'
                        i= 'ios-chatbubbles-sharp'
                        c= '#288ADD'
                        //i= 'ios-chatbubbles-outline
                        //c= '#787878'
                        s= {32}
                        />
                    <Text
                        style={S.sohbetlerText}>
                        Sohbetler
                    </Text>
                </TouchableOpacity>
            
                <TouchableOpacity
                    style={S.ayarlarTouch}>
                    <Ikon 
                        is= 'AntDesign'
                        i= 'setting'
                        s= {32}
                        c= '#787878'/>
                    <Text
                        style={S.ayarlarText}>
                        Ayarlar
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default Footer;