import { Button, Grid } from '@mui/material';
import CardComponent from '../components/CardComponent';
import Conformation from '../components/Conformation';
import cart from '../container/cart';
import { length } from '../utils/javascript';

function Cart() {
  const {
    cartList,
    removeFromCart,
    bill,
    handleOrder,
    removeAll,
    handleClose,
    order,
    confirmOrder,
  } = cart();

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <h1>Cart List</h1>
            <div>
              {cartList && length(cartList) ? (
                // eslint-disable-next-line array-callback-return
                cartList.map((item) => (
                  <>
                    <CardComponent
                      url={item.url}
                      name={item.type}
                      description={item.description}
                      price={item.price}
                      id={item.id}
                      cart
                      type={item.type}
                      removeFromCart={removeFromCart}
                    />
                    <br />
                  </>
                ))
              ) : (
                <p>Please add items into the cart</p>
              )}
            </div>
          </Grid>
          <Grid item xs={8}>
            <div style={{ marginLeft: '50px', width: '370px' }}>
              <h1>Bill</h1>
              {bill ? (
                <>
                  <h3>Total Amount : Rs. {bill} /-</h3>

                  <div>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      style={{ margin: '5px' }}
                      onClick={handleOrder}
                    >
                      Order
                    </Button>

                    <Button
                      size="small"
                      color="error"
                      variant="contained"
                      onClick={removeAll}
                    >
                      Remove all from cart
                    </Button>
                  </div>
                </>
              ) : (
                <p>Cart is empty...</p>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
      {order && (
        <Conformation
          open={order}
          handleClose={handleClose}
          handleSubmit={confirmOrder}
        />
      )}
    </>
  );
}

export default Cart;
