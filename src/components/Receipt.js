import { receipts } from "../data/records"
import {useState} from 'react'



function Receipt(props){
let order = props.data.order


const [paid, setPaid] = useState(false)

const onClick = () => setPaid(true)






    return (
        <div className = "all">
      
        {/* <div className="order" > */}
      
        {paid ? <div></div> : <div className="order" onClick={onClick} >
        
        
        <h2>{props.data.person}</h2>
        <p><span>Main:</span> {order.main}</p>
        <p><span>Protein:</span> {order.protein}</p>
        <p><span>Rice:</span> {order.rice}</p>
        <p><span>Sauce:</span> {order.sauce}</p>
        <p><span>Toppings:</span> {order.toppings}</p>
        <p><span>Drink:</span> {order.drink}</p>
        <p><span>Cost:</span> {order.cost}</p>
        <p>{props.data.paid}</p>
   </div>
        
        }
       

        </div>
    )
}

export default Receipt