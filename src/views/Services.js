import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services">
      <form className="services-form">
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input type="text" name="" />
        </div>

        <div className="form-field">
          <label htmlFor="image">Image</label>
          <input type="file" name="" />
        </div>

        <div className="form-field">
          <label htmlFor="description">Description</label>
          <input type="text" name="" />
        </div>

        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Services;
