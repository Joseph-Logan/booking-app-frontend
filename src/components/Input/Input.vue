<template>
  <div class="center content-inputs">
    <vs-input
      class="w-100-input font-s-1"
      primary
      @keyup="handleChange"
      v-model="value"
      :placeholder="title"
      :type="type"
    >
      <template #icon>
        <i :class="icon"></i>
      </template>

      <template v-if="isValid" #message-success>
          Valid Field
        </template>
        <template v-if="!isValid && value !== ''" #message-danger>
          Invalid Field
        </template>
    </vs-input>
  </div>
</template>

<script>
export default {
  props : {
    status: Number,
    title: String,
    icon: String,
    type: {
      type: String,
      default: () => "text"
    },
    isValid: {
      type: Boolean,
      default: () => false
    }
  },
  data: () => ({
    value: ''
  }),
  methods: {
    handleChange () {
      this.$emit('handle-change', this.value)
    }
  }
}
</script>

<style>

</style>