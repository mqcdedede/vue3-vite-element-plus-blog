<!--
 * @Description:
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2021-04-26 16:58:39
 * @LastEditors: gumingchen
 * @LastEditTime: 2021-04-30 16:24:01
-->
<template>
  <el-pagination
    class="page margin_t-20"
    background
    layout="total, sizes, prev, pager, next, jumper, ->"

    :current-page="page.current"
    :page-sizes="page.sizes"
    :page-size="page.size"
    :total="page.total"
    @current-change="currentChangeHandle"
    @size-change="sizeChangeHandle" />
    <!-- :hide-on-single-page="page.total <= page.size" -->
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  emits: ['change'],
  setup(props, { emit }) {
    /**
     * @description: 当前页变化事件
     * @param {*}
     * @return {*}
     * @author: gumingchen
     */
    const currentChangeHandle = val => {
      emit('change', { current: val, size: props.page.size })
    }

    /**
     * @description: 当前页数变化事件
     * @param {*}
     * @return {*}
     * @author: gumingchen
     */
    const sizeChangeHandle = val => {
      emit('change', { current: props.page.current, size: val })
    }

    return {
      currentChangeHandle,
      sizeChangeHandle
    }
  }
})
</script>

<style lang="scss" scoped>
.page {
  text-align: center;
  ::v-deep(.el-icon) {
    margin: 0 auto;
  }
}
</style>
