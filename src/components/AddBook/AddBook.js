import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddBook = () => {
    const [newBook, setNewBook] = useState({
        name: '',
        author: '',
        price: '',
        bookImgUrl: '',
    });

    const handleInputField = event => {
        const bookInfo = {...newBook};
        bookInfo[event.target.name] = event.target.value;
        setNewBook(bookInfo);
    }

    const handleFormSubmit = event => {
        console.log(newBook);
        event.preventDefault();
    }
    return (
        <div>
            <h3>Add Book</h3>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control name="name" onBlur={handleInputField} required type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Author Name</Form.Label>
                    <Form.Control name="author" onBlur={handleInputField} required type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Add Price</Form.Label>
                    <Form.Control name="price" onBlur={handleInputField} required type="number" placeholder="Enter Price" />
                </Form.Group>
                <Form.Group>
                    <Form.File label="Add Book Cover Photo" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default AddBook;