import { Row, Col, Button } from "reactstrap";

const SmartPhonesComponent = ({products, productCategory}) => {
    return < Row >
        <h2 style={{textTransform: "capitalize"}}> {productCategory} </h2>
        {
            products && products.length > 0 && products.map((item, index) => {
                return <Col md="4" key={item.id}>
                    <h4>{item.title}</h4>
                    <img src={item.thumbnail} alt="" width={200} height={200}/>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <Button> Add To Cart </Button>
                    <Button> Buy Product </Button>

                </Col>
            })
        }
    </Row >
}

export default SmartPhonesComponent;
