function checkNULL(txt){
    if (txt.value.length == 0){
        return true;
    }
    return false;
}
 function checkTick(select){
   if(select.value=="null")
    return false;
   return true;
 }
function validform(f){
    if (checkNULL(f.username)){
        alert("vui long nhap ten truy cap");
        f.username.focus();
        return;
    }
    if (checkNULL(f.fullname)){
        alert("vui long nhap ten day du");
        f.fullname.focus();
        return;
    }
    if (checkNULL(f.address)){
        alert("vui long nhap dia chi");
        f.address.focus();
        return;
    }
    if (checkNULL(f.password)){
        alert("vui long nhap mat khau");
        f.password.focus();
        return;
    }
    if (checkNULL(f.confirm_password)){
        alert("vui long nhap xac nhan mat khau");
        f.confirm_password.focus();
        return;
    }
    if (checkNULL(f.mobile)){
        alert("vui long nhap so dien thoai");
        f.mobile.focus();
        return;
    }
    if(!checkTick(f.live_area)){
        alert("vui long chon khu vuc sinh song");
        f.live_area.focus();
        return;
    }
    alert("ban da nhap thanh cong");
}