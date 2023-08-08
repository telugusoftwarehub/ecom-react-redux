import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";

const ProductsComponent = (props) => {
    const { products, productCategory, detailsBtnClickHandler, cart, addToCartAction } = props;
    return < Row >
        <h2 style={{ textTransform: "capitalize" }}> {productCategory} </h2>
        <h3> Your Cart <Link to="/buy">{cart}</Link></h3>
        <Link to="/">Home</Link>
        {
            products && products.length > 0 && products.map((item, index) => {
                return <Col md="4" key={item.id}>
                    <h4>{item.title}</h4>
                    <img src={item.thumbnail} alt="" width={200} height={200} />
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <Button onClick={() => addToCartAction(item)}> Add To Cart </Button>
                    <Button onClick={() => detailsBtnClickHandler(item.id) }> Details </Button>
                </Col>
            })
        }
    </Row >
}

export default ProductsComponent;
