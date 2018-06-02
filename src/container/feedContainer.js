// import { connect } from 'react-redux';
// import FeedComponent from '../components/FeedComponent';

// //Actions ?
// import { fetchFeedAction, fetchSuccessAction, fetchFailedAction } from '../actions';

// const mapStateToProps = (state) => {        
//     return {        
//         feed: state.feedReducers
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {    
//         onFetchFeed: () => {                        
//             dispatch(fetchFeedAction());
//         }, 
//         //Not necessary !   
//         // onSuccessFetch: () => {                        
//         //     dispatch(fetchSuccessAction());
//         // }, 
//     };
// }
// const feedContainer = connect(mapStateToProps, mapDispatchToProps)(FeedComponent);
// export default feedContainer;