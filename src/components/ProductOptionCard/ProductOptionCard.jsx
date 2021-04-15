import {Link} from "react-router-dom"
import Picture from "../Pictures"
import Button from "../Button"

export default function ProductOptionCard({picture, name, className, onClickDelete, type, text, productId,price}){

    return (
    
        <div className="savedCart">
            <div>
                <Picture picture={picture} name ={name}/>
            </div>
            <div>
                {price}
            </div>
            <div>
                
                <Button className = {className} onClick={onClickDelete} type={type} text="Eliminar"/>
                <Link to={`/product/${productId}`}>VER PRODUCTO</Link>
                 
                
            </div>
        </div>
    );
}