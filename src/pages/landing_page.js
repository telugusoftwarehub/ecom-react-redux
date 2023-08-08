import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import Carousel from "../components/carousel";

const LandingPage = (props) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(' https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(json => setCategories(json));
    }, [])

    return <>
        <Row>
            <Col>
            <h2> E-Com Application</h2>
            </Col>
            <Col>
                <h3> Your Cart <Link to="/buy">{props.cart}</Link></h3>
            </Col>
        </Row>
        <Row>
            <Link to="/registration"> Sing Up/Register</Link>
        </Row>
        <Row>
            <Carousel />
        </Row>
        <Row>
            <Col>
                <h3>Block 1</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio animi sapiente officiis dolorum, accusamus quas adipisci repellendus hic harum numquam odit illo modi, dolores mollitia quis ab molestias expedita illum.
                </p>
            </Col>
            <Col>
                <h3>Block 1</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio animi sapiente officiis dolorum, accusamus quas adipisci repellendus hic harum numquam odit illo modi, dolores mollitia quis ab molestias expedita illum.
                </p>
            </Col>
            <Col>
                <h3>Block 1</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio animi sapiente officiis dolorum, accusamus quas adipisci repellendus hic harum numquam odit illo modi, dolores mollitia quis ab molestias expedita illum.
                </p>
            </Col>
        </Row>
        <Row>
            <h2> Categories </h2>
            {
                categories && categories.length > 0 && categories.map((item, index) => {
                    return <Col md="4" key={index}>
                        <Link to={"products/"+item}><h4>{item}</h4></Link>
                    </Col>
                })
            }
        </Row>
       
    </>
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartCount
    }
}
const mapDispatchToProps = (dispatch) => {}
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);