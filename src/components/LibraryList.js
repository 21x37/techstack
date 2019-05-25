import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends React.Component {
    constructor(props) {
        super(props);
    }
    renderItem(library) {
        return <ListItem library={library}/>
    }
    render() {
        return (
            <FlatList 
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => library.id.toString()}
            />
        )
    };
};

const mapStateToProps = (state) => ({
    libraries: state.libraries
});

export default connect(mapStateToProps)(LibraryList);
