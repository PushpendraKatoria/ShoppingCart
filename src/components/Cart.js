import { useEffect, useState } from "react"

const Cart = ({state, dispatch}) => {
    const {cart} = state
    const [total, setTotal] = useState(0);


    const changeQty = (id, qty) => {
        dispatch({
            type:'CHANGE_QTY',
            payload:{
                qty:qty,
                id:id
            }
        })
    }

    useEffect(()=> {
        setTotal(cart.reduce((total, curr)=> total+Number(curr.price)*curr.qty,0))
    },[cart])

    return <div 
    style={{
        display:'flex',
        background:'lightgrey',
        flexDirection:'column',
        backgroundColor:'#ececec',
        padding:10,
        width:'20%'
    }}>
        <b style={{fontSize:30, alignSelf:'center'}}>Cart</b>
        <b style={{alignSelf:'center'}}>Subtotal : ${total}</b>
        {
            cart.length === 0 ? <div>Cart is Empty</div> 
            : 
            (
                cart.map(product => (
                    <div key={product.title}
                        style={{
                            // display:'flex',
                            padding:10,
                            border: '1px solid grey',
                            margin:5,
                            justifyContent:'space-between'
                        }}
                    >
                        <img style={{
                                height:100,
                                objectFit:'fill'
                            }}
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div style={{display:'flex', paddingBottom:10, justifyContent:'space-between'}}>
                            <span>{product.title}</span>
                            <b>${product.price}</b>
                        </div>
                        <div style={{display:'flex', alignItems:'center', gap:10}}>
                            <button onClick={()=> changeQty(product.id, product.qty-1)}>-</button>
                            <span>{product.qty}</span>
                        <button onClick={()=> changeQty(product.id, product.qty+1)}>+</button>
                        </div>
                    </div>
                ))
            )
        }
    </div>
}

export default Cart