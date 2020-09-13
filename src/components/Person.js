import React from 'react';
import { 
    View, 
    ScrollView,
    TouchableOpacity,
    Text    
} from 'react-native';

import { Avatar } from 'react-native-elements';

import { chats as S } from '../styles/Chats';
import Ikon from '../components/Ikon';


class Person extends React.Component{
    render() {
        return(
            <TouchableOpacity 
                style={S.chatTouch}>
                <View
                    style={S.avatarField}>
                    <Avatar
                        rounded
                        size='large'
                        source={{
                            uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}/>
                </View>
        
                <View
                    style={S.personInfField}>
                    <Text 
                        style={S.personName}>
                        Kişi
                    </Text>
                    <View style={S.personChatField}>
                        <Ikon
                            i="ios-checkmark"
                            is="Ionicons"
                            c="#787878"
                            s={16}
                            style={S.checkIcon} />                                
                        <Text 
                            style={S.personChatText}>
                            Do culpa non duis mollit laborum nostrud veniam.
                        </Text>
                    </View>
                </View>
        
                <View
                    style={S.iconField}>
                    
                </View>
        
            </TouchableOpacity>
        );
    }
}

export default Person;
