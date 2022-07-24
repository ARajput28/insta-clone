/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { firstLetterCap } from '../utils/javascript';

export default function CardComponent({
  url,
  name,
  handleRoute,
  description,
  price,
  id,
  addToCart,
  cart,
  removeFromCart,
  type,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {firstLetterCap(name || '')}
          </Typography>
          {price ? (
            <>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price : Rs. {price}
              </Typography>
            </>
          ) : null}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {price ? (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {cart ? (
              <Button
                size="small"
                color="error"
                variant="contained"
                onClick={() => removeFromCart(id, type)}
              >
                Remove from cart
              </Button>
            ) : (
              <Button
                size="small"
                color="success"
                variant="contained"
                onClick={() => addToCart(id, url, description, price)}
              >
                Add to cart
              </Button>
            )}
          </>
        ) : (
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => handleRoute(name)}
          >
            Detail
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
