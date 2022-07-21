import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProduct from "../components/CardProduct";
import { getAllProducts, filterByCategoria, getAllCategories } from "../redux/action";


const Products = () => {

    const AllProducts = useSelector(state =>  state.products)
    const AllCategories = useSelector( state => state.categories)
    const carRaw = useSelector(state => state.carRaw)
    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;
    const dispatch = useDispatch()

    const handleClick = (category) => {
        dispatch(filterByCategoria(category))
    }

    let raw = null;
    carRaw ? raw = carRaw : raw = null


    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getAllCategories())

    },[])

    return (
        <div className="products_container">
            <h1>PRODUCTOS</h1>
            <p>Categorias</p>
            <div className="products_categories">
                <button onClick={() => handleClick("All")}>Todas</button>
                {
                    AllCategories && AllCategories.map( c => (
                        <div key={c.id}>
                            <button onClick={() => handleClick(c.name)}>{c.name}</button>
                        </div>
                    ))
                }
            </div>
            <div className="products_cards">
                {
                    AllProducts && AllProducts.map(p => (
                        <div key={p.id}>
                            <CardProduct 
                                name={p.title}
                                image={p.image.url}
                                price={p.price}
                                imgName={p.image.name}
                                slug={p.slug}
                                idP={p.id}
                                raw={raw}
                                userInfo={userInfo}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Products;