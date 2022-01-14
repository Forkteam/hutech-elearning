import { IndustryModel } from '../models/industry-model.js';
import { SubjectModel } from '../models/subject-model.js';

export const getIndustries = async (req, res) => {
  try {
    const industries = await IndustryModel.find().populate('user', [
      'fullName'
    ]);
    res.status(200).json({ success: true, industries });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const createIndustry = async (req, res) => {
  const { code, name } = req.body;
  if (!code || !name)
    return res.status(400).json({
      success: false,
      message: 'Mã lĩnh vực hoặc tên lĩnh vực bị bỏ trống.'
    });

  try {
    const industryCodeExisted = await IndustryModel.findOne({ code });
    if (industryCodeExisted)
      return res
        .status(400)
        .json({ success: false, message: 'Mã lĩnh vực đã tồn tại.' });

    const newIndustry = req.body;
    let industry = new IndustryModel({
      ...newIndustry,
      user: req.userId
    });
    await industry.save();

    industry = await industry.populate('user', ['fullName']);
    res.status(200).json({
      success: true,
      message: 'Tạo lĩnh vực mới thành công!',
      industry
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const updateIndustry = async (req, res) => {
  const { code, name } = req.body;
  if (!code || !name)
    return res.status(400).json({
      success: false,
      message: 'Mã lĩnh vực hoặc tên lĩnh vực bị bỏ trống.'
    });

  try {
    const industryCodeExisted = await IndustryModel.findOne({
      $and: [{ _id: { $ne: req.params.id } }, { code }]
    });
    if (industryCodeExisted)
      return res
        .status(400)
        .json({ success: false, message: 'Mã lĩnh vực đã tồn tại.' });

    const updateIndustry = req.body;
    const industry = await IndustryModel.findOneAndUpdate(
      { _id: req.params.id },
      updateIndustry,
      { new: true }
    ).populate('user', ['fullName']);

    if (!industry)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm thấy lĩnh vực' });

    res.status(200).json({
      success: true,
      message: 'Cập nhật lĩnh vực thành công!',
      industry
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const deleteIndustry = async (req, res) => {
  try {
    const subject = await SubjectModel.findOne({ industryId: req.params.id });
    if (subject)
      return res.status(400).json({
        success: false,
        message: 'Không thể xoá vì đã tồn tại tài liệu.'
      });

    const industry = await IndustryModel.findOneAndDelete({
      _id: req.params.id
    });

    if (!industry)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm thấy lĩnh vực' });

    res
      .status(200)
      .json({ success: true, message: 'Xoá thành công!', industry });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};
