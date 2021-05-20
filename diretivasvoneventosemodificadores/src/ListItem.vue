<template>
  <li @click="$emit('increment')">click me</li>
</template>

<script>
export default {
  name:'ListItem',
}
</script>