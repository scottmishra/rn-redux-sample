import React, {Component} from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {actions} from '../Actions'; 
import {LANGUAGE_TYPES} from "../Constants/Utilities";

const button_colors ={
    red: "#f4424b",
    blue: "#0610a3"
}

class ButtonToggles extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            button_color: button_colors.red
        }
        this.buttonPress = this.buttonPress.bind(this)
    }

    buttonPress(){
        if(this.state.button_color == button_colors.red){
            this.setState({
                button_color: button_colors.blue
            });
            this.props.setLanguage(LANGUAGE_TYPES.es)
            console.log(this.props)
        }else{
            this.setState({
                button_color: button_colors.red
            });
            this.props.setLanguage(LANGUAGE_TYPES.en)
        }
    }

    render(){
        return (
            <View>
                <Button
                    onPress={this.buttonPress}
                    title="ES"
                    color= {this.state.button_color}
                    accessibilityLabel="Switch Language to English"
                />
                <Button
                    onPress={this.buttonPress}
                    title="EN"
                    color={this.state.button_color}
                    accessibilityLabel="Switch Language to Spanish"
                />
            </View>
        )
    }
}

const mapStatesToProps = state => {
    return {
        languages: state.lang.language
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(actions.lang, dispatch)
);

export default connect(mapStatesToProps, mapDispatchToProps)(ButtonToggles);