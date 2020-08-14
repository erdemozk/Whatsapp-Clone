import { StyleSheet, Platform } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import tlfnH from '../helper/tlfnH';

const W = tlfnH.W;
const H = tlfnH.H;
const Status = Platform.OS === 'ios' ? getStatusBarHeight(true) : 0;

export const statusBar = StyleSheet.create({
    main: {
        height: Status,
        width: '%100'
    }
});