import { observable, action, decorate } from 'mobx';
import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

class tlfnH {
    w = Dimensions.get('window').width;
    h = Dimensions.get('window').height;

    //W(d) { return this.w * d / 100;  }
    W = d => this.w * d / 100;
    H = d => this.h * d / 100;

    android = Platform.OS === 'android';
    ios = Platform.OS === 'ios';

    //sbh = getStatusBarHeight();
    //sbhi = getStatusBarHeight(true);

    klavye = { durum: false, h: 0 };
    klavyeAcildi = d => {
        this.klavye = { durum: true, h: d.endCoordinates.height };
    }
    klavyeKapandi = () => this.klavye = { durum: false, h: 0 };
}

decorate(
    tlfnH,
    {
        w: observable,
        h: observable,

        W: action,
        H: action,

        android: observable,
        ios: observable,

        sbh: action,
        sbhi: action,

        klavye: observable,
        klavyeAcildi: action,
        klavyeKapandi: action
    }
);


export default new tlfnH();