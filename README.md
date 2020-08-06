# imglazyload

## 基于vue的指令directive的图片懒加载，核心是通过IntersectionObserver类来注册元素的监听，通过isIntersecting方法判断图片元素是否需要加载。只有当图片需要加载的时候才会动态创建图片元素，然后将路径赋值会原来的真正的图片对象上

核心文件：src/directive/imgLazy.js

1、全局注册

```
import imgLazy from '@/directive/imgLazy.js'
Vue.directive('imgLazy', imgLazy)
```

2.局部注册

```
import imgLazy from '@/directive/imgLazy.js'
export default {
  directives: {
    imgLazy: imgLazy,
  },
```
