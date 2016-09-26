# Amaze UI Rating

- [使用示例](http://photino.github.io/amazeui-rating/docs/demo.html)

## 使用说明

1. 获取 Amaze UI Rating

  - [直接下载](https://github.com/photino/amazeui-rating/archive/master.zip)
  - 使用 NPM: `npm install amazeui-rating`

2. 在 Amaze UI 样式之后引入 Rating 样式（`dist` 目录下的 CSS）：

  Amaze UI Rating 依赖 Amaze UI 样式。

  ```html
  <link rel="stylesheet" href="path/to/amazeui.min.css"/>
  <link rel="stylesheet" href="path/to/amazeui.rating.min.css"/>
  ```

3. 引入 Rating 插件（`dist` 目录下的 JS）：

  ```html
  <script src="path/to/jquery.min.js"></script>
  <script src="path/to/amazeui.rating.min.js"></script>
  ```

4. 初始化 Rating:

  Amaze UI Rating 也支持Data API。

  ```js
  $(function() {
      $('.am-rating').rating({
        icons: ['star-o', 'star']
      });
  });
  ```
