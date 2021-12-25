import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DataCard = ({ items }) => {
  const itemsPerPage = 4;
  const [page, setPage] = useState(1);
  const [noOfPages] = useState(Math.ceil(items.length / itemsPerPage));

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container spacing={2}>
          {items
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <Link to="/login" component={CardActionArea}>
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
                      sx={{
                        // 16:9
                        pt: '10px',
                      }}
                      height="140"
                      image={item.image}
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h5">
                        {item.title}
                      </Typography>
                      <Typography>
                        {item.description.slice(0, 100)}...
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Container>
      <Box component="span">
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handlePageChange}
          defaultPage={1}
          color="primary"
          variant="outlined"
          showFirstButton
          showLastButton
          sx={{
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'absolute',
          }}
        />
      </Box>
    </>
  );
};

export default DataCard;