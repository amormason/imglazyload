/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import baseImg from '@/assets/logo.png';

const showImage = (el, imgSrc) => {
  const img = new Image();
  img.src = imgSrc;

  //  图片正常加载时，设置到绑定元素上去
  img.onload = () => {
    el.src = imgSrc;
    el.isLoaded = true;
  };
  // 图片不能正常加载时，设置加载出错的图片
  img.onerror = () => {
    el.src = baseImg;
    el.isLoaded = true;
  };
};

// 创建一个监听器
const observer = new IntersectionObserver((entries) => {
  // entries是所有被监听对象的集合(这里是所有使用该指令的元素集合)
  entries.forEach((entry) => {
    console.log(entry);
    // 当被监听元素到临界值且未加载图片时触发。
    if (entry.isIntersecting && !entry.target.isLoaded) {
      showImage(entry.target, entry.target.data_src);
    }
  });
});

export default {
  // 这里用inserted和bind都行，因为IntersectionObserver时异步的，以防意外还是用inserted好一点
  // inserted和bind的区别在于inserted时元素已经插入页面，能够直接获取到dom元素的位置信息。
  inserted(el, binding) {
    // 初始化时展示默认图片
    el.src = baseImg; // 将需要加载的默认图片地址绑定在dom上
    el.data_src = binding.value;
    observer.observe(el);
  },
  unbind() {
    // 停止监听
    observer.disconnect();
  },

};
