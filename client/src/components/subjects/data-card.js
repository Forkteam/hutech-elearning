import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Pagination,
  Typography,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DataCard = ({ subjects }) => {
  const itemsPerPage = 8;
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(
    Math.ceil(subjects.length / itemsPerPage)
  );

  useEffect(() => {
    setNoOfPages(Math.ceil(subjects.length / itemsPerPage));
  }, [subjects]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Container sx={{ pt: 2, pb: 4 }} maxWidth="md">
        <Grid container spacing={2}>
          {subjects
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 3,
                  }}
                >
                  <CardActionArea>
                    <Link to={`subjects/${item.id}`} className="text-black">
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
                          {item.name.length > 14
                            ? `${item.name.slice(0, 14)}...`
                            : item.name}
                        </Typography>
                        <Typography>
                          {item.description.length > 100
                            ? `${item.description.slice(0, 100)}...`
                            : item.description}
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
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
