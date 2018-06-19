import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class TextDisplay extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <View>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Text>{this.props.langStrings.ThankYou}</Text>
            </View>
        )
    }
}

const mapStatesToProps = state => {
    return {
        languages: state.lang.language,
        langStrings: state.lang.language_strings
    }
}

export default connect(mapStatesToProps)(TextDisplay);