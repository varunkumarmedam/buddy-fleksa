import { useEffect, useState } from "react"

export default function Cart({ items }) {
    const [finalAmount, setFinalAmount] = useState(0)
    useEffect(() => {
        let amount = 0;
        items.forEach(item => {
            amount += item.price * item.quantity
        });
        setFinalAmount(amount)
    }, [items])
    return (
        <div className="position-fixed">
            {finalAmount ?
                <div>
                    {items.map((item, index) => {
                        return (
                            <div className="d-flex" key={index}>
                                <div>{item.name}</div>
                                <div>{item.quantity}</div>
                                <div>{item.quantity * item.price}</div>
                            </div>
                        )
                    })}
                    <p>{finalAmount}</p>
                </div>
                : <img src="https://roma.fleksa.com/assets/svg/cart-empty.svg"></img>}

            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample">
                Button with data-bs-target
            </button>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>
        </div>
    )
}
