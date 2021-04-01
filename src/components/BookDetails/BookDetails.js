import { IconButton } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const BookDetails = ({book, handleDelete}) => {
    const {name, price, author, _id} = book;

    return (
        <tr>
            <td>{name}</td>
            <td>{author}</td>
            <td>{price}</td>
            <td>
                <IconButton color="primary" style={{color: '#3BC83B'}}>
                    <EditIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleDelete(_id)}>
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
    );
};

export default BookDetails;