export default function Cart({ item, add, remove, cartItems }) {
    return (
        <div className="card mb-3 p-3 pb-4">
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <p className="card-text">{item.name_json.english}</p>
                    <span className="card-item-price">{item.price} €</span>
                </div>

                {cartItems.filter(cItem => cItem.id == item.id).length == 0 ?
                    <div>
                        <input type="button" className="btn btn-warning" value="Add to Cart" onClick={() => add(item)} />
                    </div> :
                    <div>
                        <input type="button" className="btn btn-warning" value="+" onClick={() => add(item)} />
                        <span className="m-3">{cartItems.filter(cItem => cItem.id == item.id)[0].quantity}</span>
                        <input type="button" className="btn btn-warning" value="-" onClick={() => remove(item)} />
                    </div>
                }
            </div>
        </div>
    )
}
