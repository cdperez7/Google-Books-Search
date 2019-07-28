import React, { Component } from 'react';
// import Save from "../Save";
import API from "../../utils/API";

class Gallery extends Component {
    saveBooks(props) {
        API.saveBook({
            title: props.title,
            author: props.author,
            description: props.description,
            image: props.image,
            link: props.link,
        })
    }

    render() {
        let altImage = 'https://cdn.aarp.net/content/dam/aarp/money/budgeting_savings/2016/04/1140-yeager-sell-your-used-books.imgcache.rev6feda141288df73e8fd100822bb375ea.jpg';
        return (

            <div className="book-list-wrapper">
                {
                    this.props.query ? (
                        <div className="col-sm-12">
                            <p className="search-status">Here are your results for: {this.props.query}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

