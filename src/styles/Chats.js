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
        justifyContent: 'space-between',
        //marginTop: '1%'
    },

    topluMesajTouch: {
        //borderWidth: 1,
        //borderColor: 'red',
        marginLeft: W(5),
        padding: 7,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center' 
    },

    topluMesajText: {
        color: '#288ADD',
        fontSize: 20
    },

    yeniGrupTouch: {
        //borderWidth: 1,
        //borderColor: 'red',
        marginRight: W(2),
        padding: 7,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center' 
    },

    yeniGrupText: {
        color: '#288ADD',
        fontSize: 20        
    },

    mainField: {
        flex: 1
    },

    chatTouch: {
        paddingLeft: W(5),
        height: 90,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomColor: '#141414',
        borderBottomWidth: 1,
    },

    avatarField: {
        alignSelf: 'center'
    },

    personInfField: {
        alignSelf: 'center',
        marginLeft: 20
    },

    personName: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    },

    personChatField: {
        flexDirection: "row",
    },

    checkIcon: {
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1.5
    },

    personChatText: {
        color: '#787878',
        fontSize: 16,
        marginTop: 2,
        width: W(55)
    },

    iconField: {
        flex: 1
    }
});