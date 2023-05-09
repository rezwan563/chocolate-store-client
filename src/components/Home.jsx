import React, { useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const loadChocolates = useLoaderData();
  const [chocolates, setChocolates] = useState(loadChocolates);
  const [edit, setEdit] = useState(false);
  const [previousData, SetPreviousData] = useState(null);
  const { photo, name, origin, category } = chocolates;
  //   console.log(chocolates);

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const origin = form.origin.value;
    const category = form.category.value;
    const newChocolate = { photo, name, origin, category };
    console.log(newChocolate);
    fetch("http://localhost:5000/chocolates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setChocolates(loadChocolates);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your chocolate has been added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDelete = (_id) => {
    console.log("Delete", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolates/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = chocolates.filter(
                (chocolate) => chocolate._id !== _id
              );
              Swal.fire(
                "Deleted!",
                "Your chocolate has been deleted.",
                "success"
              );
              setChocolates(remaining);
            }
          });
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const origin = form.origin.value;
    const category = form.category.value;
    const newChocolate = { photo, name, origin, category };
    console.log(newChocolate);
  };
  const handleEdit = (_id) => {
    setEdit(!edit);
    if (!edit) {
      fetch(`http://localhost:5000/chocolates/${_id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(object);
          SetPreviousData(data)
        });
    }
  };
  return (
    <div className="[100vh] ">
      <h2 className="text-3xl">This is home</h2>

      <div className="grid grid-cols-2 gap-10">
        <table className="table-auto ">
          <caption className="caption-top">Chocolate Mangement system</caption>
          <thead className="bg-orange-200">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Origin</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          {chocolates.map((chocolate) => (
            <tbody key={chocolate._id}>
              <tr>
                <td>
                  <img className="h-48 w-48" src={chocolate.photo} alt="" />
                </td>
                <td>{chocolate.name}</td>
                <td>{chocolate.origin}</td>
                <td>{chocolate.category}</td>
                <td className="flex justify-center gap-5 ">
                  <FaRegEdit
                    onClick={() => handleEdit(chocolate._id)}
                  ></FaRegEdit>{" "}
                  <FaTrashAlt
                    onClick={() => handleDelete(chocolate._id)}
                  ></FaTrashAlt>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <div>
          {edit ? (
            <form onSubmit={handleUpdate} className="border">
              <h2 className="text-2xl">Update chocolate information</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chocolate picture</span>
                </label>
                <label className="input-group">
                  <span>Photo</span>
                  <input
                  defaultValue={previousData.photo}
                    name="photo"
                    type="text"
                    placeholder="photo"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chocolate name</span>
                </label>
                <label className="input-group">
                  <span>Name</span>
                  <input
                  defaultValue={previousData.name}
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chocolate origin</span>
                </label>
                <label className="input-group">
                  <span>Origin</span>
                  <input
                  defaultValue={previousData.origin}
                    name="origin"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chocolate Category</span>
                </label>
                <label className="input-group">
                  <span>Category</span>
                  <input
                  defaultValue={previousData.category}
                    name="category"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <input
                type="submit"
                value="Update "
                className="px-5 py-2 bg-slate-300 mt-5 border"
              />
            </form>
          ) : (
            <form onSubmit={handleAdd} className="border">
              <h2 className="text-2xl">Add your chocolate information</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chocolate picture</span>
                </label>
                <label className="input-group">
                  <span>Photo</span>
                  <input
                    name="photo"
                    type="text"
                    placeholder="photo"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chocolate name</span>
                </label>
                <label className="input-group">
                  <span>Name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chocolate origin</span>
                </label>
                <label className="input-group">
                  <span>Origin</span>
                  <input
                    name="origin"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chocolate Category</span>
                </label>
                <label className="input-group">
                  <span>Category</span>
                  <input
                    name="category"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <input
                type="submit"
                value="Add "
                className="px-5 py-2 bg-slate-300 mt-5 border"
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
