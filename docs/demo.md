---
title: Amaze UI Rating 使用演示
---

## Rating 使用演示

### 无评分

`````html
<form data-am-rating>
  <input type="hidden" name="score">
  <a class="am-padding-lg" role="button">
    <i class="am-icon-star-o"></i>
    <i class="am-icon-star-o"></i>
    <i class="am-icon-star-o"></i>
    <i class="am-icon-star-o"></i>
    <i class="am-icon-star-o"></i>
 </a>
</form>
`````

```html
<form data-am-rating>
  <input type="hidden" name="score">
  <a class="am-padding-lg" role="button">
    <i class="am-icon-star-o"></i>
    <i class="am-icon-star-o"></i>
    <i class="am-icon-star-o"></i>
    <i class="am-icon-star-o"></i>
    <i class="am-icon-star-o"></i>
 </a>
</form>
```

### 有评分（5分制）

`````html
<form data-am-rating>
  <input type="hidden" name="score">
  <a class="am-padding-lg" data-am-icons="heart-o,heart" data-am-score="2" role="button">
    <i class="am-icon-heart"></i>
    <i class="am-icon-heart"></i>
    <i class="am-icon-heart-o"></i>
    <i class="am-icon-heart-o"></i>
    <i class="am-icon-heart-o"></i>
 </a>
</form>
`````

```html
<form data-am-rating>
  <input type="hidden" name="score">
  <a class="am-padding-lg" data-am-icons="heart-o,heart" data-am-score="2" role="button">
    <i class="am-icon-heart"></i>
    <i class="am-icon-heart"></i>
    <i class="am-icon-heart-o"></i>
    <i class="am-icon-heart-o"></i>
    <i class="am-icon-heart-o"></i>
 </a>
</form>
```

### 有评分（10分制）

`````html
<form id="rating">
  <input type="hidden" name="score">
  <a class="am-padding-lg" role="button">
    <i class="am-icon-star"></i>
    <i class="am-icon-star"></i>
    <i class="am-icon-star"></i>
    <i class="am-icon-star-half-empty"></i>
    <i class="am-icon-star-o"></i>
 </a>
</form>
`````

```html
<form>
  <input type="hidden" name="score">
  <a class="am-padding-lg" role="button">
    <i class="am-icon-star"></i>
    <i class="am-icon-star"></i>
    <i class="am-icon-star"></i>
    <i class="am-icon-star-half-empty"></i>
    <i class="am-icon-star-o"></i>
 </a>
</form>
```
```js
<script>
  $(function() {
    $('#rating').rating({
      icons: ['star-o', 'star-half-empty', 'star'],
      score: 3.6
    });
  });
</script>
```

<script src="../dist/amazeui.rating.min.js"></script>
<script>
  $(function() {
    $('#rating').rating({
      icons: ['star-o', 'star-half-empty', 'star'],
      score: 3.6
    });
  });
</script>
