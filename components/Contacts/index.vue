<template>
  <div class="contacts">
    <div v-for="contact in contacts">
      <a class="contacts_content">
        <img :src="contact.image" :alt="contact.name" class="contacts_image" width="22" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  contacts: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.contacts {
  display: flex;
  align-items: center;
}

.contacts_content {
  background: #2c2c2c;
  cursor: pointer;
  margin-right: 10px;
}

.contacts_image {
  border: 1px solid #fff;
  border-radius: 50%;
}
</style>
