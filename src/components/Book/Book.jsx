import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, image, author, tags } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        className='w-full h-full object-cover'
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-center gap-4">
                        {
                            tags.map((tag,idx) => <button key={idx} className='btn btn-xs'>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By {author}</p>
                    <div className="divider"></div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;