import { useState } from 'react';
const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: "Fourth Wing", author: "Rebecca Yarros" },
        { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
    ]);
    const [formData, setFormData] = useState({
        title: "",
        author: "",
    });
    const initialState = {
        title: "",
        author: "",
    };
    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, formData]);
        setFormData(initialState);
    };
    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label for="">Title:</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={handleInputChange}
                            name="title"
                        />
                        <br />

                        <label for="">Author:</label>
                        <input
                            type="text"
                            value={formData.author}
                            onChange={handleInputChange}
                            name="author"
                        />
                        <br />

                        <button type="submit">Submit</button>
                        <br />
                    </form>
                </div>

                <h2>My Books</h2>
                <div className="bookCardsDiv">
                    {books.map((book) => (
                        <div className="bookCard">
                            <h4>{book.title}</h4>
                            <p>by {book.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Bookshelf;