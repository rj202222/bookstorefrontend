import React, { useState } from "react";
import axios from "axios";

export default function addbook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [decription, setDecsription] = useState("");

  const PostBook = () => {
    axios
      .post("https://kvt-bookstore-api1.herokuapp.com/book/add", {
        name: name,
        author: author,
        price: price,
        description: description,
      })

      .post()
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <h1>add a book!</h1>
      <h1>{name}</h1>
      <form>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="name"
        />

        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="author"
        />
        <input
          onChange={(event) => setPrice(event.target.value)}
          type="text"
          placeholder="price"
        />
        <input
          onChange={(event) => setDecription(event.target.value)}
          type="text"
          placeholder="Description"
        />
        <input type="text" placeholder="name" />
        <input type="text" placeholder="author" />
        <input type="number" placeholder="price" />
        <textarea type="text" placeholder="description" />
        <button>add book!</button>
      </form>
    </div>
  );
}
