
export default function PaymentComponent() {
    const cart = useSelector((state) => state.cart)
    const claculate=0;
    return (
        <>
{cart ? cart.map((item, index) => (
  <>
    <span></span>
    <div class="card">
      <h5 class="card-title">{item.name}</h5>
      <img class="card-img-top" src={item.img} alt="Card image cap" style={{ width: "230px", height: "315px" }}></img>
      <div class="card-body">
        <p class="card-text">price:{item.price}</p>
        <p class="card-text">amount:{item.cart}</p>
        claculate+={item.price}*{item.cart};
</div>
  </div>
  </>
)) : <h1>The cart is empty</h1>}
<h1>sum for payment is {claculate}</h1>
        <button>pay now</button>
        </>
    )
}