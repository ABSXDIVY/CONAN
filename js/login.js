// 获取DOM元素
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

// 注册按钮点击事件
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

// 登录按钮点击事件
signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// 表单提交处理
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // 获取表单数据
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    // 简单验证
    if (!email || !password) {
        alert('请填写邮箱和密码');
        return;
    }
    
    // 这里应该发送请求到后端进行验证
    console.log('登录数据:', { email, password });
    window.location.href = 'index.html';
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取表单数据
    const username = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    // 简单验证
    if (!username || !email || !password) {
        alert('请填写所有必填字段');
        return;
    }
    
    // 这里应该发送请求到后端进行注册
    console.log('注册数据:', { username, email, password });
    alert('注册成功，即将自动登录');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    // 获取所有第三方登录链接
    const thirdPartyLinks = document.querySelectorAll('.third-party-login');
    
    // 为每个链接添加点击事件
    thirdPartyLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 延迟1秒后，原页面跳转到index.html
            // 延迟时间可根据实际需求调整（确保新标签页正常打开）
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    });
});