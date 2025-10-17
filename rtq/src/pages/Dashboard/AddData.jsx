import React, { useState } from "react";
import { useAddPostMutation } from "../../fetures/productapicall";
import { useNavigate } from "react-router-dom";

const AddData = () => {
  const [addPost] = useAddPostMutation();
 const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    price: "",
    quntity: "",
    description: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (e) => {
    setData({ ...data, image: e.target.files[0] });
  };

  const handleAddData = async (e) => {
    e.preventDefault();
    console.log(data);
    
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    const res = await addPost(formData);
    console.log(res);
    navigate("/")
   
    // setData({ name: "", price: "", quantity: "", desc: "", category: "", image: null });
  };

  return (
    <form
      onSubmit={handleAddData}
      className="w-screen h-screen mt-5 p-5"
      encType="multipart/form-data"
    >
      <label className="mr-6">Product Name: </label>
      <input
        type="text"
        name="name"
        className="w-60 border border-gray-400 rounded-lg mb-3"
        value={data.name}
        onChange={handleChange}
      />
      <br />

      <label className="mr-8">Product Price: </label>
      <input
        type="number"
        name="price"
        className="w-60 border border-gray-400 rounded-lg mb-3"
        value={data.price}
        onChange={handleChange}
      />
      <br />

      <label className="mr-3">Product Quantity: </label>
      <input
        type="text"
        name="quntity"
        className="w-60 border border-gray-400 rounded-lg mb-3"
        value={data.quntity}
        onChange={handleChange}
      />
      <br />

      <label>Product Description: </label>
      <input
        type="text"
        name="description"
        className="w-60 border border-gray-400 rounded-lg mb-3"
        value={data.description}
        onChange={handleChange}
      />
      <br />

      <label>Product Category: </label>
      <input
        type="text"
        name="category"
        className="w-60 border border-gray-400 rounded-lg mb-3"
        value={data.category}
        onChange={handleChange}
      />
      <br />

      <label>Product Image: </label>
     <input type="file" name="image" onChange={handleFileChange} />
      <br />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add Data
      </button>
    </form>
  );
};

export default AddData;
