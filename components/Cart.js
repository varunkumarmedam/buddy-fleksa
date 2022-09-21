import { useEffect, useState } from "react"
import dynamic from 'next/dynamic'

const Bomb = dynamic(() => import('../components/Bomb'), {
    ssr: false,
})

export default function Cart({ items, add, remove }) {
    const [finalAmount, setFinalAmount] = useState(0);
    const [bombType, setBombType] = useState({
        type: '',
      })

    useEffect(() => {
        let amount = 0;
        items.forEach(item => {
            amount += item.price * item.quantity
        });
        setFinalAmount(amount)
    }, [items])
    return (
        <div className="position-fixed mt-5">
            <h3 className="text-center">Your Cart</h3>
            {finalAmount ?
                <div className="container cart-main-box col-12 mt-3 pt-3">
                    {items.map((item, index) => {
                        return (
                            <div className="row mb-3" key={index}>
                                <div className="col-5">{item.name}</div>
                                <div className="col-5">
                                    <input type="button" className="btn btn-sm btn-secondary" value="+" onClick={() => add(item)} />
                                    <span className="m-3">{items.filter(cItem => cItem.id == item.id)[0].quantity}</span>
                                    <input type="button" className="btn btn-sm btn-secondary" value="-" onClick={() => remove(item)} />
                                </div>
                                <div className="col-2">{item.quantity * item.price} €</div>
                            </div>
                        )
                    })}
                    <div className="row">
                        <h5 className="col-10">Total</h5>
                        <p className="col-2">{finalAmount} €</p>
                    </div>
                    <button className="btn btn-success w-100" onClick={() => setBombType({
                        type: 'continuous',
                    })}>Checkout</button>
                </div>
                : <img src="https://roma.fleksa.com/assets/svg/cart-empty.svg"></img>}
            <Bomb type={bombType} />
        </div>
    )
}
