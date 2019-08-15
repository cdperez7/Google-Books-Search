import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { BookListItem, BookList } from "../components/BookList";
import { Container } from "../components/Grid";
import "./style.css";

class Saved extends Component {
  state = {
    books: []
  };


  componentDidMount() {
    API.getSavedBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };


  handleDeleteBook = id => {
    API.deleteBook(id)
      .then(res => this.componentDidMount())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <div>
          <h1>Saved Books</h1>
          <Container>
            <BookList>
              {this.state.books.map(book => {
                return (
                  <BookListItem
                    key={book._id}
                    title={book.title}
                    link={book.link}
                    authors={book.authors}
                    description={book.description}
                    image={book.image}
                    Button={() => (
                      <button onClick={() => this.handleDeleteBook(book._id)} >Delete</button>
                    )}
                  />
                );
              })}
            </BookList>
          </Container>
        </div>
      </div>
    );
  }
}

export default Saved;