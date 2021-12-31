import { CommentModel } from '../models/comment-model.js';

export const getComments = async (req, res) => {
  try {
    const comments = await CommentModel.find({
      lectureId: req.params.id
    })
      .populate('user', ['fullName', 'avatar'])
      .sort({ ['createdAt']: -1 });
    res.status(200).json({ success: true, comments });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const createComment = async (req, res) => {
  const { content, lectureId } = req.body;
  if (!content || !lectureId)
    return res
      .status(400)
      .json({ success: false, message: 'Thiếu nội dung bình luận hoặc mã tài liệu' });

  try {
    const newComment = req.body;
    let comment = new CommentModel({
      ...newComment,
      user: req.userId
    });
    await comment.save();

    comment = await comment.populate('user', ['fullName', 'avatar']);
    res
      .status(200)
      .json({ success: true, message: 'Bình luận đã được đăng.', comment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const updateComment = async (req, res) => {
  const { content } = req.body;
  if (!content)
    return res.status(400).json({ success: false, message: 'Thiếu nội dung bình luận.' });

  try {
    const updateComment = req.body;
    const comment = await CommentModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        ...updateComment,
        user: req.userId
      },
      { new: true }
    ).populate('user', ['fullName']);

    if (!comment)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm thấy bình luận.' });

    res
      .status(200)
      .json({ success: true, message: 'Cập nhật bình luận thành công!', comment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = await CommentModel.findOneAndDelete({ _id: req.params.id });

    if (!comment)
      return res
        .status(404)
        .json({ success: false, message: 'Không tìm tháy bình luận' });

    res
      .status(200)
      .json({ success: true, message: 'Xoá bình luận thành công!', comment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};
