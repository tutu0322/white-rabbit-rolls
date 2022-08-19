window.onload=function(){

    

    var close = document.querySelector(".close");
    var bigbox = document.querySelector(".biggest");
    var zh = document.querySelector("#zh");
    var mm = document.querySelector("#mm");
    var loginflag = 0;//关闭按钮信号
    //关闭按钮
    close.onclick = function(){
        if(loginflag == 0){
            bigbox.style.display = "flex";
            loginflag = 1;
        }
        if(loginflag == 1){
            bigbox.style.display = "none";
            loginflag = 0;
        }
    }
    //点击文字框，边框颜色变化
    {
    zh.onfocus = function(){
        zh.style.borderColor="#007fff"; 
        mm.style.borderColor="#e9e9e9"; 
    }
    mm.onfocus = function(){
        mm.style.borderColor="#007fff"; 
        zh.style.borderColor="#e9e9e9"; 
    }
    }
    
    // var container = document.querySelector(".container");
    //模拟点击其他框，边框颜色变化
    var appBox = document.querySelector(".app_box");
    var oBox = document.querySelector(".o_box");
    var lastB = document.querySelector(".lastb");
    {
    
    appBox.onclick = function(){
        zh.style.borderColor="#e9e9e9"; 
        mm.style.borderColor="#e9e9e9"; 
    }
    oBox.onclick = function(){
        zh.style.borderColor="#e9e9e9"; 
        mm.style.borderColor="#e9e9e9"; 
    }
    lastB.onclick = function(){
        zh.style.borderColor="#e9e9e9"; 
        mm.style.borderColor="#e9e9e9"; 
    }
    }

    var obj ={"userinfo":"110","userinfo":"123"};
    var user = JSON.stringify(obj);
    localStorage.setItem('userinfo',user);

    // var obj ={"userinfo":"220","userpwd":"14523"};
    // var user = JSON.stringify(obj);
    // localStorage.setItem('userinfo',user);

    var username = ['name'];
    var a ={
        [username[0]]:'1'
    }


    var loginBtn = document.querySelector('#dlbtn');
    loginBtn.onclick = function(){
        var userinfo = zh.value;
        var userpwd = mm.value;
        console.log(userinfo+'=1');
        console.log(userpwd+"=2");
        localStorage
    }
}