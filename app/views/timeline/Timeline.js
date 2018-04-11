import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    Platform,
    StatusBar,
    PanResponder,
    Animated,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const DEVICE_WIDTH = Dimensions.get('window').width;
var DEVICE_HEIGHT = Dimensions.get('window').height;

if(Platform.OS == 'android') {
    DEVICE_HEIGHT = DEVICE_HEIGHT - StatusBar.currentHeight;
}

import img_avatar1 from '../../assets/img/avatar_1.png';
import img_avatar2 from '../../assets/img/avatar_2.png';
import img_avatar3 from '../../assets/img/avatar_3.png';
import img_avatar4 from '../../assets/img/avatar_4.png';
import img_avatar5 from '../../assets/img/avatar_5.png';
import icon_time from '../../assets/img/icon_time.png';

const MONTHS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const MONTH_LETER = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const TOP_HEIGHT = DEVICE_HEIGHT * 0.425;
const ITEM_LEFT = 140;
const INIT_POS = -DEVICE_WIDTH / 3;
const INIT_OPC = 1;
const INIT_S_OPC = 0.6;
const INIT_E_OPC = 0.7;
const INIT_ES_OPC = 0.4;
const F_D_SIZE = 36;
const F_M_SIZE = 30;
const F_E_SIZE = 14;
const F_D_S_SIZE = 28;
const F_M_S_SIZE = 24;
const F_E_S_SIZE = 10;

export default class Timeline extends Component {
    constructor() {
        super();

        this.state = {
            posX: INIT_POS,
            f_d_size: F_D_SIZE,
            f_m_size: F_M_SIZE,
            f_e_size: F_E_SIZE,
            f_d_ls_size: F_D_S_SIZE,
            f_m_ls_size: F_M_S_SIZE,
            f_e_ls_size: F_E_S_SIZE,
            f_d_rs_size: F_D_S_SIZE,
            f_m_rs_size: F_M_S_SIZE,
            f_e_rs_size: F_E_S_SIZE,
            opacity: INIT_OPC,
            e_opacity: INIT_E_OPC,
            ls_opacity: INIT_S_OPC,
            rs_opacity: INIT_S_OPC,
            e_ls_opacity: INIT_ES_OPC,
            e_rs_opacity: INIT_ES_OPC,
            llday: 1,
            lday: 2,
            curday: 3,
            fday: 4,
            ffday: 5,
            llmon: 3,
            lmon: 3,
            curmon: 3,
            fmon: 3,
            ffmon: 3
        };
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            // So it's working inside a Modal
            onStartShouldSetPanResponder: () => true,
            // Claim responder if it's a horizontal pan
            onMoveShouldSetPanResponder: (event, gestureState) => {
                const dx = Math.abs(gestureState.dx);
                const dy = Math.abs(gestureState.dy);

                return dx > dy && dx > constant.UNCERTAINTY_THRESHOLD;
            },
            onPanResponderRelease: this.handleTouchEnd,
            onPanResponderTerminate: this.handleTouchEnd,
            onPanResponderMove: this.handleTouchMove,
            onPanResponderGrant: this.handleTouchStart,
        });
    }

    panResponder = undefined;
    startPosX = 0;
    endPosX = 0;

    handleTouchStart = (event, gestureState) => {
        if (this.props.onTouchStart) {
            this.props.onTouchStart(event, gestureState);
        }

        this.startPosX = gestureState.x0;
    };

    handleTouchMove = (event, gestureState) => {
        var dir = gestureState.moveX - this.startPosX;
        var del = Math.abs(dir);
        this.setState({
            posX: INIT_POS + gestureState.moveX - this.startPosX,
            f_d_size: F_D_SIZE - 8 * 3 * del / DEVICE_WIDTH,
            f_m_size: F_M_SIZE - 6 * 3 * del / DEVICE_WIDTH,
            f_e_size: F_E_SIZE - 4 * 3 * del / DEVICE_WIDTH,
            opacity: INIT_OPC - 0.4 * del / DEVICE_WIDTH,
            e_opacity: INIT_E_OPC - 0.3 * del / DEVICE_WIDTH,
        });
        if(dir >= 0) {
            this.setState({
                f_d_ls_size: F_D_S_SIZE + 8 * 3 * del / DEVICE_WIDTH,
                f_m_ls_size: F_M_S_SIZE + 6 * 3 * del / DEVICE_WIDTH,
                f_e_ls_size: F_E_S_SIZE + 4 * 3 * del / DEVICE_WIDTH,
                ls_opacity: INIT_S_OPC + 0.4 * del / DEVICE_WIDTH,
                e_ls_opacity: INIT_ES_OPC + 0.3 * del / DEVICE_WIDTH,
            });
        }
        else  if(dir < 0) {
            this.setState({
                f_d_rs_size: F_D_S_SIZE + 8 * 3 * del / DEVICE_WIDTH,
                f_m_rs_size: F_M_S_SIZE + 6 * 3 * del / DEVICE_WIDTH,
                f_e_rs_size: F_E_S_SIZE + 4 * 3 * del / DEVICE_WIDTH,
                rs_opacity: INIT_S_OPC + 0.4 * del / DEVICE_WIDTH,
                e_rs_opacity: INIT_ES_OPC + 0.3 * del / DEVICE_WIDTH,
            });
        }
    };

    handleTouchEnd = (event, gestureState) => {
        if (this.props.onTouchEnd) {
            this.props.onTouchEnd(event, gestureState);
        }

        var dir = 0;
        var llday = this.state.llday;
        var lday = this.state.lday;
        var curday = this.state.curday;
        var fday = this.state.fday;
        var ffday = this.state.ffday;

        var llmon = this.state.llmon;
        var lmon = this.state.lmon;
        var curmon = this.state.curmon;
        var fmon = this.state.fmon;
        var ffmon = this.state.ffmon;

        this.endPosX = gestureState.moveX;
        if(this.endPosX - this.startPosX > 50 && this.endPosX != 0) {
            // this.setState({
            //     posX: 0
            // })
            dir = 1;

            llday--;
            lday--;
            curday--;
            fday--;
            ffday--;
            if(llday == 0) {
                llmon--;
                if(llmon == 0) llmon = 12;
                llday = MONTHS[llmon];
            }
            if(lday == 0) {
                lmon--;
                if(lmon == 0) lmon = 12;
                lday = MONTHS[lmon];
            }
            if(curday == 0) {
                curmon--;
                if(curmon == 0) curmon = 12;
                curday = MONTHS[curmon];
            }
            if(fday == 0) {
                fmon--;
                if(fmon == 0) fmon = 12;
                fday = MONTHS[fmon];
            }
            if(ffday == 0) {
                ffmon--;
                if(ffmon == 0) ffmon = 12;
                ffday = MONTHS[ffmon];
            }
        }
        else if(this.endPosX - this.startPosX < -50  && this.endPosX != 0) {
            // this.setState({
            //     posX: -2 * DEVICE_WIDTH / 3
            // })
            dir = -1;
            llday++;
            lday++;
            curday++;
            fday++;
            ffday++;
            if(llday == MONTHS[llmon] + 1) {
                llmon++;
                if(llmon == 13) llmon = 1;
                llday = 1;
            }
            if(lday == MONTHS[llmon] + 1) {
                lmon++;
                if(lmon == 13) lmon = 1;
                lday = 1;
            }
            if(curday == MONTHS[llmon] + 1) {
                curmon++;
                if(curmon == 13) curmon = 1;
                curday = 1;
            }
            if(fday == MONTHS[llmon] + 1) {
                fmon++;
                if(fmon == 13) fmon = 1;
                fday = 1;
            }
            if(ffday == MONTHS[llmon] + 1) {
                ffmon++;
                if(ffmon == 13) ffmon = 1;
                ffday = 1;
            }
        }
        else {
            this.setState({
                posX: INIT_POS
            })
        }

        this.setState({
            posX: INIT_POS,
            f_d_size: F_D_SIZE,
            f_m_size: F_M_SIZE,
            f_e_size: F_E_SIZE,
            f_d_ls_size: F_D_S_SIZE,
            f_m_ls_size: F_M_S_SIZE,
            f_e_ls_size: F_E_S_SIZE,
            f_d_rs_size: F_D_S_SIZE,
            f_m_rs_size: F_M_S_SIZE,
            f_e_rs_size: F_E_S_SIZE,
            opacity: INIT_OPC,
            e_opacity: INIT_E_OPC,
            ls_opacity: INIT_S_OPC,
            rs_opacity: INIT_S_OPC,
            e_ls_opacity: INIT_ES_OPC,
            e_rs_opacity: INIT_ES_OPC,
            llday: llday,
            lday: lday,
            curday: curday,
            fday: fday,
            ffday: ffday,
            llmon: llmon,
            lmon: lmon,
            curmon: curmon,
            fmon: fmon,
            ffmon: ffmon
        });
    };

    render() {
        const panHandlers = this.panResponder.panHandlers;

        return (
            <View style={styles.container}>
                <View style={styles.slider_container}>
                    <Animated.View {...panHandlers} style={[styles.date_container, {transform:[{translateX:this.state.posX}]}]}>
                        <View style={styles.item_col}>
                            <Text style={[styles.txt_day_sub]}>{this.state.llday}</Text>
                            <Text style={[styles.txt_month_sub]}>{MONTH_LETER[this.state.llmon]}</Text>
                            <Text style={[styles.txt_events_sub]}>15 Events</Text>
                        </View>
                        <View style={styles.item_col}>
                            <Text style={[styles.txt_day_sub, {fontSize:this.state.f_d_ls_size, opacity:this.state.ls_opacity}]}>{this.state.lday}</Text>
                            <Text style={[styles.txt_month_sub, {fontSize:this.state.f_m_ls_size, opacity:this.state.ls_opacity}]}>{MONTH_LETER[this.state.lmon]}</Text>
                            <Text style={[styles.txt_events_sub, {fontSize:this.state.f_e_ls_size, opacity:this.state.e_ls_opacity}]}>15 Events</Text>
                        </View>
                        <View style={styles.item_col}>
                            <Text style={[styles.txt_day, {fontSize:this.state.f_d_size, opacity:this.state.opacity}]}>{this.state.curday}</Text>
                            <Text style={[styles.txt_month, {fontSize:this.state.f_m_size, opacity:this.state.opacity}]}>{MONTH_LETER[this.state.curmon]}</Text>
                            <Text style={[styles.txt_events, {fontSize:this.state.f_e_size, opacity:this.state.e_opacity}]}>15 Events</Text>
                        </View>
                        <View style={styles.item_col}>
                            <Text style={[styles.txt_day_sub, {fontSize:this.state.f_d_rs_size, opacity:this.state.rs_opacity}]}>{this.state.fday}</Text>
                            <Text style={[styles.txt_month_sub, {fontSize:this.state.f_m_rs_size, opacity:this.state.rs_opacity}]}>{MONTH_LETER[this.state.fmon]}</Text>
                            <Text style={[styles.txt_events_sub, {fontSize:this.state.f_e_rs_size, opacity:this.state.e_rs_opacity}]}>15 Events</Text>
                        </View>
                        <View style={styles.item_col}>
                            <Text style={[styles.txt_day_sub]}>{this.state.ffday}</Text>
                            <Text style={[styles.txt_month_sub]}>{MONTH_LETER[this.state.ffmon]}</Text>
                            <Text style={[styles.txt_events_sub]}>15 Events</Text>
                        </View>
                    </Animated.View>
                    <View style={styles.bottom_container}>
                        <View style={styles.line}></View>
                        <View style={styles.time_container}>
                            <Image source={icon_time} style={styles.icon_time}/>
                            <Text style={styles.txt_time}>4:21 PM</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.list_container}>
                    <KeyboardAwareScrollView>
                        <View style={styles.item_row}>
                            <View style={styles.item_left}>
                                <View style={styles.circle_green}/>
                                <Text style={styles.txt_date}>4:45</Text>
                                <Text style={styles.txt_status}>PM</Text>
                            </View>
                            <View style={styles.item_right}>
                                <Text style={styles.txt_title}>Keynote</Text>
                                <Text style={styles.txt_sub_title}>keynote1</Text>
                                <View style={styles.img_container}>
                                </View>
                            </View>
                        </View>
                        <View style={styles.item_row}>
                            <View style={styles.item_left}>
                                <View style={styles.circle_green}/>
                                <Text style={styles.txt_date}>2:20</Text>
                                <Text style={styles.txt_status}>PM</Text>
                            </View>
                            <View style={styles.item_right}>
                                <Text style={styles.txt_title}>Panel Discusstion</Text>
                                <Text style={styles.txt_sub_title}>Reducing financial risk</Text>
                                <View style={styles.img_container}>
                                    <Image source={img_avatar1} style={styles.img_avatar}/>
                                    <Image source={img_avatar2} style={styles.img_avatar}/>
                                    <Image source={img_avatar3} style={styles.img_avatar}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.item_row}>
                            <View style={styles.item_left}>
                                <View style={styles.circle_red}/>
                                <Text style={styles.txt_date}>11:20</Text>
                                <Text style={styles.txt_status}>AM</Text>
                            </View>
                            <View style={styles.item_right}>
                                <Text style={styles.txt_title}>Presentation 1</Text>
                                <Text style={styles.txt_sub_title}>Cryptocurrencies for Bdginners</Text>
                                <View style={styles.img_container}>
                                </View>
                            </View>
                        </View>
                        <View style={styles.item_row}>
                            <View style={styles.item_left}>
                                <View style={styles.circle_green}/>
                                <Text style={styles.txt_date}>9:40</Text>
                                <Text style={styles.txt_status}>AM</Text>
                            </View>
                            <View style={styles.item_right}>
                                <Text style={styles.txt_title}>Presentation 2</Text>
                                <Text style={styles.txt_sub_title}>Branchess banks of the future</Text>
                                <View style={styles.img_container}>
                                    <Image source={img_avatar4} style={styles.img_avatar}/>
                                    <Image source={img_avatar5} style={styles.img_avatar}/>
                                </View>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slider_container: {
        width: DEVICE_WIDTH,
        height: TOP_HEIGHT,
    },
    date_container: {
        width: DEVICE_WIDTH * 5 / 3,
        height: TOP_HEIGHT,
        flex: 1,
        flexDirection: 'row',
        zIndex: 20,
    },
    item_col: {
        width: DEVICE_WIDTH / 3,
        height: TOP_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt_day: {
        fontSize: 36,
        color: '#ffffff',
        opacity: INIT_OPC,
        backgroundColor: 'transparent',
    },
    txt_month: {
        fontSize: 30,
        color: '#ffffff',
        opacity: INIT_OPC,
        backgroundColor: 'transparent',
    },
    txt_events: {
        marginTop: 5,
        fontSize: 14,
        color: 'rgba(255, 255, 255, 1)',
        opacity: INIT_E_OPC,
        backgroundColor: 'transparent',
    },
    txt_day_sub: {
        fontSize: 28,
        color: 'rgba(255, 255, 255, 1)',
        opacity: INIT_S_OPC,
        backgroundColor: 'transparent',
    },
    txt_month_sub: {
        fontSize: 22,
        color: 'rgba(255, 255, 255, 1)',
        opacity: INIT_S_OPC,
        backgroundColor: 'transparent',
    },
    txt_events_sub: {
        marginTop: 5,
        fontSize: 10,
        opacity: INIT_ES_OPC,
        color: 'rgba(255, 255, 255, 1)',
        backgroundColor: 'transparent',
    },
    bottom_container: {
        width: DEVICE_WIDTH,
        height: 50,
        position: 'absolute',
        top: TOP_HEIGHT - 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    time_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 15,
    },
    line: {
        width: 30,
        height: 2,
        marginBottom: 10,
        backgroundColor: '#ff2f5b',
        borderRadius: 2,
    },
    icon_time: {
        width: 12,
        height: 12,
    },
    txt_time: {
        marginLeft: 5,
        fontSize: 16,
        color: 'white',
        backgroundColor: 'transparent',
    },
    list_container: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.575,
        backgroundColor: '#ffffff'
    },
    item_row: {
        width: DEVICE_WIDTH,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        paddingTop: 15,
        paddingBottom: 15,
        flex: 1,
        flexDirection: 'row'
    },
    item_left: {
        width: ITEM_LEFT,
        margin: 5,
        flex: 1,
        flexDirection: 'row'
    },
    circle_red: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#ff2f5b',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    circle_green: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#00c75f',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    txt_date: {
        fontSize: 24
    },
    txt_status: {
        color: 'grey',
        marginLeft: 5,
        marginTop: 10,
    },
    item_right: {
        width: DEVICE_WIDTH - ITEM_LEFT - 20,
        margin: 5,
    },
    txt_title: {
        fontSize: 16,
    },
    txt_sub_title: {
        color: 'grey'
    },
    img_container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
    },
    img_avatar: {
        width: 32,
        height: 32,
        marginLeft: 5,
    }
});
