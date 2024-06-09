import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const onBuyNow = (e) => {
  console.log(e)
}


const Items = ({id, name, price}) => {
  return(
    <>
      <Box>
        <Card variant='outlined' key={id}>
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="h5" component="div">
              ₱{price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to cart</Button>
            <Button size="small" onClick={onBuyNow} >Buy now</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}

export default Items