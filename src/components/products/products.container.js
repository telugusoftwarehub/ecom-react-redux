import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import ProductsComponent from "./products.component";
import { addToCart } from "../../redux/actions/cart_action";

const ProductsContainer = (props) => {
    const routeParams = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [productCategory, setProductCategory] = useState("")

    useEffect(() => {
        // console.log('routeParams: ', routeParams)
        const category = routeParams.item;

        setProductCategory(category);
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(response => {
                console.log("response.products: ", response.products)
                const result = response.products.filter((item) => item.category === category)
                setProducts(result);
            })
    }, []);

    const detailsBtnClickHandler = (id) => {
        navigate(`/product/details/${id}`);
    }

    const addToCartAction = (data) => {
        props.addToCart(data);
    }

    return <ProductsComponent
        products={products}
        productCategory={productCategory}
        detailsBtnClickHandler={detailsBtnClickHandler}
        addToCartAction={addToCartAction}
        cart={props.cart}
    />
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartCount
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (dt) => dispatch(addToCart(dt))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);