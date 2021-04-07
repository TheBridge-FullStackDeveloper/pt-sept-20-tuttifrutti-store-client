import { IconButton } from "@material-ui/core";

import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FaceIcon from '@material-ui/icons/Face';

export default function IconLink() {


  return (
    <div className='button-container'>
    <Tooltip title = "Favourite" arrow>
        <IconButton color="primary" aria-label="add a favourite" onClick={() => { console.log('I will redirect to favorites page')}} >
          <FavoriteIcon />
        </IconButton>
    </Tooltip>
    <Tooltip title = "Add to Cart" arrow>
        <IconButton color="primary" aria-label="add to cart" onClick={() => { console.log('I will redirect to the cart page')}}>
          <AddShoppingCartIcon />
        </IconButton>
    </Tooltip>
    <Tooltip title = "Login/Signup" arrow>
        <IconButton color="primary" aria-label="sign in or register" onClick={() => { console.log('I will redirect to register page')}}>
          <FaceIcon />
        </IconButton>
    </Tooltip>
    </div>
  );
}
