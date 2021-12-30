import {
  Avatar,
  Button,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import { Fragment } from 'react';

export default function Comments() {
  return (
    <>
      <Typography variant="h6" component="h6" sx={{ mt: 4, mb: 1, ml: 4 }}>
        Bình luận
      </Typography>
      <Box component="form" sx={{ width: '98%', m: 'auto' }}>
        <TextField
          margin="dense"
          multiline
          rows={4}
          required
          fullWidth
          label="Đừng ngại để lại bình luận"
          name="description"

          // value={description}
          // onChange={onChangeNewLectureForm}
        />
        <Button type="submit" variant="outlined" sx={{ mb: 2, float: 'right' }}>
          Gửi bình luận
        </Button>
      </Box>
      <Divider variant="inset" />
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch"
            secondary={
              <Fragment>
                {'3h30, 25/12/2021 - '}
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  I'll be in your neighborhood doing errands this…
                </Typography>
              </Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer"
            secondary={
              <Fragment>
                {'3h30, 25/12/2021 - '}
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Wish I could come, but I'm out of town this…
                </Typography>
              </Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <Fragment>
                {'3h30, 25/12/2021 - '}
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Do you have Paris recommendations? Have you ever…
                </Typography>
              </Fragment>
            }
          />
        </ListItem>
      </List>
      <Divider variant="inset" />
    </>
  );
}
