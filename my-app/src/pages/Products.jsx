import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProduct from "../components/CardProduct";
import { getAllProducts, filterByCategoria, getAllCategories } from "../redux/action";


const Products = () => {

    const AllProducts = useSelector(state =>  state.products)
    const AllCategories = useSelector( state => state.categories)
    const dispatch = useDispatch()
    console.log('categorias', AllCategories)
    console.log('products',AllProducts )

    const handleClick = (category) => {
        dispatch(filterByCategoria(category))
        console.log('funca')
    }


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
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Products;