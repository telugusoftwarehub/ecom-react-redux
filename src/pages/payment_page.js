import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

const PaymentGateWay = (props) => {
    const [price, setPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < props.products.length; i++) {
            total = total + props.products[i].price
        }
        setPrice(total)
    }, [])

    return <>
        <Link to="/">Home</Link>

        <Row>
            <Col>
                {
                    props.products && props.products.length > 0 &&
                    props.products.map((item, index) => {

                        return <p key={index}> {item.title} </p>
                    })
                }
            </Col>
            <Col>
                <form action='https://test.payu.in/_payment' method='post'>
                    <input type="hidden" name="key" value="gtKFFx" />
                    <input type="hidden" name="txnid" value="121wqsa" />
                    <input type="hidden" name="productinfo" value="iPhone" />
                    <label> Total Amount:</label>
                    <input type="text" name="amount" value={price} />
                    <input type="text" name="email" value="test@gmail.com" />
                    <input type="text" name="firstname" value="Ashish" />
                    <input type="text" name="lastname" value="Kumar" />
                    <input type="hidden" name="surl" value="https://apiplayground-response.herokuapp.com/" />
                    <input type="hidden" name="furl" value="https://apiplayground-response.herokuapp.com/" />
                    <input type="text" name="phone" value="9988776655" />
                    <input type="hidden" name="hash" value="6673be211fb59a8125f0832e5d4b004dea4f5254d4317469276d281e8b13ad72cf53574b7ebe00f5c50eacdbfd003bcee5daa52fe86059cdebce629be811176c" />
                    <input type="submit" value="submit"></input>
                </form>
            </Col>
        </Row>

        <span onClick={() => window.print()}>Print</span>


    </>
}

const mapStateToProps = (state) => {
    return {
        products: state.selectedProducts
    }
}
const mapDispatchToProps = (dispatch) => { }

export default connect(mapStateToProps, mapDispatchToProps)(PaymentGateWay);