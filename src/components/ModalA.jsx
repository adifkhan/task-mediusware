import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const ModalA = () => {
  const [isEven, setIsEven] = useState(false);
  const navigate = useNavigate();
  const [allContacts, setAllContacts] = useState([]);
  const evenContacts = allContacts.filter((contact) => contact.id % 2 === 0);
  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((res) => res.json())
      .then((data) => setAllContacts(data.results));
  }, []);
  //   console.log(evenContacts);
  return (
    <div style={{ backdropFilter: "blur(50px)" }}>
      <div
        style={{
          width: "80%",
          margin: "50px auto",
          background: "#4D4C7D",
          padding: "30px 50px",
          borderRadius: "20px",
        }}
      >
        <div className="d-flex justify-content-between align-items-center my-3">
          <button
            className="btn btn-lg fw-semibold"
            style={{ color: "#fff", background: "#46139F", border: "none" }}
            onClick={() => navigate("/problem-2/modalA")}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg fw-semibold"
            style={{ color: "#fff", background: "#ff7f50", border: "none" }}
            onClick={() => navigate("/problem-2/modalB")}
          >
            Us Contacts
          </button>
          <button
            className="btn btn-lg fw-semibold"
            style={{ color: "#fff", background: "#46139F", border: "none" }}
            onClick={() => navigate("/problem-2")}
          >
            Close
          </button>
          <div
            className="d-flex align-items-center"
            style={{
              border: "2px solid #fff",
              borderRadius: "10px",
              height: "40px",
            }}
          >
            <input
              type="search"
              name=""
              id=""
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                color: "#fff",
                padding: "2px 8px",
              }}
            />
            <span
              style={{
                fontSize: "24px",
                display: "flex",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <BiSearch />
            </span>
          </div>
        </div>
        <table className="table text-center text-white">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Country Name</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {isEven
              ? evenContacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.id}</td>
                    <td>{contact.country.name}</td>
                    <td>{contact.phone}</td>
                  </tr>
                ))
              : allContacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.id}</td>
                    <td>{contact.country.name}</td>
                    <td>{contact.phone}</td>
                  </tr>
                ))}
          </tbody>
        </table>
        <div className="fw-semibold fs-5 text-white">
          <label htmlFor="even">
            <input
              type="checkbox"
              name="even"
              id="even"
              onChange={() => setIsEven(!isEven)}
            />{" "}
            Only even
          </label>
        </div>
      </div>
    </div>
  );
};

export default ModalA;
