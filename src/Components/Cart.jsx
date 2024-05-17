import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { datas, removeFromCart, addToCart, deleteFromCart } from '../Features/OperationSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cart =useSelector((state)=>state.cart)// fetching the values from the store and saving it in cart variable
   
    let products= [
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "images": [
                    "https://tse4.mm.bing.net/th?id=OIP.yOL8tQyAqFuKHMWKaw-9mwHaHa&pid=Api&P=0&h=180",
                    "https://tse2.mm.bing.net/th?id=OIP.mWatu9S_TYn1uNfXCZIc1gHaHa&pid=Api&P=0&h=180",
                    "https://tse4.mm.bing.net/th?id=OIP.uB7ZQ8SJ8FdDf25uU_CFywHaHa&pid=Api&P=0&h=180",
                    "https://tse4.mm.bing.net/th?id=OIP.QVJIr_hf9bbu9NTZxF-aEAHaF6&pid=Api&P=0&h=180",
                    "https://tse1.mm.bing.net/th?id=OIP.M71mXu7kyV4yF_3zXvKXoAHaHq&pid=Api&P=0&h=180",
                ]
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
                "images": [
                    "https://tse2.mm.bing.net/th?id=OIP.41PIYYJF0fXJzTJ5X2DzswHaHa&pid=Api&P=0&h=180",
                    "https://tse1.mm.bing.net/th?id=OIP.E5jl2uUTKwqFecU0cqLz1AHaHa&pid=Api&P=0&h=180",
                    "https://tse3.mm.bing.net/th?id=OIP._sorhVgVo6QVEmNneAZsfwHaJG&pid=Api&P=0&h=180",
                    "https://tse4.mm.bing.net/th?id=OIP.lochyvMcAayefCqjuf0cagHaHa&pid=Api&P=0&h=180",
                ]
            },
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 1249,
                "discountPercentage": 15.46,
                "rating": 4.09,
                "stock": 36,
                "brand": "Samsung",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
                "images": [
                    "https://tse3.mm.bing.net/th?id=OIP.3w0NOFrOpAJTuq6FPZdMowHaHa&pid=Api&P=0&h=180",
                ]
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 280,
                "discountPercentage": 17.91,
                "rating": 4.3,
                "stock": 123,
                "brand": "OPPO",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
                "images": [
                    
                    "https://tse4.mm.bing.net/th?id=OIP.cpo6t9nz4c83mMa2pUk1UAHaHa&pid=Api&P=0&h=180",
                    "https://tse1.mm.bing.net/th?id=OIP.A935OsPrskoYUs80XykcXwHaHa&pid=Api&P=0&h=180",
                    "https://tse1.mm.bing.net/th?id=OIP.vZq8lzpq-V56ztoS0DiO-wHaFO&pid=Api&P=0&h=180",
                    "https://tse2.mm.bing.net/th?id=OIP.de2YcdAfvQ5CSlIIxqU9oQHaHa&pid=Api&P=0&h=180",
                    "https://tse4.mm.bing.net/th?id=OIP.22XNbC5Fz3U7YT-4Pn1fXgHaJ3&pid=Api&P=0&h=180",
                ]
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 499,
                "discountPercentage": 10.58,
                "rating": 4.09,
                "stock": 32,
                "brand": "Huawei",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
                "images": [
                    "https://tse4.mm.bing.net/th?id=OIP.RKJLiz2VlR3m2X4DXJRPbwHaHa&pid=Api&P=0&h=180",
                    "https://tse1.mm.bing.net/th?id=OIP.N09wBo-NAYi_2LnheBoZDAHaJ4&pid=Api&P=0&h=180",
                    "https://tse2.mm.bing.net/th?id=OIP.rw25dKVMHPZyq8bhtDFpxwHaHa&pid=Api&P=0&h=180",
                ]
            }
        ];
       
    useEffect(()=>{
        dispatch(datas(products));// the json data is updated to reducer action datas 
    },[dispatch])


    const deleteProduct = (id) => {
        dispatch(removeFromCart({id})) // to delete the product from the cart
       
      };
      const add = (id,stock) => {
       if(stock>1){
        dispatch(addToCart({id})) // to increase product quantity
        
       }
       
      };
      const remove = (id,quantity) => {
        if(quantity>1){
            dispatch(deleteFromCart({id})) // to decrease product quantity
        }  
        
       };


       const totalPrice = cart.reduce(
        (total, data) => total + data.price * (data.quantity || 1),
        0
      );// to update the total price 

    return (
        <>
{/* displaying products in the cart */}
<div className="container bg-secondary-subtle  ">
        <div className="row  d-flex justify-content-center align-items-center m-5 p-4">
          {cart.map((element, index) => {
            return (
              <div key={index}>
                <div
                  className="row  mt-1 bg-secondary-subtle"
                  style={{ height: "15%" }}
                >
                  <div
                    className="card mb-3 bg-secondary-subtle border-0 "
                    style={{ width: "100%" }}
                  >
                    <div className="row g-0 d-flex justify-content-between ">
                      <div className="col-lg-2 col-sm-6 col-md-6 ">
                        
                        <img src={element.images[0]} alt=
                        {element.title} />
                      </div>
                      <div className="col-lg-4 col-sm-4 col-md-6  ">
                        <h4 className="card-title  fw-bolder mt-2 ">
                          {element.title}
                        </h4>
                        <p className="card-text mt-3 fw-bold ">Details</p>
                        <p className="card-text small  ">
                          {element.description} has the rating of{" "}
                          {element.rating} stars
                        </p>
                      </div>
                      <div className="col-lg-5 col-sm-7 col-md-6">
                        <div className="row float-end mt-1  ">
                          <p>
                            <button
                              className="btn"
                              onClick={() =>
                                remove(
                                  element.id,
                                  element.quantity||1,
                                  element.price
                                )
                              }
                            >
                              -
                            </button>

                            {element.quantity || 1}
                            <button
                              className="btn"
                              onClick={() =>
                                add(
                                  element.id,
                                element.stock
                                )
                              }
                            >
                              +
                            </button>
                            <span className="ms-5 fw-bold ">
                              ${element.productPrice || element.price}.00
                            </span>
                          </p>
                          <br />
                          <button
                            className="btn text-danger ms-3 mt-4"
                            onClick={() => deleteProduct(element.id)}
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
          <div className="d-flex justify-content-between">
            <p className="text-secondary ">SUBTOTAL:</p>
            <p className="fw-bold">${totalPrice}.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-secondary ">SHIPPING:</p>
            <p className="fw-bold">FREE</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="fw-bold">TOTAL:</p>
            <p className="fw-bold">${totalPrice}.00</p>
          </div>
        </div>
      </div> 
        </>
    );
};

export default Cart;