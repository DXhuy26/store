import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookServices from '../services/BookServices';

const ListBooks = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        getAllBooks();
    }, [])

    const getAllBooks = () => {
        BookServices.getAllBooks().then((res) => {
            setBooks(res.data)
            console.log(res.data);
        }).catch(error => {
            console.log(error);
        })
    }

    //xoa book
    const deleteBook = (bookId) => {
        BookServices.deleteBook(bookId).then((res) => {
            getAllBooks();

        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <div className="container">
            <h2 className='text-center'>List Books</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AUTHOR</th>
                    <th>PUBLICATION</th>
                    <th>PRICE</th>
                    <th>ACTION</th>

                </thead>
                <tbody>
                    {
                        books.map(
                            book =>
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.publication}</td>
                                    <td>{book.price}</td>
                                    <td>
                                        <Link to={`/edit-book/${book.id}`} className="btn btn-info bm-2">EDIT</Link>
                                        <button className="btn btn-danger" onClick={() => deleteBook(book.id)}
                                            style={{ marginLeft: "10px" }}>DELETE</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListBooks;