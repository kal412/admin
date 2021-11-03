import "../styles/Landings.css";
import axios from "axios";
import { useState } from "react";

const Landing = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    let item = {
      name: name,
      image: image,
      title: title,
    };
    e.preventDefault();
    console.log(item);
    axios
      .patch(
        "http://localhost:4000/api/v1/update-landing/6176e6d75359ff3fd6693110",
        item
      )
      .then((response) => console.log(response.data));
  };

  return (
    <div className="landing">
      <form className="landing-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="form-field">
          <input
            type="file"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <label htmlFor="image">Image</label>
        </div>

        <div className="form-field">
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="title">Title</label>
        </div>

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Landing;
