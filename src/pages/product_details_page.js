import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Row, Col, Table, Button } from "reactstrap";

const ProductDetails = () => {
    const param = useParams();
    const navigate = useNavigate();


    const [productDetails, setProductDetails] = useState({})
    const [discountPrice, setDiscountPrice] = useState("");
    // console.log('id: ', id)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${param.id}`)
            .then(res => res.json())
            .then(response => {
                const { price, discountPercentage } = response;
                //caliculating the discount price
                if (discountPercentage > 0) {
                    setDiscountPrice(price - ((price * discountPercentage) / 100))
                }

                setProductDetails(response);
            })
    }, [])

    const paymentGateWay = () => {
        navigate("/buy");
    }

    return <>
        <Row>
            <Col>
                <h2>{productDetails.title}</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                <img src={productDetails.thumbnail} />
            </Col>
            <Col>
                <Table>
                    <tr>
                        <td>Brand</td>
                        <td>{productDetails.brand}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{productDetails.description}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>
                            {discountPrice > 0 &&
                                <s>{productDetails.price}</s>} INR</td>
                    </tr>
                    {discountPrice > 0 &&
                        <tr>
                            <td>Discount Price</td>
                            <td>
                                {discountPrice > 0 &&
                                    discountPrice} INR</td>
                        </tr>
                    }
                    {productDetails.stock < 3 && <tr>
                        <td>Available Stock</td>
                        <td>Only {productDetails.stock} left</td>
                    </tr>}
                </Table>
            </Col>
        </Row>
        <Row>
            <Col>
                &nbsp;
            </Col>
            <Col>
                <Button> Add To Cart </Button>
                <Button onClick={paymentGateWay}> Buy Product </Button>
            </Col>
        </Row>

    </>
}

export default ProductDetails;