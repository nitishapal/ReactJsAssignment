import React, { Component } from 'react';
import axios from 'axios';

class Favourite extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: '',
            checked: false,
            favouriteList: []
        }
    }

    componentDidMount() {
        axios.get('https://assignment-machstatz.herokuapp.com/planet').then((response => {
            console.log(response);
            const data = JSON.parse(localStorage.getItem('favouriteList'));
            const response1 = response.data.map((item) => {
                const result = data.filter((a1) =>
                    a1.id === item.id
                );
                if(result.length > 0){
                    item.isFavourite = result[0].isFavourite;
                }
                return item;
            });
            this.setState({ posts: response1 });
        })).catch((error => {
            console.log(error);
            this.setState({ error: 'Some error occurred' });
        }))
    }
    favouriteCheckbox = (post) => {
        console.log(post);
        
        const value = {
            ...post,
            isFavourite: !post.isFavourite
        };
        const posts = this.state.posts.map((item) => {
            if (item.id === post.id) {
                return value;
            } else {
                return item;
            }
        })
        console.log(post);
        console.log(posts);
        localStorage.setItem('favouriteList', (JSON.stringify(posts)));
        this.setState({
            posts,
        });
    };
    render() {
        const { posts, errormessage } = this.state;
        return (
            <div>
                List of data
                {
                    posts.map(post =>
                        <div key={post.id}>
                            <div>{post.name}
                                <input
                                    type="checkbox"
                                    checked={post.isFavourite}
                                    onChange={() => this.favouriteCheckbox(post)}
                                />
                            </div>
                        </div>
                    )
                }
                {errormessage ? <div>{errormessage}</div> : null}
            </div>
        )
    }
}

export default Favourite
