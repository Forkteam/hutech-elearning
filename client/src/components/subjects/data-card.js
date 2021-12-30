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

const DataCard = ({ subjects }) => {
  const itemsPerPage = 8;
  const [page, setPage] = useState(1);
  const [noOfPages] = useState(Math.ceil(subjects.length / itemsPerPage));

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container spacing={2}>
          {subjects
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
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
                        {item.name}
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
        <Box component="div" style={{ padding: '10px', margin: '10px' }}>
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
      </Container>
    </>
  );
};

export default DataCard;
