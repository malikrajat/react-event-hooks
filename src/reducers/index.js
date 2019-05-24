import { combineReducers } from 'redux';
const songReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'All star', duration: '4:00'},
        { title: 'I want it', duration: '4:10'},
    ];
};
const SelectedSongReducer = (SelectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return SelectedSong;
} 
export default combineReducers({
   song: songReducer,
   selectedSong: SelectedSongReducer 
});