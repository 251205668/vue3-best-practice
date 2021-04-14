<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">vue3专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <button class="btn btn-outline-light my-2">登陆</button>
      </li>
      <li class="list-inline-item">
        <button class="btn btn-outline-light my-2">注册</button>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <button class="btn btn-outline-light my-2">
          你好 {{ user.username }}
        </button>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface UserProps {
  isLogin: boolean
  username: string
  id: number
}
export default defineComponent({
  name: 'globalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
})
</script>
<style lang="sass" scoped></style>
