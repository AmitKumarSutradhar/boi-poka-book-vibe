import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../utility/addToDB';

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    const { bookId: currentBookId, image } = book;

    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="w-1/2">
                    <img src={image} alt="" />
                </div>
                <div className="w-1/2">
                    <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg">Mark as Read</button>
                    <button onClick={handleMarkAsRead} className="btn btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;