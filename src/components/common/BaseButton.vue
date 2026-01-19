<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  background: #2563eb;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background: #1d4ed8;
}
</style>
