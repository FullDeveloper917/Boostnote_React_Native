import React from 'react';
import Dimensions from 'Dimensions';
import { View, Text, StyleSheet, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import img from '../assets/img/1.png';
import img_comment from '../assets/img/icon_comment.png';
import icon_e from '../assets/img/icon_e.png';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const ROW_HEIGHT = 80;

const styles = StyleSheet.create({
    container: {
        width: DEVICE_WIDTH,
        height: ROW_HEIGHT,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    photo: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginLeft: 10,
    },
    contents: {
        paddingTop: 5,
        width: DEVICE_WIDTH - 80,
        height: ROW_HEIGHT - 30,
    },
    text: {
        marginLeft: 15,
        fontSize: 16,
        fontFamily: 'Montserrat',
    },
    btn_contents: {
        width: DEVICE_WIDTH - 80,
        height: 30,
        flex: 1,
        flexDirection: 'row',
    },
    like_contents: {
        width: DEVICE_WIDTH * 0.2,
        height: 30,
        marginLeft: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    com_contents: {
        width: DEVICE_WIDTH * 0.2,
        height: 30,
        marginLeft: 15,
        flex: 2,
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    dot_contents: {
        width: 30,
        height: 30,
        marginTop: 3,
        marginRight: 5,
        alignItems: 'flex-end'
    },
    icon_size : {
        fontSize: 12,
        color: '#a2a1b8',
    },
    img_size : {
        width: 13,
        height: 13,
    },
    like_text: {
        marginLeft: 5,
        fontSize: 13,
        fontFamily: 'Montserrat',
        color: 'grey',
    }
});

const Row = (props) => (
    <View style={styles.container}>
        <Image source={img} style={styles.photo} />
        <View>
            <View style={styles.contents}>
                <Text style={styles.text}>
                    {props.name}Lorem Ipsum is simply dummy text of the printing and typesetting
                </Text>
            </View>
            <View style={styles.btn_contents}>
                <View style={styles.like_contents}>
                    <Icon name='heart-o' style={styles.icon_size}/>
                    <View>
                        <Text style={styles.like_text}>36 Likes</Text>
                    </View>
                </View>
                <View style={styles.com_contents}>
                    <Image source={img_comment} style={styles.img_size}/>
                    <View>
                        <Text style={styles.like_text}>56 Comments</Text>
                    </View>
                </View>
                <View style={styles.dot_contents}>
                    <Image source={icon_e} style={styles.img_size}/>
                </View>
            </View>
        </View>
    </View>
);

export default Row;