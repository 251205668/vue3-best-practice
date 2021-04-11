<template>
<!-- teleport标签作用：将包裹组件隔离传送至指定选择器 -->
<teleport to='#extra'>
  <img alt="Vue logo" src="./assets/logo.png" />
</teleport>
  <p>{{ count }}</p>
  <p>{{ double }}</p>
  <p>x: {{ x }}</p>
  <p>y: {{ y }}</p>
  <h1 v-if="loading">Loading .....</h1>
  <h1 v-if="loaded">
    <div>
      <img :src="result.message" />
    </div>
  </h1>
  <button @click="increase">+1</button>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  toRefs,
  onRenderTriggered,
  watch,
} from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'
interface DataProps {
  count: number
  double: number
  increase: () => void
}
interface DogResult {
  message: string
  status: string
}
// defineComponent 辅助开发
export default defineComponent({
  name: 'App',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  // setup 钩子运行在 beforeCreate和created之间,新版不需要写这两个钩子，直接写setup即可，无法获取data，这是compositionAPI的入口
  setup(props,context) {
    /**
     * 第一种声明响应式data的方式 ref 或者 computed
     */
    //   const count = ref(0)
    //   const increase = () => {
    //     count.value++
    //   }
    //   const double = computed(() => {
    //     return 2 * count.value
    //   })
    //   return {
    //     count,
    //     increase,
    //     double
    //   }

    // 新版声明周期钩子 : https://image.yangxiansheng.top/img/20210411231421.png?imglist
    // debug监听响应式对象更新的console
    onRenderTriggered((event) => {
      console.log(event)
    })

    // 自定义hooks
    const { x, y } = useMousePosition()

    // 利用泛型辅助类型判断
    const { loading, loaded, result } = useURLLoader<DogResult>(
      'https://dog.ceo/api/breeds/image/random'
    )
    watch(result, () => {
      if (result.value) {
        console.log(result.value.message)
      }
    })

    // 增强props 属性插槽，都可以拿到最新的值
    console.log(props.name,context.attrs,context.emit)
    /**
     * 也可以直接通过reactive函数声明相应式data,这里会报错因为 typescript无法识别data的数据类型，需要定义接口处理
     */
    const data: DataProps = reactive({
      count: 0,
      double: computed(() => 2 * data.count),
      increase: () => {
        data.count++
      },
    })

    /**
     * 根据鼠标位置打印坐标的demo
     * 1. vue2.x 写法，组件的feature太臃肿，不能抽离出去，使用mixin也无法判断导入的变量的作用和类型
     * 2. vue3 写法，将feature逻辑代码抽离出去，通过ts的类型推断出导入变量类型和方法作用
     */
    // const x = ref(0)
    // const y = ref(0)
    // const onMouseMoved = (e: MouseEvent) => {
    //   x.value = e.pageX
    //   y.value = e.pageY
    // }

    // onMounted(() => {
    //   document.addEventListener('click',onMouseMoved)
    // })

    // onUnmounted(() => {
    //   document.removeEventListener('click',onMouseMoved)
    // })

    // ！注意 这里的data虽然是响应式对象，但是将里面的属性取出来，属性会变成基本类型，丢失响应式类型
    // 需要截止toRefs改造对象
    const refData = toRefs(data)
    return {
      ...refData,
      x,
      y,
      loading,
      loaded,
      result,
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
