import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {
    StyleSheet,
} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
        alignItems: 'center',
        paddingTop: DEVICE_HEIGHT * 0.47,
    },
    text: {
        marginTop: 25,
        color: 'rgba(255,255,255,0.6)',
    },
    textInput: {
        width: DEVICE_WIDTH * 0.9,
        height: 46,
        color: 'rgba(255,255,255,0.95)',
        textAlign: 'center',
        // backgroundColor: '#ffffff',
    },
    btn: {
        width: DEVICE_WIDTH * 0.8,
        height: 44,
        marginTop: 20,
        borderRadius: 22,
        backgroundColor: '#cf6820'
    },
    btn_text: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'transparent',
    },
    sign_up_container: {
        width: DEVICE_WIDTH,
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
    },
    account_text: {
        marginLeft: DEVICE_WIDTH * 0.22,
        height: 44,
        color: 'rgba(255,255,255,0.6)',
    },
    sign_up_text: {
        marginLeft: 5,
        height: 44,
        color: 'rgba(255,255,255,0.95)',
        // backgroundColor: '#ffffff'
    }
});