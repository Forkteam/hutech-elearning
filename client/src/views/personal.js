import { Box } from '@mui/system';

export default function Personal() {
  return (
    <div className="personal">
      <div className="div1">
        <Box className="box1">
          {' '}
          <img
            alt="img"
            src="https://i1.wp.com/www.polar-pinguin.berlin/wp-content/uploads/2017/12/image_preview.png?w=1080&ssl=1"
          ></img>
        </Box>
      </div>
      <div className="div2">
        <Box className="box2">
          Cập nhật gần nhất: 01 giờ 21 phút, ngày 31/12/2021{' '}
        </Box>
      </div>
      <div className="div4">
        <div className="row ng-star-inserted"></div>
        <section className="col-md-9 jarviswidget jarviswidget-sortable jarviswidget-color-blueDark pr-2">
          <div className="widget-body">
            <form
              className="form-horizontal ng-untouched ng-pristine ng-valid"
              noValidate=""
            >
              <div className="row">
                <div className="col-md-6">
                  Mã số sinh viên:{' '}
                  <span className="font-weight-bold">1911064729</span>
                </div>
                <div className="col-md-6">
                  Họ tên:{' '}
                  <span className="font-weight-bold">Nguyễn Văn Chuẩn</span>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-6">
                  Ngày sinh: <span>13-01-2001</span>
                </div>
              </div>

              <div className="row mt-4">
                <fieldset>
                  <legend>
                    <h6 className="font-weight-bold ml-3 my-0">
                      THÔNG TIN SINH VIÊN
                    </h6>
                  </legend>
                  <div className="col-md-12">
                    <div className="row form-group">
                      <div className="row form-group">
                        <div className="col-md-2">
                          <label className="control-label">
                            Email
                            <span className="text-danger">(*)</span>:{' '}
                          </label>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control ng-untouched ng-pristine ng-valid"
                            name="email"
                            type="text"
                          ></input>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-4"></div>
                      </div>

                      <div className="row form-group">
                        <div className="col-md-2">
                          <label className="control-label">
                            Điện thoại
                            <span className="text-danger">(*)</span>:{' '}
                          </label>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control ng-untouched ng-pristine ng-valid"
                            name="dien_thoai"
                            type="text"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
