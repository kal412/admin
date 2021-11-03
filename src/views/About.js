import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <form className="about-form">
        <div className="form-field">
          <input type="text" />
          <label htmlFor="title">Title</label>
        </div>

        <div className="form-field">
          <input type="text" />
          <label htmlFor="description">Description</label>
        </div>

        <div className="form-field">
          <input type="file" />
          <label htmlFor="portfolio">Portfolio File</label>
        </div>

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default About;
