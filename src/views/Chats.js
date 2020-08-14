import React from 'react';

import { 
    View, 
    ScrollView,
    TouchableOpacity,
    Text    
} from 'react-native';
import { observer } from 'mobx-react';

import { chats as S } from '../styles/Chats';

class Chats extends React.Component {

    render() {

        return (
            <ScrollView style={S.main} >
                <View
                    style={S.topField}>
                    <TouchableOpacity
                        style={S.topluMesajTouch}>
                        <Text
                            style={S.topluMesajText}>
                            Toplu Mesaj Listeleri
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={S.yeniGrupTouch}>
                        <Text
                            style={S.yeniGrupText}>
                            Yeni Grup
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }
}

export default observer(Chats);

