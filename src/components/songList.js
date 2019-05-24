import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectSong } from '../actions';

class SongList extends Component {
    renderList () {
        return  this.props.song.map(
            res => {
                return (
                    <div className="item" key={res.title}>
                        <div className="right floated content">
                            <button className="ui button primary" 
                            onClick={ () => this.props.SelectSong(res) }>
                                select
                            </button>
                        </div>
                        <div className="content">{res.title}</div>
                    </div>
                );
            }
        )
    }
    render() {
        return <div className="ui divied list">{ this.renderList() }</div>
    }
}
const mapStateToProps = state => {
    return { song: state.song };
}

export default connect(mapStateToProps, { SelectSong })(SongList);