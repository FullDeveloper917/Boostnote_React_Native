import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
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

import icon_edit from '../assets/img/icon_edit.png';

import MENU from '../utils/Consts';

export default class ActionBar extends Component {
    constructor() {
        super();

        this.renderRightButton = this.renderRightButton.bind(this);
    }

    renderRightButton(mode) {
        if(mode == MENU.Profile) {
            return (
                <Button transparent onPress={()=>{}} >
                    <Image source={icon_edit} style={styles.headerRightMenuButton}/>
                </Button>
            )
        }
    }

    render() {
        return (
            <View style={[styles.header, Platform.OS == 'android' ? {top: 0} : {top: 15}]}>
                <StatusBar
                    backgroundColor={Platform.OS == 'android'? 'black' : "transparent"}
                    barStyle="light-content"
                />
                <View style={styles.container}>
                    <View style={{position: 'absolute', left: 0, bottom: 0, top: 0}}>
                        <Button transparent onPress={this.props.openDrawer} >
                            <Icon name='menu' style={styles.headerMenuButton}/>
                        </Button>
                    </View>
                    <View style={styles.title_container}>
                        <Title style={ styles.title}>
                            {this.props.title}
                        </Title>
                    </View>
                    <View style={{position: 'absolute', right: 10, bottom: 0, top: 0}}>
                        {this.renderRightButton(this.props.enableRightButton)}
                    </View>
                </View>
            </View>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: DEVICE_WIDTH,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        position: 'absolute',
        left: 0,
        width: DEVICE_WIDTH,
        height: 44,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        zIndex: 9999
    },
    title_container: {
        backgroundColor: 'transparent',
    },
    title: {
        marginTop: 10,
        color: '#ffffff',
        fontSize: 21,
        fontFamily: 'Montserrat',
    },
    headerMenuButton: {
        color: '#ffffff',
        fontSize: 30,
    },
    headerRightMenuButton: {
        width: 22,
        height: 22,
    },
});
