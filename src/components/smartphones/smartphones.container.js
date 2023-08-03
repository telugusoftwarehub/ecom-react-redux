import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import SmartPhonesComponent from "./smartphones.component";


const SmartPhonesContainer = () => {
    const routeParams = useParams();
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

    return <SmartPhonesComponent products={products} productCategory={productCategory}/>
}

export default SmartPhonesContainer;