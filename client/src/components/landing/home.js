import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Home = ({ landing }) => {
  let body;
  if (landing.loading) {
    body = (
      <div style={{ margin: 'auto' }}>
        <CircularProgress />
      </div>
    );
  } else {
    body = (
      <>
        {landing.data.map((item) => (
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
      </>
    );
  }

  return (
    <Container sx={{ py: 6 }} maxWidth="md">
      <Grid container spacing={2}>
        {body}
      </Grid>
    </Container>
  );
};

export default Home;
