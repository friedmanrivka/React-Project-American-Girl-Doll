import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart, addToCart } from "./redux/actions/cartActions";
import { addQty, decreaseQty } from "./redux/actions/productActions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function CartComponent() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [rander,setRander]=useState(0)
  const navigate=useNavigate()
  const num = 0;
  return (
    <>

      <br></br><br></br><br></br><br></br>
      <table class="table">

        <tr id="names">
          <th scope="col"></th>
          <th scope="col">name</th>
          <th scope="col">price</th>
          <th scope="col">image</th>
          <th scope="col">amount</th>
          <th scope="col">add/decrease</th>
        </tr>

        <tbody>

      {cart ? cart.map((item, index) => (
            <>

              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><img class="card-img-top" src={item.img} alt="Card image cap" style={{ width: "60px", height: "80px" }}></img></td>
                <td key={`actions-${item.id}`}>

                  <p> {item.cart}</p>


                </td>
                <td >
                  <div id="plusminus">
                    <button id="button2" type="button" class="bg-secondary" onClick={() => { dispatch(decreaseQty(item.id)); dispatch(addToCart(item));setRander(rander+1) }} >+</button>

                    <p>   {item.cart}  </p>

                    <button id="button2" type="button" class="bg-secondary" onClick={() => { dispatch(deleteFromCart(item)); dispatch(addQty(item.id)) ;setRander(rander+1) }} >-</button>
                  </div>
                </td>

              </tr >
            </>
          )) : <h1>The cart is empty</h1>}
      

        </tbody>
      </table >
      <button style={{marginTop:100,backgroundColor:"#C12E5A"}} onClick={()=>navigate("/GoToPayment")}> payment</button>

    </>


  )
}