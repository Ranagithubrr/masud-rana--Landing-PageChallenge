import ProductCard from "../productCard/ProductCard";

// *** using local product data, because there is no api provided ***
import ProductData from '../../data/data.json';
import { useEffect, useState } from "react";

const Products = () => {
    const specialProducts = ProductData.filter((ele) => ele.type === "special");
    const latestProducts = ProductData.filter((ele) => ele.type === "latest");
    const bestSellProducts = ProductData.filter((ele) => ele.type === "best-sell");



    const [ShowingProduct, setShowingProduct] = useState([]);
    useEffect(() => {
        setShowingProduct(specialProducts)
        // eslint-disable-next-line
    }, []);
    const ChangeProduct = (type) => {
        type === 0 ? setShowingProduct(latestProducts) : type === 1 ? setShowingProduct(specialProducts) : setShowingProduct(bestSellProducts)
    }
    return (
        <section id="products">
            <div className="lg:w-9/12 mx-auto">
                <div className="flex justify-between">
                    <div className="w-1/2 flex flex-col justify-end">
                        <h4 className="font-bold text-2xl">Our Products</h4>
                        <p className="text-sm text-gray-600 mt-4">Experience crystal clear vision and elevated style with our <br /> premium collection of eyeglasses.</p>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <button className="mx-4" onClick={() => ChangeProduct(0)}>Latest</button>
                        <button className="mx-4" onClick={() => ChangeProduct(1)}>Special</button>
                        <button className="mx-4" onClick={() => ChangeProduct(2)}>Best Sell</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {
                        ShowingProduct && ShowingProduct.length !== 0 && ShowingProduct.map((ele) => {
                            return (
                                <ProductCard
                                    key={ele.id}
                                    Product={ele}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Products