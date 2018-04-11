import { StyleSheet, Platform, } from 'react-native'
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
var PAD_TOP = 30;

if(Platform.OS == 'android') PAD_TOP = 15;

const BTN_WRAP = DEVICE_WIDTH / 3;
const BTN_PADDING = 5;
const BTN_ICON = (BTN_WRAP - 2 * BTN_PADDING) / 2;
const BTN_ICON_TOP = BTN_ICON / 4;

var LBL_BOTTOM = 10;
if(Platform.OS == 'android') LBL_BOTTOM = 35;

export default StyleSheet.create({
    side_nav_wrap: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
        paddingTop: PAD_TOP,
    },
    btn_close_wrap: {
        backgroundColor:'transparent',
        width: 26,
        height: 26,
    },
    btn_close: {
        width: 16,
        height: 16,
        marginLeft: 10,
    },
    avatar_wrap: {
        width: DEVICE_WIDTH,
        height: 100,
        alignItems: 'center',
    },
    img_photo: {
        width: 60,
        height: 60
    },
    txt_name: {
        backgroundColor:'transparent',
        color: '#FFFFFF',
        fontWeight: 'bold',
        width: DEVICE_WIDTH,
        height: 25,
        paddingTop: 5,
        textAlign: 'center',
    },
    btn_container: {
        width: DEVICE_WIDTH,
        height: BTN_WRAP * 3,
    },
    btn_row: {
        flex: 1,
        flexDirection: 'row',
    },
    btn_wrap: {
        width: BTN_WRAP,
        height: BTN_WRAP,
        padding: BTN_PADDING,
        // borderColor: 'transparent',
    },
    btn: {
        backgroundColor: '#0d58ff',
        width: '100%',
        height: '100%',
        elevation: 0,
    },
    btn_selected: {
        backgroundColor: '#55abff',
        width: '100%',
        height: '100%',
        elevation: 0,
    },
    btn_icon : {
        position: 'absolute',
        width: BTN_ICON,
        height: BTN_ICON,
        top: BTN_ICON_TOP,
        left: BTN_ICON / 2,
    },
    btn_text: {
        fontSize: 14,
        color: '#ffffff',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        paddingTop: BTN_ICON + BTN_ICON_TOP,
        backgroundColor: 'transparent',
    },
    icon_badge: {
        top: 0,
        right: BTN_WRAP,
        width: 24,
        height: 24,
        borderRadius:12,
        backgroundColor: '#fb2054',
    },
    lbl_app_version: {
        position: 'absolute',
        right: 10,
        bottom: LBL_BOTTOM,
        color: '#ffffff',
        backgroundColor: 'transparent',
    }
})