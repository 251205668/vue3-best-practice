import axios from 'axios'
import { reactive, ref } from 'vue'
// 此处泛型作用 当result返回结果时，将result类型置位T类型，否则为null
function useURLLoader<T>(url: string) {

  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)
  const result = ref<T | null>(null)

   axios.get(url).then(res => {
     if(res.data) {
      loading.value= false
      loaded.value = true
      result.value = res.data
     }
   }).catch(e => {
     error.value = e
   })
   return {
     loading,
     loaded,
     error,
     result
   }
}

export default useURLLoader
