import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Home = ({ landings }) => {
  return (
    <Container sx={{ py: 4 }} maxWidth="md">
      <Grid container spacing={2}>
        {landings.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Link to={`subjects/${item.id}`} component={CardActionArea}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ pt: '10px' }}
                  height="140"
                  image={item.image}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h5">
                    {item.name}
                  </Typography>
                  <Typography>{item.description.slice(0, 100)}...</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
