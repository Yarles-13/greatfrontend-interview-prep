import React, { useEffect, useState } from 'react';
import SearchBar from "./SearchBar";

const NewApp = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchBooks = async () => {
      try {
        const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setBooks(data.docs.slice(0, 10)); // only top 10 results
      } catch (err) {
        console.error('Error fetching books:', err);
      }
    };

    fetchBooks(); // call it when query changes
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Open Library Search</h1>
      <SearchBar onSearch={setQuery} />

      <ul>
        {books.length === 0 && <p>No books found.</p>}
        {books.map((book, i) => (
          <li key={i}>
            <strong>{book.title}</strong> {book.author_name ? `by ${book.author_name.join(', ')}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewApp;
