import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import {UserContext} from '../../App';
import BookDetails from '../BookDetails/BookDetails';
const ManageBooks = () => {
    const [user] = useContext(UserContext);
    const { email } = user;
    const [addedBooks, setAddedBooks] = useState([]);

    const fetchAddedBooksData = userEmail => {
        fetch(`http://localhost:1712/addedBooks/${userEmail}`)
        .then(res => res.json())
        .then(data => setAddedBooks(data));
    }

    useEffect(() => {
        fetchAddedBooksData(email);
    }, [email])

    const handleDelete = id => {
        fetch(`http://localhost:1712/deleteBook/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(result =>{
            if(result){
                fetchAddedBooksData(email);
                alert('Book Deleted Successfully');
            }
        })
    }

    return (
        <Container>
            <Table striped bordered hover variant="dark" responsive className="mt-3">
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        addedBooks.map(book => <BookDetails book={book} handleDelete={handleDelete} />)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageBooks;