import { Grid } from '@mui/material';
import product from '../container/product';
import { firstLetterCap, length } from '../utils/javascript';
import CardComponent from '../components/CardComponent';

function Product() {
  const { type, productList, addToCart } = product();

  return (
    <div style={{ margin: '15px' }}>
      <h1>{firstLetterCap(type)}</h1>
      <div style={{ marginTop: '10px' }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {productList && length(productList) ? (
            productList.map((item) => {
              return (
                <Grid item xs={2} sm={4} md={4} key={item.id}>
                  <CardComponent
                    url={item.url}
                    name={type}
                    description={item.description}
                    price={item.price}
                    id={item.id}
                    addToCart={addToCart}
                  />
                </Grid>
              );
            })
          ) : (
            <h1 style={{ margin: '20px' }}>No data found</h1>
          )}
        </Grid>
      </div>
    </div>
  );
}

export default Product;
