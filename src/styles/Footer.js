import { StyleSheet, Platform } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import tlfnH from '../helper/tlfnH';

const W = tlfnH.W;
const H = tlfnH.H;
const Status = Platform.OS === 'ios' ? getStatusBarHeight(true) : 0;

export const footer = StyleSheet.create({
    main: {
        backgroundColor: '#0a0a0a',
        height: H(8),
        //borderWidth: 1,
        //borderColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    durumTouch: {
        paddingTop: '2%',
        height: '100%',
        width: '16%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '2%'
    },

    durumText: {
        color: '#787878',
        marginTop: '2%',
        fontSize: 12
    },

    aramalarTouch: {
        paddingTop: '2%',
        height: '100%',
        width: '16%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    aramalarText: {
        color: '#787878',
        marginTop: '2%',
        fontSize: 12
    },

    kameraTouch: {
        paddingTop: '2%',
        height: '100%',
        width: '16%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    kameraText: {
        color: '#787878',
        marginTop: '2%',
        fontSize: 12
    },

    sohbetlerTouch: {
        paddingTop: '2%',
        height: '100%',
        width: '16%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    sohbetlerText: {
        color: '#787878',
        marginTop: '2%',
        fontSize: 12
    },

    ayarlarTouch: {
        paddingTop: '2%',
        height: '100%',
        width: '16%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '2%'
    },

    ayarlarText: {
        color: '#787878',
        marginTop: '2%',
        fontSize: 12
    },
});