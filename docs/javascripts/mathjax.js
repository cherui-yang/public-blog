window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],  // 让网页识别行内公式 \(...\)
    displayMath: [["\\[", "\\]"]], // 让网页识别块级公式 \[...\]
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// 这个函数确保页面在加载或切换时，新内容中的公式能被正确渲染
document$.subscribe(() => { 
  MathJax.typesetPromise()
})