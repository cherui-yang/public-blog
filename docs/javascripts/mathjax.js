window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],  // 识别 \(...\) 行内公式
    displayMath: [["$$", "$$"], ["\\[", "\\]"]], // 识别 $$...$$ 或 \[...\] 块级公式
  },
};
// 当页面加载或切换时，自动运行公式渲染
document$.subscribe(() => {
  MathJax.typesetPromise()
})

// ========== 滚动条开关功能 ==========
/*(function() {
    // 创建浮动按钮
    const btn = document.createElement('button');
    btn.textContent = '📜 切换公式滚动条';
    btn.style.position = 'fixed';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.zIndex = '9999';
    btn.style.padding = '8px 16px';
    btn.style.backgroundColor = '#3f51b5';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.borderRadius = '24px';
    btn.style.cursor = 'pointer';
    btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    btn.style.fontSize = '14px';
    btn.style.fontFamily = 'sans-serif';
    
    // 状态: true = 滚动条开启, false = 滚动条关闭
    let scrollbarEnabled = true;
    
    // 获取所有公式容器
    function getMathContainers() {
        return document.querySelectorAll('.arithmatex, .MathJax, mjx-container');
    }
    
    // 应用滚动条样式
    function applyScrollbarStyle() {
        const containers = getMathContainers();
        containers.forEach(el => {
            if (scrollbarEnabled) {
                el.style.overflowX = 'auto';
                el.style.overflowY = 'hidden';
            } else {
                el.style.overflowX = 'visible';
                // 或者完全隐藏溢出内容（不推荐）=> 改为 clip
                // 这里选择允许溢出但隐藏滚动条
                el.style.overflowX = 'visible';
            }
        });
        // 同时修改全局 CSS 规则（用于未来新增的元素）
        let style = document.getElementById('math-scrollbar-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'math-scrollbar-style';
            document.head.appendChild(style);
        }
        if (scrollbarEnabled) {
            style.textContent = `
                .arithmatex, .MathJax, mjx-container {
                    overflow-x: auto !important;
                    overflow-y: hidden !important;
                }
            `;
        } else {
            style.textContent = `
                .arithmatex, .MathJax, mjx-container {
                    overflow-x: visible !important;
                    overflow-y: visible !important;
                }
            `;
        }
    }
    
    // 按钮点击事件
    btn.onclick = () => {
        scrollbarEnabled = !scrollbarEnabled;
        btn.textContent = scrollbarEnabled ? '📜 切换公式滚动条 (开)' : '🚫 切换公式滚动条 (关)';
        applyScrollbarStyle();
        // 可选：轻微提示
        const toast = document.createElement('div');
        toast.textContent = scrollbarEnabled ? '滚动条已开启' : '滚动条已关闭';
        toast.style.position = 'fixed';
        toast.style.bottom = '80px';
        toast.style.right = '20px';
        toast.style.backgroundColor = 'rgba(0,0,0,0.7)';
        toast.style.color = 'white';
        toast.style.padding = '6px 12px';
        toast.style.borderRadius = '20px';
        toast.style.fontSize = '12px';
        toast.style.zIndex = '9999';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 1200);
    };
    
    // 等待页面加载完成后添加按钮
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => document.body.appendChild(btn));
    } else {
        document.body.appendChild(btn);
    }
    
    // 监听页面切换（MKdocs instant loading），重新绑定样式
    if (typeof document$ !== 'undefined') {
        document$.subscribe(() => {
            applyScrollbarStyle();
        });
    } else {
        // 降级：使用 MutationObserver 监听内容变化
        const observer = new MutationObserver(() => applyScrollbarStyle());
        observer.observe(document.body, { childList: true, subtree: true });
    }
})();*/