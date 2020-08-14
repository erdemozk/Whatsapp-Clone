import { StyleSheet, Platform } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import tlfnH from '../helper/tlfnH';

const W = tlfnH.W;
const H = tlfnH.H;
const Status = Platform.OS === 'ios' ? getStatusBarHeight(true) : 0;

export const header = StyleSheet.create({
    main: {
        borderWidth: 1,
        //borderColor: 'red',
        borderBottomColor: '#111111',
        height: Status + H(8),
        backgroundColor: '#0a0a0a',
        paddingTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    },

    duzenleTouch: {
        //marginTop: H(4),
        marginLeft: W(5),
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        //borderWidth: 1,
        //borderColor: 'red'
    },

    duzenleText: {
        color: '#288ADD',
        fontSize: 18,
    },

    sohbetText: {
        color: 'white',
        marginRight: W(7),
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center'
    },

    ikonTouch: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: W(1)
    }
});