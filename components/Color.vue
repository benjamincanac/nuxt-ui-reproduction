<template>
  <div>Color: {{ color }}</div>
</template>

<script lang="ts">
import { useAppConfig } from '#imports'
import appConfig from '#build/app.config'

export default defineComponent({
  props: {
    color: {
      type: String as PropType<typeof appConfig.ui.color>,
      default: appConfig.ui.color
    }
  },
  setup (props) {
    const appConfig = useAppConfig()

    const color = computed(() => props.color || appConfig.ui.color)

    return {
      color
    }
  }
})
</script>