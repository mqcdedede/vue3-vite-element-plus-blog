<template>
  <span>
    <i class="iconfont" :style="style" :class="`icon-${name}`" />
  </span>
</template>
<!--
 * 使用:
 *   1.组件模版中使用
 *      [<g-icon name="name" size="size" color="color"></g-icon>]
 * 注意:
 *    1.name      为 阿里图库图标名称 不包括前面的 icon-（必填）
 *    2.size      大小 font-size
 *    3.color     颜色
-->
<script >
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: () => '14px'
    },
    color: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const style = computed(() => {
      return {
        'font-size': props.size,
        color: props.color
      }
    })
    return {
      style
    }
  }
})
</script>

<style lang="scss" scoped>
@import '//at.alicdn.com/t/font_2727717_3p1wktykydn.css';
span {
  padding: 0 2px;
}
</style>
