import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/travel/${id}`);
    setTitle(data.travel.title);
    setDescr(data.travel.descr);
    setImage(data.travel.image);
  };

  const updataHandler = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/travel/${id}`, {
      title,
      descr,
      image
    });
    navigate('/');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <form onSubmit={updataHandler} className="mt-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="descr" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="descr"
            name="descr"
            onChange={(e) => setDescr(e.target.value)}
            value={descr}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateBook;
