import React, { Component } from 'react'
import Dimensions from 'Dimensions';
import {
    Linking,
    Text,
    TextInput,
    View,
    Platform,
    Image,
} from 'react-native'
import {
    Container,
    Button,
} from 'native-base';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
import MENU from '../../utils/Consts';

import styles from './styles'
import Wallpaper from "../Wallpaper";
import IconBadge from '../IconBadge/IconBadge';

import icon_close from '../../assets/img/left-arrow.png';
import icon_avatar from '../../assets/img/icon_avatar.png';

import icon_home from '../../assets/img/username.png';
import icon_chat from '../../assets/img/icon_comment.png';

export default class SideBar extends React.Component {
    render() {
        return (
            <Wallpaper>
                <View style={styles.side_nav_wrap}>
                    <Button onPress={()=>{ this.props.onClose(); }} style={styles.btn_close_wrap}>
                        <Image source={icon_close} style={styles.btn_close}/>
                    </Button>
                    <View style={styles.avatar_wrap}>
                        <Image source={icon_avatar} style={styles.img_photo}/>
                        <Text style={styles.txt_name}>John Citizen</Text>
                    </View>
                    <View style={styles.btn_container}>
                        <View style={styles.btn_row}>
                            <View style={styles.btn_wrap}>
                                <Button style={this.props.index == MENU.Home ? styles.btn_selected : styles.btn}
                                        onPress={() => { this.props.changeMode(MENU.Home); this.props.onClose(); }}>
                                    <Image source={icon_home} style={styles.btn_icon}/>
                                    <Text  style={styles.btn_text}>Home</Text>
                                </Button>
                            </View>
                            <View style={styles.btn_wrap}>
                                <Button style={this.props.index == MENU.Overview ? styles.btn_selected : styles.btn}
                                        onPress={() => { this.props.changeMode(MENU.Overview); this.props.onClose(); }}>
                                    <Image source={icon_home} style={styles.btn_icon}/>
                                    <Text  style={styles.btn_text}>Overview</Text>
                                </Button>
                            </View>
                            <View style={styles.btn_wrap}>
                                <IconBadge
                                    MainElement={
                                        <Button style={this.props.index == MENU.Timeline ? styles.btn_selected : styles.btn}
                                                onPress={() => { this.props.changeMode(MENU.Timeline); this.props.onClose(); }}>
                                            <Image source={icon_home} style={styles.btn_icon}/>
                                            <Text  style={styles.btn_text}>Timeline</Text>
                                        </Button>
                                    }
                                    BadgeElement={
                                        <Text style={{color:'#FFFFFF'}}>{12}</Text>
                                    }
                                    IconBadgeStyle={styles.icon_badge}
                                />
                            </View>
                        </View>
                        <View style={styles.btn_row}>
                            <View style={styles.btn_wrap}>
                                <Button style={this.props.index == MENU.Chat ? styles.btn_selected : styles.btn}
                                        onPress={() => { this.props.changeMode(MENU.Chat); this.props.onClose(); }}>
                                    <Image source={icon_chat} style={styles.btn_icon}/>
                                    <Text  style={styles.btn_text}>Chat</Text>
                                </Button>
                            </View>
                            <View style={styles.btn_wrap}>
                                <Button style={this.props.index == MENU.Augmented_Reality ? styles.btn_selected : styles.btn}
                                        onPress={() => { this.props.changeMode(MENU.Augmented_Reality); this.props.onClose(); }}>
                                    <Image source={icon_home} style={styles.btn_icon}/>
                                    <Text  style={styles.btn_text}>Augmented Reality</Text>
                                </Button>
                            </View>
                            <View style={styles.btn_wrap}>
                                <Button style={this.props.index == MENU.Profile ? styles.btn_selected : styles.btn}
                                        onPress={() => { this.props.changeMode(MENU.Profile); this.props.onClose(); }}>
                                    <Image source={icon_home} style={styles.btn_icon}/>
                                    <Text  style={styles.btn_text}>Profile</Text>
                                </Button>
                            </View>
                        </View>
                        <View style={styles.btn_row}>
                            <View style={styles.btn_wrap}>
                                <Button style={this.props.index == MENU.Settings ? styles.btn_selected : styles.btn}
                                        onPress={() => { this.props.changeMode(MENU.Settings); this.props.onClose(); }}>
                                    <Image source={icon_home} style={styles.btn_icon}/>
                                    <Text  style={styles.btn_text}>Settings</Text>
                                </Button>
                            </View>
                            <View style={styles.btn_wrap}>
                                <Button style={styles.btn}
                                        onPress={() => { this.props.changeMode(MENU.Logout); this.props.onClose(); }}>
                                    <Image source={icon_home} style={styles.btn_icon}/>
                                    <Text  style={styles.btn_text}>Logout</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.lbl_app_version}>App version: 1.0</Text>
                </View>
            </Wallpaper>
        )
    }
}
