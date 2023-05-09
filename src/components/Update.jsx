import React from "react";

const Update = () => {
  return (
    <div>
      <h2 className="text-2xl">Update chocolates</h2>
      <form>
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
        <input type="submit" value="Update" className="px-5 py-2 bg-slate-300 mt-5 border" />
       
      </form>
    </div>
  );
};

export default Update;
