import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddBook = () => {
    const [newBook, setNewBook] = useState({
        name: '',
        author: '',
        price: '',
        bookImgUrl: '',
    });
    const [imageData, setImageData] = useState();


    const handleInputField = event => {
        const bookInfo = { ...newBook };
        bookInfo[event.target.name] = event.target.value;
        setNewBook(bookInfo);
    }

    const handleFileInput = event => {
        const data = new FormData();
        data.set('key', '617888b32f13454101eca1608e88c1dc');
        data.append('image', event.target.files[0]);
        setImageData(data);
    }

    const handleFormSubmit = event => {
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res => {
            const info = { ...newBook };
            console.log(res.data.data.display_url);
            info.bookImgUrl = res.data.data.display_url;
            setNewBook(info);
        })
        .catch(error => {
            console.log(error);
        });
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
                    <Form.File onChange={handleFileInput} required label="Add Book Cover Photo" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default AddBook;