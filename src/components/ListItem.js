import React from 'react';
import { Text, TouchableWithoutFeedback, View, UIManager, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);
        this.renderDescription = this.renderDescription.bind(this);
    }
    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental(true);

        LayoutAnimation.spring();
    }
    onPress() {
        this.props.selectLibrary(this.props.library.item.id);
    }
    renderDescription() {
        if (this.props.expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{this.props.library.item.description}</Text>
                </CardSection>
            )
        }
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{this.props.library.item.title}</Text>
                    </CardSection>
                        {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    };
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => ({
    expanded: state.selectedLibraryId === ownProps.library.item.id
});

export default connect(mapStateToProps, actions)(ListItem);