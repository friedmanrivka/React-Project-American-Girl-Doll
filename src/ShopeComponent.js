import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./redux/actions/cartActions";
import { decreaseQty } from "./redux/actions/productActions";
export default function ShopeComponent() {
  const product = useSelector((state) => state.products)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <>
      <div id="container">
        {product ? product.map((item, index) => (
          <>
            <div class="card" >
              <h5 id="dollName" class="card-title">{item.name}</h5>
              <img class="card-img-top" src={item.img} alt="Card image cap" style={{ width: "180px", height: "220px", marginLeft:"30px"}}></img>
              <div class="card-body">
                <p id="t"class="card-text">price:{item.price}</p>
             
                <p id="t"class="card-text">{item.desciption}</p>
                <button onClick={() => { dispatch(addToCart(item)); dispatch(decreaseQty(item.id)) }} id="as" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  add to cart
                </button>
              </div>
            </div>
          </>
        )) : <div>Products is null</div>}
      </div>
    </>
  )
}
