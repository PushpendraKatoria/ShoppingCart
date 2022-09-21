const Products =({state, dispatch}) => {

    const {products, cart} = state;

    return (<div style={{display:'flex',
        flexWrap:'wrap',
        width:'80%',
        justifyContent:'space-evenly'
        }}>

            {/* Products */}

        {products.map((product)=> {
            return <div 
            key={product.id}
            style={{
                display:'flex',
                flexDirection:'column',
                padding:10,
                border:'1px solid grey',
                width:'30%',
                marginTop:10,
                gap:10
            }}
            >
                <img style={{
                    height:200,
                    objectFit:'fill'
                }}
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <span>{product.title}</span>
                    <b>${product.price}</b>
                </div>
                {
                    cart.some(c=>c.id===product.id) ? <div>
                        <button onClick={()=> dispatch({
                            type:'ADD_TO_CART',
                            payload: {
                                id: product.id,
                                title: product.title,
                                thumbnail: product.thumbnail,
                                qty: 1,
                                price: product.price
                            }
                            })}
                            style={{padding:5,border:0, borderRadius:5, backgroundColor:'green', color:'white'}}>
                            Add to Cart
                        </button>
                        <button onClick={()=> dispatch({
                                type:'REMOVE_FROM_CART',
                                payload: product
                            })}
                            style={{padding:5,border:0, borderRadius:5, backgroundColor:'red', color:'white'}}>
                            Remove from Cart
                        </button>
                    </div>
                     
                    : 
                    <button onClick={()=> dispatch({
                        type:'ADD_TO_CART',
                        payload: {
                            id: product.id,
                            title: product.title,
                            thumbnail: product.thumbnail,
                            qty: 1,
                            price: product.price
                        }
                        })}
                        style={{padding:5,border:0, borderRadius:5, backgroundColor:'green', color:'white'}}>
                        Add to Cart
                    </button>
                    
                }
                {/* <button onClick={()=> dispatch({
                    type:'ADD_TO_CART',
                    payload: {
                        id: product.id,
                        title: product.title,
                        thumbnail: product.thumbnail,
                        qty: 1,
                        price: product.price
                    }
                })}
                    style={{padding:5,border:0, borderRadius:5, backgroundColor:'green', color:'white'}}>
                    Add to Cart
                </button>
                <button onClick={()=> dispatch({
                    type:'REMOVE_FROM_CART',
                    payload: product
                })}
                    style={{padding:5,border:0, borderRadius:5, backgroundColor:'red', color:'white'}}>
                    Remove from Cart
                </button> */}
            </div>
        })}
        
    </div>)
}

export default Products