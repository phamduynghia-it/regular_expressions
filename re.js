function checkNULL(txt) {
    return txt.value.length === 0;
}

function checkTick(select) {
    return select.value !== "null";
}
// function notCheck(cb){
//     if (cb.checked)
// }
function validform(event, f) {
    // Ngăn hành động mặc định (submit) khi form không hợp lệ
    event.preventDefault();

    if (checkNULL(f.username)) {
        alert("Vui lòng nhập tên truy cập");
        f.username.focus();
        return;
    }
    if (checkNULL(f.fullname)) {
        alert("Vui lòng nhập tên đầy đủ");
        f.fullname.focus();
        return;
    }
    if (checkNULL(f.address)) {
        alert("Vui lòng nhập địa chỉ");
        f.address.focus();
        return;
    }
    if (checkNULL(f.password)) {
        alert("Vui lòng nhập mật khẩu");
        f.password.focus();
        return;
    }
    if (checkNULL(f.confirm_password)) {
        alert("Vui lòng nhập xác nhận mật khẩu");
        f.confirm_password.focus();
        return;
    }
    if (checkNULL(f.mobile)) {
        alert("Vui lòng nhập số điện thoại");
        f.mobile.focus();
        return;
    }
    if (!checkTick(f.live_area)) {
        alert("Vui lòng chọn khu vực sinh sống");
        f.live_area.focus();
        return;
    }

    // Nếu không có lỗi, submit form
    alert("Bạn đã nhập thành công!");
    f.submit(); // Chỉ gửi form nếu tất cả đều hợp lệ
}
