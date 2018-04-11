import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ListView,
    Platform,
    StatusBar,
} from 'react-native';

import ImageSlider from './ImageSlider';
import Row from '../../components/Row';

const DEVICE_WIDTH = Dimensions.get('window').width;
var DEVICE_HEIGHT = Dimensions.get('window').height;

if(Platform.OS == 'android') {
    DEVICE_HEIGHT = DEVICE_HEIGHT - StatusBar.currentHeight;
}

const MARGIN = 44;

export default class Newsfeed extends Component {
    constructor() {
        super();

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            position: 0,
            dataSource: ds.cloneWithRows([{'name':""}, {'name':""}, {'name':""}, {'name':""}, {'name':""}]),
        };

        this.btnStyle = this.btnStyle.bind(this);
    }

    btnStyle(index) {
        var bStyle = {
            backgroundColor: '#d2691e',
            alignItems: 'center',
            justifyContent: 'center',
            width: DEVICE_WIDTH / 4,
            height: MARGIN,
        };

        if(index == 0) {
            bStyle.width = DEVICE_WIDTH * 0.2;
        }
        else if(index == 1) {
            bStyle.width = DEVICE_WIDTH * 0.25;
        }
        else if(index == 2) {
            bStyle.width = DEVICE_WIDTH * 0.25;
        }
        else if(index == 3) {
            bStyle.width = DEVICE_WIDTH * 0.3;
        }

        return bStyle;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.slider_container}>
                    <ImageSlider
                        images={[
                            '../../assets/img/1.png',
                            '../../assets/img/2.png',
                            '../../assets/img/3.png',
                            '../../assets/img/4.png',
                            '../../assets/img/5.png',
                        ]}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({position})}/>
                </View>
                <View style={styles.tab_container}>
                    <View style={styles.tab_bar}>
                        <TouchableOpacity style={this.btnStyle(0)}
                                          activeOpacity={1} >
                            <Text style={styles.text}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.btnStyle(1)}
                                          activeOpacity={1} >
                            <Text style={styles.text}>Featured</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.btnStyle(2)}
                                          activeOpacity={1} >
                            <Text style={styles.text}>Popular</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.btnStyle(3)}
                                          activeOpacity={1} >
                            <Text style={styles.text}>My Favorites</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tab_contents}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={(data) => <Row {...data} />}
                            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                        />
                    </View>
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
        height: DEVICE_HEIGHT * 0.425,
    },
    tab_container: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.575,
        // backgroundColor: '#ffffff'
    },
    tab_bar: {
        backgroundColor: '#d2691e',
        width: DEVICE_WIDTH,
        height: MARGIN,
        flexDirection: 'row',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'Montserrat',
    },
    tab_contents: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.575 - MARGIN,
        backgroundColor: '#ffffff',
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    transparent: {
        backgroundColor: 'transparent'
    }
});
