import { CardActionArea, Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Container
      maxWidth="md"
      sx={{
        width: '90%',
        marginLeft: '50%',
        transform: 'translate(-50%, 0px)',
      }}
    >
      <Container maxWidth="xs">
        <h1
          style={{
            marginTop: '45px',
            textAlign: 'center',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#E5E7EB',
            borderRadius: 40,
            padding: '10px',
            position: 'relative',
          }}
        >
          HIỂU VỀ CHÚNG TÔI
        </h1>
      </Container>
      <p>
        {' '}
        <strong style={{ fontSize: '40px' }}>T</strong>rong thời buổi hiện nay
        với sự phát triển mạnh mẽ của khoa học, kỹ thuật khi mà internet đóng
        vai trò quan trọng trong đời sống hằng ngày và để có thể học được một
        kiến thức hoặc một kỹ năng nào đó. con người chỉ cần sử dụng những thiết
        bị như máy tính bàn, điện thoại,... thì đã có thể xem và học một cách dễ
        dàng. Ta có thể thấy rõ việc học trong buồi hiện nay là khá dễ dàng khi
        có internet.
      </p>
      <p>
        Internet có quá nhiều ưu điểm và điều đó cho ta thấy rằng sự tiện lợi
        của nó đã tác động rất nhiều đến đời sống của con người, điều đó là
        không thể phủ nhận. Nhưng song hành với nó thì internet cùng mang trong
        mình rất nhiều khuyết điểm với lượng thông tin quá lớn thì việc kiểm
        soát sẽ càng trở nên khó khăn hơn, luồn thông tin không có tính kiểm
        duyệt, các website đăng bài viết tùy ý và không có tính tổ chức, qua đó
        đã có sự tác động không tốt về mặt đời sống xã hội và đặc biệt là về mặt
        kiến thức.
      </p>
      <p>
        Với mục đích hỗ trợ về mặt kiến thức cho các bạn sinh viên ngoài và
        trong trường HUTECH chúng em sẽ cung cấp các tài liệu cần thiết cho các
        bạn sinh viên, tài liệu này sẽ có tính chọn lọc về mặt nội dung và tránh
        mất thời gian cho việc tìm kiếm.
      </p>
      <h3>
        Thông qua hình thức website chúng em đã áp dụng những công nghệ như sau:
      </h3>
      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="http://www.dammio.com/wp-content/uploads/2017/06/nodeJS.jpeg"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://200lab-blog.imgix.net/2021/07/1_h5UGPzaL1E4dIy_JWDrsAw.png"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <h3>Công cụ làm việc nhóm:</h3>
      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://techvccloud.mediacdn.vn/280518386289090560/2021/3/2/023-1614681588418717257234-0-0-767-1366-crop-16146815915111444794187.png"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <h3>Thành viên:</h3>
      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://anhdep123.com/35-hinh-anh-con-vet-dep-va-dang-yeu-nhat/con-vet-dang-bay-2/"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Phù Nhựt Huỳnh
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Với vai trò là người dẫn dắt cho cả nhóm, có thể nói đây là
                    một thành viên cốt cán có vai trò quyết định đến sự thành
                    công vẻ vang của nhóm. Với mong muốn được đồng hành cùng với
                    mọi người, Huỳnh luôn cố gắng chia sẻ những kiến thức, hiểu
                    biết của mình một cách nhiệt tình, vui vẻ và ân cần. Quả
                    nhiên là khí chất của người đứng đầu!!!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://anhdep123.com/35-hinh-anh-con-vet-dep-va-dang-yeu-nhat/con-vet-dang-bay-2/"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dương Quốc An
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Một chàng trai tỉ mỉ và cẩn thận, có thể nói đây là một
                    trong những thành viên có vai trò rất quan trọng góp phần
                    cho sự thành công của nhóm. Vừa code được lại còn có kỹ năng
                    tin học văn phòng tốt. Với tư duy logic An luôn cố gắng tìm
                    ra những khuyết điểm của hệ thống, qua đó có thể tránh được
                    nhiều bất cập không hay xảy ra khi một hệ thống vận hành.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://anhdep123.com/35-hinh-anh-con-vet-dep-va-dang-yeu-nhat/con-vet-dang-bay-2/"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Nguyễn Văn Chuẩn
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dù khá bận rộn cho cuộc sống hằng ngày, như với Chuẩn tinh
                    thần trách nhiệm cao , chí cầu tiền vươn lên trong công việc
                    sẽ là yếu tố quyết định cho sự thành công của mình. Với mong
                    muốn tỏ sáng trong lĩnh vực IT, đây sẽ là một trong ứng viên
                    đầy tiềm năng cho những doanh nhiệp lớn nhỏ trong tương lai.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://anhdep123.com/35-hinh-anh-con-vet-dep-va-dang-yeu-nhat/con-vet-dang-bay-2/"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lê Huỳnh Phương Tùng
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Thành viên luôn nhiệt tình trong nhóm với tinh thần luôn
                    luôn cố gắng hoàn thành tốt những công việc được giao với
                    châm ngôn sống: "Cứ cố gắng làm thôi, còn không biết thì
                    mình học!!!". Ta có thể thấy rằng ba từ "không ngại khó" là
                    ba từ chính xác để nói lên tính cách của chàng trai này.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
