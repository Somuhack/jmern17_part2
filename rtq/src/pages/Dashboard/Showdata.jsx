import React from "react";
import { useGetAllProducQuery } from "../../fetures/productapicall";
import { NavLink } from "react-router-dom";
const Showdata = () => {
  const {data, error, isLoading } = useGetAllProducQuery();
  console.log(data);
  
  return (
    <div className="overflow-x-auto">
        <h1 className="text-3xl text-center m-5 text-blue-400 font-bold">Product DashBoard</h1>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>product_name</th>
        <th>product_price</th>
        <th>product_quntity</th>
        <th>product_desc</th>
        <th>product_category</th>
        <th>product_image</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      {/* row 3 */}
      {data?.data.map((item)=>(
           <tr key={item.id}>
          <td>{item.product_name}</td>
          <td>{item.product_price}</td>
          <td>{item.product_quntity}</td>
          <td>{item.product_desc}</td>
          <td>{item.product_category}</td>
          <td><img src={item.product_image} width={100}/></td>
          <td className="flex gap-2">
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-error">Delete</button></td>
        </tr>
         ))}
    </tbody>
  </table>
  <div className="text-center">
   <NavLink to={"addata"}><button className="btn btn-success">Add Product</button></NavLink>
  </div>
</div>
  );
};

export default Showdata;
