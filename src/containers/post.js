import React, { Component } from 'react'
import PostContent from '../components/post-content'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {readPost} from '../actions/index'

class Post extends Component {

    componentWillMount() {
        this.props.readPost(this.props.params.id)
    }

    renderPostContent(){
        const{post} = this.props;
        if(post){
            return <PostContent post={this.props.post}/>;
        }
    }
    

    render() {
        console.log(this.props)
        return (
            <div>
                {this.renderPostContent()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.postActive
    }
};

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({readPost}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Post)