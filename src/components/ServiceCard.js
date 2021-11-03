import { useState } from "react";
import "../styles/ServiceCard.css";
import storage from "../firebase";
import axios from "axios";

const ServiceCard = ({ service }) => {
  const [title, setTitle] = useState(service.title);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(service.description);

  async function uploadFile(folder, file) {
    let snapshot = await storage
      .ref(`${folder}/${file.name}`)
      .put(file)
      .then((snapshot) => {
        return snapshot;
      });
    let url = await snapshot.ref.getDownloadURL().then((url) => {
      // console.log(url)
      return url;
    });
    return new Promise((resolve) => {
      resolve(url);
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    var image_url = await uploadFile("images", image);
    let item = {
      title: title,
      image: image_url,
      description: description,
    };
    axios
      .patch(
        `https://portfolio-api-kalyan.herokuapp.com/api/v1/update-service/${service._id}`,
        item
      )
      .then((response) => {
        setDescription("");
        setTitle("");
        e.target.reset();
        alert("Data updated successfully");
      });
  };

  return (
    <form className="services-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className="form-field">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
      </div>

      <div className="form-field">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>

      <input type="submit" value="Add" />
    </form>
  );
};

export default ServiceCard;
