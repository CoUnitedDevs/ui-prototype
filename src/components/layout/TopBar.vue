<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header class="topbar">
    <div class="breadcrumb">
      <span class="title">
        {{ route.meta.title || 'Dashboard' }}
      </span>
      <span class="divider">/</span>
      <span class="subtitle">
        {{ route.meta.section || 'Overview' }}
      </span>
    </div>

    <div class="user">
      <span class="icon">👤</span>
      <span>Partner Admin</span>
    </div>
  </header>
</template>
<style scoped>
.topbar {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: linear-gradient(180deg, #020617, #020617);
  border-bottom: 1px solid #1f2937;
}

/* Breadcrumb container */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Main title */
.title {
  font-size: 18px;
  font-weight: 600;
  color: #f9fafb;
  letter-spacing: 0.2px;
}

/* Divider */
.divider {
  font-size: 14px;
  color: #374151;
}

/* Subtitle */
.subtitle {
  font-size: 14px;
  font-weight: 500;
  color: #9ca3af;
}

/* User section */
.user {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #d1d5db;
}

.user .icon {
  opacity: 0.8;
}
</style>
