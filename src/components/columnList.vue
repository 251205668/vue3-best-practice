<template>
  <div class="row">
    <div v-for="colum in columnList" :key="colum.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm" style="width: 18rem;">
        <div class="card-body text-center">
        <img :src="colum.avatar" class="rounded-circle border border-right my-3" />
          <h5 class="card-title">{{ colum.title }}</h5>
          <p class="card-text text-left">{{ colum.description }}</p>
          <a href="#" class="btn btn-outline-primary">前往专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType,computed } from 'vue'
// 传入的数据子项
export interface Columprops {
  id: number
  title: string
  avatar?: string
  description: string
}
export default defineComponent({
  name: 'columnList',
  props: {
    list: {
      // 断言为Columprops类型
      type: Array as PropType<Columprops[]>,
      required: true,
    },
  },
  setup(props) {
    let columnList =computed(()=>{
      return props.list.map(column => {
        if(!column.avatar) {
          column.avatar = require('@/assets/column.jpg')
        }
        return column
    })
    })
    return {
      columnList
    }
  }

})
</script>
<style lang="sass" scoped></style>
