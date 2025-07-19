// 首页访问权限验证
window.addEventListener('load', function() {
    // 检查用户是否已登录
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn || isLoggedIn !== 'true') {
        // 未登录状态，重定向到登录页
        window.location.href = 'login.html';
    } else {
        // 已登录状态 - 显示欢迎信息
        const username = localStorage.getItem('username');
        const welcomeElement = document.getElementById('welcomeMessage');
        
        if (welcomeElement) {
            welcomeElement.textContent = `欢迎回来，${username}！`;
        }
    }
});

// 登出功能
function logout() {
    // 清除登录状态
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    
    // 跳转到登录页
    window.location.href = 'login.html';
}