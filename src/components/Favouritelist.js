import React, { Component } from 'react'
import axios from 'axios';

class Favouritelist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    componentDidMount(){
      this.setState({ posts: JSON.parse(localStorage.getItem('favouriteList')) });
      
    }
    
    render() {
        console.log(this.state.posts);
        return (
            <div>
                favourite detail
                {
                    this.state.posts.map(post =>
                        <div key={post.id}>
                           { post.isFavourite ?
                            <div>{post.name}
                            </div>
                            : null}
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Favouritelist
