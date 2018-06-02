import React, { Component } from 'react';
import Button from 'react-native-button';
import { connect } from "react-redux";

import { Text, View, Image, Alert, Platform, TextInput, FlatList } from 'react-native';
//import feedContainer from '../container/feedContainer'
import { fetchFeedAction, fetchSuccessAction, fetchFailedAction } from '../actions';


class FeedComponent extends Component {
    componentDidMount() {
        this.props.onFetchFeed();
    }

    getFeed(){
        const {feed} = this.props
        return feedData = feed.receivedFeed.map((rssFeed, key) => {
            return <Text key={key}>{rssFeed.channel.item.title}</Text>
        })
    }
    

    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <View style={{ height: 70, flexDirection: 'row' }}>
                    {this.props.feed.isFetching && <Text>Loading</Text>}
                    {
                        this.props.feed.receivedFeed.length ?
                            this.getFeed()
                        : null
                    }
                </View>
                <Text>Hi</Text>
                
                {/* <FlatList
                    data={this.props.feed}
                    keyExtractor={(item) => item.rss}
                    renderItem={({ item, index }) => <Text style={{
                        padding: 10,
                        fontWeight: 'bold',
                        fontSize: 17, 
                        color: 'white',
                        backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                    }}>
                        {`${item.channel},Description=${item.description}`}
                    </Text> 
                    }/> */}
            </View> 
        );
    }
}


{/* <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
<Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
    Redux Saga tutorials - Movies list
</Text>
<Text style={{ margin: 10, color: 'black', fontSize: 20 }}>
    New movie information
</Text>
<View style={{ height: 100, margin: 10 }}>
    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => this.setState({ movieName: text })}
        value={this.state.movieName}
        placeholder='Enter new movie name'
    />
    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120 }}
        onChangeText={(text) => this.setState({ releaseYear: text })}
        value={this.state.releaseYear}
        placeholder='Release year'
    />
</View>
<View style={{ height: 70, flexDirection: 'row' }}>
    <Button
        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
        style={{ fontSize: 18, color: 'white' }}
        onPress={() => {this.props.onFetchFeed}}>
        Fetch Feed
    </Button>
</View>
<FlatList
    data={this.props.feed}
    keyExtractor={(item) => item.name}
    renderItem={({ item, index }) => <Text style={{
        padding: 10,
        fontWeight: 'bold',
        fontSize: 17, 
        color: 'white',
        backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
    }}>
        {`${item.name},releaseYear=${item.feedDescription}`}
    </Text>
    }
/>
</View> */}
const mapStateToProps = (state) => {        
    return {        
        feed: state.feedReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchFeed: () => {                        
            dispatch(fetchFeedAction());
        }, 
        //Not necessary !   
        // onSuccessFetch: () => {                        
        //     dispatch(fetchSuccessAction());
        // }, 
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(FeedComponent);
