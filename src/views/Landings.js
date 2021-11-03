import "../styles/Landings.css";
import axios from "axios";
import { useEffect, useState } from "react";
import storage from "../firebase";

const Landing = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get("https://portfolio-api-kalyan.herokuapp.com/api/v1/index")
      .then((res) => {
        setName(res.data[0].landing[0].name);
        setTitle(res.data[0].landing[0].title);
      });
  }, []);

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
      name: name,
      image: image_url,
      title: title,
    };
    axios
      .patch(
        "https://portfolio-api-kalyan.herokuapp.com/api/v1/update-landing/6176e6d75359ff3fd6693110",
        item
      )
      .then((response) => {
        setName("");
        setTitle("");
        e.target.reset();
        alert("Data updated successfully");
      });
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
            onChange={(e) => {
              setImage(e.target.files[0]);
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
