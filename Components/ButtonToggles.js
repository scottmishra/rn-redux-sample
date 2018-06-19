import React, {Component} from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';

import {actions} from '../Actions/language' 

class ButtonToggles extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <Button
                    
                    title="ES"
                    color="#841584"
                    accessibilityLabel="Switch Language to English"
                />
                <Button
                    title="EN"
                    color="#841584"
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

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStatesToProps)(ButtonToggles);