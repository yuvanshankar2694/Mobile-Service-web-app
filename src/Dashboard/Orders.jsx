import React, { useEffect, useState } from 'react'
import SideNav from './SideNav'
import { Link } from 'react-router-dom'
import OrderBack from '../components/Services/OrderBack'
const Orders = () => {

  const [orders,setorders]=useState([])

  useEffect(()=>{
    OrderBack.getAllOrders().then((response)=>{
      setorders(response.data);
      console.log(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }) 
  return (
    <div>
      <div className="d-flex">
        <div className="col-auto">
          <SideNav />
        </div>
        <div className="container pt-5 mx-5">
          <h2 className="text-center pb-5">Latest Order</h2>
          <Link className='btn btn-outline-primary'>Add Orders</Link><br /><br />
          <div className="row">
            <div className="col">
              <div className="card shadow">
                <div className="card-body">
                  <table className="table table-striped">
                    <thead className="text-center">
                      <tr>
                        <th>Order Id</th>
                        <th>Customer Name</th>
                        <th>Product Name</th>
                        <th>quantity</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {orders.map((ordermobile) => (
                        <tr key={ordermobile.id}>
                          <td>{ordermobile.id}</td>
                          <td>{ordermobile.customer}</td>
                          <td>{ordermobile.product}</td>
                          <td>{ordermobile.quantity}</td>
                          <td>{ordermobile.status}</td>
                          <td>
                            <Link
                              to="update-order"
                              className="btn btn-outline-warning"
                            >
                              Update
                            </Link>&ensp;
                            <Link to='' className='btn btn-outline-danger'>Delete</Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders