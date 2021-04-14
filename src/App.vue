<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { Columprops } from './components/columnList.vue'
import GlobalHeader, { UserProps } from './components/globalHeader.vue'
// 注意是个数组
const resData: Columprops[] = [
  {
    id: 1,
    title: '专栏1',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg?x-oss-process=image/resize,m_pad,h_50,w_50',
    description: '帅气的专刊',
  },
  {
    id: 2,
    title: '专栏2',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg?x-oss-process=image/resize,m_pad,h_50,w_50',
    description: '帅气的专刊2',
  },
  {
    id: 3,
    title: '专栏2',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg?x-oss-process=image/resize,m_pad,h_50,w_50',
    description: '帅气的专刊2',
  },
  {
    id: 3,
    title: 'dasd',
    description: 'dasdasd',
  },
  {
    id: 5,
    title: '专栏2',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg?x-oss-process=image/resize,m_pad,h_50,w_50',
    description: '帅气的专刊2',
  },
  {
    id: 6,
    title: '专栏2',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg?x-oss-process=image/resize,m_pad,h_50,w_50',
    description: '帅气的专刊2',
  },
]
const user: UserProps = {
  isLogin: true,
  username: 'hello',
  id: 12,
}
export default defineComponent({
  name: 'App',
  props: {},
  components: {
    ColumnList,
    GlobalHeader,
  },
  setup() {
    return {
      list: resData,
      user,
    }
  },
})
</script>
<style lang="sass" scoped></style>
