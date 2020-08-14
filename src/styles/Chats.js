import { StyleSheet, Platform } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import tlfnH from '../helper/tlfnH';

const W = tlfnH.W;
const H = tlfnH.H;
const Status = Platform.OS === 'ios' ? getStatusBarHeight(true) : 0;

export const chats = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#000000',
        //borderWidth: 1,
        //borderColor: 'blue'
    },

    topField: {
        borderBottomColor: '#0A0A0A',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    topluMesajTouch: {
        //borderWidth: 1,
        //borderColor: 'red',
        marginLeft: W(5),
    },

    topluMesajText: {
        color: '#288ADD',
        fontSize: 20
    },

    yeniGrupTouch: {
        //borderWidth: 1,
        //borderColor: 'red',
        marginRight: W(4)      
    },

    yeniGrupText: {
        color: '#288ADD',
        fontSize: 20        
    }
});