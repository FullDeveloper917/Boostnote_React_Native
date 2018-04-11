import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
    StyleSheet,
    Text,
    TextInput,
    Image,
    View,
    Platform,
    StatusBar,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Switch from 'react-native-customisable-switch';

import img_top_back from '../../assets/img/top_back_img.png';
import img_avatar from '../../assets/img/icon_avatar.png';

const DEVICE_WIDTH = Dimensions.get('window').width;
var DEVICE_HEIGHT = Dimensions.get('window').height;

if(Platform.OS == 'android') {
    DEVICE_HEIGHT = DEVICE_HEIGHT - StatusBar.currentHeight;
}

const MARGIN = 44;
const ITEM_HEIGHT = 50;

export default class Profile extends Component {
    constructor() {
        super();

        this.state = {
            position: 0,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView style={styles.scroll_cotainer}>
                    <View style={styles.top_image}>
                        <Image source={img_top_back} style={styles.img_top_back}/>
                    </View>
                    <View style={styles.avatar_container}>
                        <Image source={img_avatar} style={styles.img_avatar}/>
                    </View>
                    <View style={styles.contents}>
                        <View style={styles.item_row}>
                            <Text style={styles.title}>Username</Text>
                            <TextInput style={styles.input}
                                       placeholder='Username'
                                       placeholderTextColor='#acacac'
                                       underlineColorAndroid='transparent' />
                        </View>
                        <View style={styles.item_row}>
                            <Text style={styles.title}>Email</Text>
                            <TextInput style={styles.input}
                                       placeholder='Email'
                                       placeholderTextColor='#acacac'
                                       underlineColorAndroid='transparent' />
                        </View>
                        <View style={styles.item_row}>
                            <Text style={styles.title}>Password</Text>
                            <TextInput style={styles.input}
                                       placeholder='Password'
                                       secureTextEntry={true}
                                       placeholderTextColor='lightgrey'
                                       underlineColorAndroid='transparent' />
                        </View>
                        <View style={styles.item_row}>
                            <Text style={styles.title}>Company</Text>
                            <View style={styles.switch_container}>
                                <Switch
                                    value={true}
                                    onChangeValue={() => {}}
                                    activeText={''}
                                    inactiveText={''}
                                    fontSize={16}
                                    activeBackgroundColor={'#d2691e'}
                                    inactiveBackgroundColor={'#ffffff'}
                                    switchWidth={60}
                                    switchHeight={26}
                                    switchBorderRadius={13}
                                    switchBorderColor={'lightgrey'}
                                    switchBorderWidth={2}
                                    buttonWidth={20}
                                    buttonHeight={20}
                                    buttonBorderRadius={10}
                                    buttonBorderColor={'#d2691e'}
                                    buttonBorderWidth={2}
                                    animationTime={150}
                                    padding={true}
                                />
                            </View>
                        </View>
                        <View style={styles.item_row}>
                            <Text style={styles.title}>Industry</Text>
                            <View style={styles.switch_container}>
                                <Switch
                                    value={false}
                                    onChangeValue={() => {}}
                                    activeText={''}
                                    inactiveText={''}
                                    fontSize={16}
                                    activeBackgroundColor={'#d2691e'}
                                    inactiveBackgroundColor={'#ffffff'}
                                    switchWidth={60}
                                    switchHeight={26}
                                    switchBorderRadius={13}
                                    switchBorderColor={'lightgrey'}
                                    switchBorderWidth={2}
                                    buttonWidth={20}
                                    buttonHeight={20}
                                    buttonBorderRadius={10}
                                    buttonBorderColor={'#d2691e'}
                                    buttonBorderWidth={2}
                                    animationTime={150}
                                    padding={true}
                                />
                            </View>
                        </View>
                        <View style={styles.item_row}>
                            <Text style={styles.title}>Designation</Text>
                            <Text style={styles.label}>Connect</Text>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
        backgroundColor: '#ffffff'
    },
    scroll_cotainer: {
        flex: 1,
    },
    top_image: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.425,
    },
    img_top_back: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.425,
    },
    avatar_container: {
        width: DEVICE_WIDTH,
        backgroundColor: 'transparent',
        alignItems: 'center',
        marginTop: -75,
    },
    img_avatar: {
        width: 100,
        height: 100,
        borderColor: '#FFFFFF',
        borderWidth: 3,
    },
    contents: {
        width: DEVICE_WIDTH,
        backgroundColor: '#FFFFFF',
    },
    item_row: {
        width: DEVICE_WIDTH,
        height: ITEM_HEIGHT,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    title: {
        width: DEVICE_WIDTH * 0.25,
        height: ITEM_HEIGHT,
        paddingTop: 20,
        paddingLeft: 10,
        color: '#8d8d8d',
        backgroundColor: 'transparent',
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        width: DEVICE_WIDTH * 0.75,
        height: ITEM_HEIGHT,
        color: '#545454',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'right',
    },
    label: {
        width: DEVICE_WIDTH * 0.75,
        height: ITEM_HEIGHT,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        color: '#545454',
        textAlign: 'right',
        backgroundColor: 'transparent',
    },
    switch_container: {
        width: DEVICE_WIDTH * 0.75,
        height: ITEM_HEIGHT,
        paddingTop: 15,
        paddingRight: 10,
        alignItems: 'flex-end',
    },
    switch: {
        width: 100,
        borderColor: '#888888',
        borderWidth: 2,
    },
});
