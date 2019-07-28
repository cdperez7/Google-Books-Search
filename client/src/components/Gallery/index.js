import React, { Component } from 'react';
import Save from "../Save";
import API from "../../utils/API";

class Gallery extends Component {
    saveBooks(props) {
        API.saveBook({
            title: props.title,
            authors: props.authors,
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
                    ) : null
                }

                {
                    this.props.items.map((item, index) => {
                        let { title, imageLinks, infoLink, description, authors } = item.VolumeInfo;
                        // let bookTitle = item.volumeInfo.title;

                        return (
                            <div key={index} className="col-sm-12 col-md-4 col-log-12 book-column">
                                <div className="book-wrapper">
                                    <Save
                                        title={item.volumeInfo.title}
                                        authors={item.volumeInfo.authors}
                                        description={item.volumeInfo.description}
                                        image={item.volumeInfo.imageLinks}
                                        link={item.volumeInfo.infoLink}
                                        saveBook={this.saveBook}
                                    />
                                    <a className="book" href={infoLink} target="_blank">
                                        <div className="book-title white-text">
                                            <h3>{title}</h3>
                                        </div>
                                    </a>

                                    <p className="authors"><strong>Author: {authors}</strong></p>
                                    <div className="book-inner-flex">
                                        <a className="book" href={infoLink} target="_blank">
                                            <div className="book-image-wrapper">
                                                <img src={imageLinks !== undefined ? imageLinks.thumbnail : altImage}
                                                    alt=""
                                                    className="book-image"
                                                />
                                            </div>
                                        </a>
                                        <div className="description">
                                            <div><strong>Description: </strong></div>{description}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;