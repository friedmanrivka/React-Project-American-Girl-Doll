
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const GoToPayment = () => {

    useEffect(() =>
    {
        alert("    are you sure you want to pass to pay ? ");
    }
  )

    const products = useSelector((state) => state.cart)
    const totalAmount = products.reduce((acc, product) => acc + (product.cart * product.price), 0);

    return (
        <div>
            
            <br></br><br></br><br></br><br></br><br></br>

            <Table striped bordered hover size="sm" className="tabl">
                <thead style={{backgroundColor:'#C12E5A', color:'white'}}>
                    <tr>
                        <td id="th">image</td>
                        <td>Product</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td><img style={{height:80,width:50}}  src={product.img} alt="Card image cap" class="img" className="payment-img"></img></td>
                            <td>{product.name}</td>
                            <td>{product.cart}</td>
                            <td>{product.price}</td>
                            <td>{product.cart * product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div>Total: {totalAmount}</div>
            <Button variant="dark">Pay Now</Button>
        </div>
    );

};

export default GoToPayment;


