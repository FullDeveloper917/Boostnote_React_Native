import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
    View,
    Text,
    TextInput,
    StatusBar,
    Platform
} from 'react-native';

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Drawer,
} from 'native-base'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './SigninStyles';

import Wallpaper from '../components/Wallpaper';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class SigninView extends Component {
    constructor() {
        super();

        this.state = {listToggle: false};
    }

    render() {
        return (
            <Wallpaper>

                <StatusBar
                    backgroundColor={Platform.OS == 'android'? 'black' : "transparent"}
                    barStyle="light-content"
                />
                <KeyboardAwareScrollView keyboardDismissMode="interactive"
                                         keyboardShouldPersistTaps="always"
                >
                    <View style={styles.container}>
                        <Text style={styles.text}>Username</Text>
                        <TextInput style={styles.textInput}
                                   placeholder={'Username'}
                                   returnKeyType={'next'}
                                   placeholderTextColor='grey'
                                   underlineColorAndroid='transparent'
                        />
                        <Text style={styles.text}>Password</Text>
                        <TextInput style={styles.textInput}
                                   secureTextEntry={true}
                                   placeholder={'Password'}
                                   returnKeyType={'next'}
                                   placeholderTextColor='grey'
                                   underlineColorAndroid='transparent'
                        />
                        <View>
                            <Button style={styles.btn}
                                    onPress={this.props.onLogin}
                            >
                                <Text style={styles.btn_text}>Sign In</Text>
                            </Button>
                        </View>
                        <View style={styles.sign_up_container}>
                            <Text style={styles.account_text}>Don't have an account?</Text>
                            <Text style={styles.sign_up_text}>Sign Up</Text>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </Wallpaper>
        );
    }
}
