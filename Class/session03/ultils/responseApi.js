const { ValidationError } = require('sequelize');
exports.success = (res, message, data = null, code = 200) => {
    return res.status(code).json({
        status: 'success',
        message,
        data
    });
};

// Định nghĩa hàm fail để trả về response lỗi với chuẩn {status, message, data}
exports.fail = (res, message, code = 400) => {
    // Khởi tạo mảng errors sẽ chứa các lỗi cuối cùng
    let errors = [];
    // Nếu message là ValidationError của Sequelize
    if (message instanceof ValidationError) {
        // Tạo một Set để theo dõi các field đã được thêm lỗi, tránh trùng
        const seenFields = new Set();
        // Duyệt từng lỗi trong message.errors của ValidationError
        for (const e of message.errors) {
            // Nếu field này chưa có lỗi nào được thêm
            if (!seenFields.has(e.path)) {
                // Thêm object lỗi với key = tên field, value = message lỗi
                errors.push({ [e.path]: e.message });
                // Đánh dấu field này đã xuất hiện để bỏ qua các lỗi sau của cùng field
                seenFields.add(e.path);
            }
        }
        // Nếu message là mảng
    } else if (Array.isArray(message)) {
        // Nếu là mảng string (vd: ["Lỗi 1", "Lỗi 2"])
        if (message.length > 0 && typeof message[0] === 'string') {
            // Chuyển từng string thành object {message: string} để thống nhất format
            errors = message.map(msg => ({ message: msg }));
        } else {
            // Nếu là mảng object {field,message} → giữ nguyên, không chỉnh sửa
            errors = message;
        }
        // Nếu message là string đơn
    } else if (typeof message === 'string') {
        // Đưa string thành object {message: string} để format thống nhất
        errors = [{ message }];
    }

    // Trả về response JSON với status code, trạng thái fail, mảng message, và data = null
    return res.status(code).json({
        status: 'fail',
        message: errors,
        data: null
    });
};

exports.notFound = (res, message = 'Not found') => {
    return res.status(404).json({
        status: 'fail',
        message: message,
        data: null
    });
}
exports.error = (res, message, code = 500) => {
    return res.status(code).json({
        status: 'error',
        message,
        data: null
    });
};