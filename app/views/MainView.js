import React, {Component} from 'react'
import Dimensions from 'Dimensions';
import {
    StatusBar,
    Text,
    Platform,
    View,
    TouchableOpacity,
} from 'react-native'
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

import ActionBar from '../components/ActionBar';
import Wallpaper from '../components/Wallpaper';
import SideBar from '../components/SideBar'

import NewsfeedView from './newsfeed/Newsfeed';
import Timeline from './timeline/Timeline';
import Chat from './chat/Chat';
import Profile from './profile/Profile';

import MENU from '../utils/Consts';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class MainView extends Component {
    constructor() {
        super();
        this.state = {
            mode: MENU.Timeline
        };

        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.changeMode = this.changeMode.bind(this);
        this.onPressActionButton = this.onPressActionButton.bind(this);

        this.getTitle = this.getTitle.bind(this);
        this.renderView = this.renderView.bind(this);
    }

    componentWillMount() {

    }

    openDrawer = () => {
        this._drawer._root.open()
    };

    closeDrawer = () => {
        this._drawer._root.close()
    };

    changeMode(mode) {
        this.setState({
            mode: mode
        })
    };

    onPressActionButton() {
        if(this.state.mode === 0) {
            this.createNewNote('', true)
        } else if (this.state.mode === 1) {
            this.refs.dropboxNoteList.createNewNote()
        }
    };

    getTitle(mode) {
        if(mode === MENU.Home) {
            return 'Newsfeed';
        }
        else if(mode == MENU.Timeline) {
            return 'Timeline';
        }
        else if(mode === MENU.Chat) {
            return 'Overview';
        }
        else if(mode === MENU.Profile) {
            return 'Profile';
        }
        else {
            return 'Newsfeed';
        }
    };

    renderView(mode) {
        if(mode === MENU.Home) {
            return (
                <NewsfeedView/>
            );
        }
        else if(mode === MENU.Timeline) {
            return (
                <Timeline/>
            );
        }
        else if(mode === MENU.Chat) {
            return (
                <Chat/>
            );
        }
        else if(mode === MENU.Profile) {
            return (
                <Profile/>
            );
        }
        else {
            return (
                <NewsfeedView/>
            );
        }
    }

    render() {
        const { mode } = this.state;
        return (
            <Wallpaper>
            <Drawer
                ref={(ref) => {
                    this._drawer = ref
                }}
                content={
                    <SideBar
                        index={mode}
                        changeMode={this.changeMode}
                        onClose={() => this.closeDrawer()}/>
                }
                openDrawerOffset={0}
                panCloseMask={0}
            >
                <ActionBar
                    openDrawer={() => this.openDrawer()}
                    title={this.getTitle(mode)}
                    enableRightButton={mode}
                />
                {this.renderView(mode)}
            </Drawer>
            </Wallpaper>
        )
    }
}
