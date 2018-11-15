export default {
    checkAccount :function(account, vue) {
        let result = true;
        if(account.length < 4 || account.length > 12) {
            result = false;
        }
        if(!result) {
            vue.$vux.toast.text(global.CHECK_ACCOUNT,'top');
        }
        return result;   
    },
    checkPassword : function (password, vue) {
        let result = true;
        if(password.length < 8 || password.length > 18) {
            result = false;
        }
        if(!result) {
            vue.$vux.toast.text(global.CHECK_PASSWORD,'top');
        }
        return result;   
    },
    checkCaptcha : function (captcha ,vue) {
        let result = true;
        if(captcha.length > 4 || !/^[0-9]*$/.test(captcha)) {
            result = false;
        }
        if(!result) {
            vue.$vux.toast.text(global.CHECK_CAPTCHA,'top');
        }
        return result;   
    },
    checkPhone : function (phone, vue) {
        let result = true;
        if(/^1(3|4|5|7|8)\d{9}$/.test(phone)) {
            result = false;
        }
        if(!result) {
            vue.$vux.toast.text(global.CHECK_PHONE,'top');
        }
        return result; 
    }
}