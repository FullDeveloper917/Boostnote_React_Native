import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
    StyleSheet,
    Text,
    TextInput,
    Image,
    View,
    ScrollView,
    Keyboard,
    Platform,
    StatusBar,
} from 'react-native';
import {
    Container,
    Button,
} from 'native-base';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import img_top_back from '../../assets/img/top_back_img.png';
import img_avatar from '../../assets/img/icon_avatar.png';
import img_input_back from '../../assets/img/input_back.png';
import btn_emoji from '../../assets/img/icon_emo.png';
import btn_attach from '../../assets/img/icon_attach.png';

const DEVICE_WIDTH = Dimensions.get('window').width;
var DEVICE_HEIGHT = Dimensions.get('window').height;

if(Platform.OS == 'android') {
    DEVICE_HEIGHT = DEVICE_HEIGHT - StatusBar.currentHeight;
}

const MARGIN = 44;
const IMG_AVATAR = 60;
const BTN_INPUT = 26;
const INPUT_TOP = DEVICE_HEIGHT * 0.775 - 50;
const MSG_CONTAINER_HEIGHT = DEVICE_HEIGHT * 0.775 - 50;

export default class Chat extends Component {
    constructor() {
        super();

        this.state = {
            input_top: INPUT_TOP,
            msg_cont_height : MSG_CONTAINER_HEIGHT
        };

        this.keyboardWillShow = this.keyboardWillShow.bind(this);
        this.keyboardWillHide = this.keyboardWillHide.bind(this);
        this.keyboardDidShow = this.keyboardDidShow.bind(this);
        this.keyboardDidHide = this.keyboardDidHide.bind(this);
        this.renderMessage = this.renderMessage.bind(this);
    }

    componentWillMount () {
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }

    componentWillUnmount () {
        this.keyboardWillShowListener.remove();
        this.keyboardWillHideListener.remove();
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardWillShow (e) {
        // var top = INPUT_TOP - e.endCoordinates.height;
        // this.setState({input_top: top});
    }

    keyboardWillHide (e) {
        if(Platform.OS == 'android') {

        }
        else  {
            this.setState({
                input_top: INPUT_TOP,
                msg_cont_height : MSG_CONTAINER_HEIGHT
            });
        }
    }

    keyboardDidShow (e) {
        if(Platform.OS == 'android') {

        }
        else  {
            this.setState({
                input_top: INPUT_TOP - e.endCoordinates.height,
                msg_cont_height: MSG_CONTAINER_HEIGHT - e.endCoordinates.height
            });
        }
    }

    keyboardDidHide (e) {
        // this.setState({input_top: INPUT_TOP});
    }

    renderMessage(msg_type) {

    }

    render() {
        return (
            <View>
                <View style={styles.top_container}>
                    <Image source={img_top_back} style={styles.img_top_back}/>
                    <Text style={styles.title}>Cryptocurrency</Text>
                </View>
                <View style={styles.container}>
                    <View style={[styles.msg_container, {height:this.state.msg_cont_height}]}>
                        <KeyboardAwareScrollView>
                            <View style={styles.msg}>
                                <Image source={img_avatar} style={styles.msg_in_avatar}/>
                                <View style={styles.msg_text_container}>
                                    <View style={styles.msg_name_date_container}>
                                        <Text style={styles.msg_in_txt_name}>John Citizen</Text>
                                        <Text style={styles.msg_in_txt_time}>14:25</Text>
                                    </View>
                                    <View>
                                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.msg}>
                                <View style={styles.msg_text_container}>
                                    <View style={styles.msg_name_date_container}>
                                        <Text style={styles.msg_in_txt_name}>John Citizen</Text>
                                        <Text style={styles.msg_in_txt_time}>14:25</Text>
                                    </View>
                                    <View>
                                        <Text>Lorem Ipsum has been the industry's standard dummy text ever since the, 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                    </View>
                                </View>
                                <Image source={img_avatar} style={styles.msg_in_avatar}/>
                            </View>
                            <View style={styles.msg}>
                                <Image source={img_avatar} style={styles.msg_in_avatar}/>
                                <View style={styles.msg_text_container}>
                                    <View style={styles.msg_name_date_container}>
                                        <Text style={styles.msg_in_txt_name}>John Citizen</Text>
                                        <Text style={styles.msg_in_txt_time}>14:25</Text>
                                    </View>
                                    <View>
                                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                    </View>
                                </View>
                            </View>
                        </KeyboardAwareScrollView>
                    </View>
                    <View style={[styles.input_container, {top: this.state.input_top}]}>
                        <Image source={img_input_back} style={styles.input_back}/>
                        <View style={styles.input_tool}>
                            <Button transparent onPress={()=>{}} style={styles.btn_input_left}>
                                <Image source={btn_emoji} style={styles.btn_input}/>
                            </Button>
                            <TextInput style={styles.text}
                                       placeholder=''
                                       placeholderTextColor='#acacac'
                                       underlineColorAndroid='transparent' />
                            <Button transparent onPress={()=>{}}  style={styles.btn_input_right}>
                                <Image source={btn_attach} style={styles.btn_input}/>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    top_container: {

        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.225,
    },
    title: {
        fontSize: 24,
        marginTop: -DEVICE_HEIGHT * 0.1,
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontFamily: 'Montserrat',
    },
    img_top_back: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.225,
    },
    container: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.775,
        backgroundColor: '#FFFFFF',
    },
    input_container: {
        position: 'absolute',
        // top: INPUT_TOP,
        left: 0,
        width: DEVICE_WIDTH,
        height: 44,
        zIndex: 9999,
    },
    input_tool: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    btn_input: {
        width: BTN_INPUT,
        height: BTN_INPUT,
    },
    btn_input_left: {
        position: 'absolute',
        top: 9,
        left: DEVICE_WIDTH * 0.04,
        width: BTN_INPUT,
        height: BTN_INPUT,
    },
    btn_input_right: {
        position: 'absolute',
        top:9,
        left: DEVICE_WIDTH * 0.88,
        width: BTN_INPUT,
        height: BTN_INPUT,
    },
    text: {
        position: 'absolute',
        width: DEVICE_WIDTH * 0.75,
        height: BTN_INPUT + 6,
        top: 6,
        left: DEVICE_WIDTH * 0.12,
    },
    input_back: {
        width: DEVICE_WIDTH,
        height: 44,
        resizeMode: 'contain',
    },
    msg_container: {
        width: DEVICE_WIDTH,
        height: MSG_CONTAINER_HEIGHT,
        backgroundColor: '#ffffff',
    },

    msg: {
        width: DEVICE_WIDTH,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row'
    },
    msg_in_avatar: {
        width: IMG_AVATAR,
        height: IMG_AVATAR,
        margin: 5,
    },
    msg_text_container: {
        width: DEVICE_WIDTH - IMG_AVATAR - 20,
        margin: 5,
    },
    msg_name_date_container: {
        flex: 1,
        flexDirection: 'row',
    },
    msg_in_txt_name: {
        width: '80%',
        color: 'darkgrey',
    },
    msg_in_txt_time: {
        width: '20%',
        paddingRight: 10,
        textAlign: 'right',
        color: 'darkgrey',
    },
});
