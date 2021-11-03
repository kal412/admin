import "../styles/About.css";
import axios from "axios";
import { useEffect, useState } from "react";
import storage from "../firebase";

const About = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    axios
      .get("https://portfolio-api-kalyan.herokuapp.com/api/v1/index")
      .then((res) => {
        setTitle(res.data[0].about[0].title);
        setDescription(res.data[0].about[0].description);
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
    var file_url = await uploadFile("files", portfolio);
    let item = {
      title: title,
      description: description,
      link: file_url,
    };

    console.log(item);
    axios
      .patch(
        "https://portfolio-api-kalyan.herokuapp.com/api/v1/update-about/617a78f0d340c89fe43fdd4b",
        item
      )
      .then((response) => {
        setTitle("");
        setDescription("");
        e.target.reset();
        alert("Data updated successfully");
      });
  };

  return (
    <div className="about">
      <form className="about-form" onSubmit={handleSubmit}>
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

        <div className="form-field">
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <label htmlFor="description">Description</label>
        </div>

        <div className="form-field">
          <input
            type="file"
            onChange={(e) => {
              setPortfolio(e.target.files[0]);
            }}
          />
          <label htmlFor="portfolio">Portfolio File</label>
        </div>

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default About;
