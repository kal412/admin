import "../styles/Contacts.css";

import axios from "axios";
import { useEffect, useState } from "react";

import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";

const Contacts = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://retoolapi.dev/x2NCDz/contacts/1", {
        "Content-Type": "application/json",
      })
      .then((response) => {
        setItem(response.data);
      });
  }, []);

  if (!item) return null;

  return (
    <div className="contacts">
      <h1>Inbox</h1>
      <div className="inbox">
        <div className="userhead">
          <PersonIcon className="icon" />
        </div>

        <div className="inbox-text">
          <div className="username">
            {item.fullName} <span>{item.rating}</span>
          </div>

          <div className="message">
            {item.col1}
            <DeleteIcon className="delete" />
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Contacts;
