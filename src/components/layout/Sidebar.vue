<script setup>
import { useNavigationStore } from "@/stores/navigation.store";
import { storeToRefs } from "pinia";

const { menu } = storeToRefs(useNavigationStore());
</script>

<template>
  <div class="sidebar">
    <!-- Sidebar Header (MATCHES TOPBAR HEIGHT) -->
    <div class="sidebar-header">
      Partner Hub
    </div>

    <!-- Navigation -->
    <nav class="nav">
      <router-link v-for="item in menu" :key="item.path" :to="item.path" class="nav-link" active-class="active">
        <span class="icon">{{ item.icon }}</span>
        {{ item.label }}
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #020617, #020617);
}

/* 🔑 SAME HEIGHT AS TOPBAR */
.sidebar-header {
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-size: 18px;
  font-weight: 600;
  color: #f9fafb;
  border-bottom: 1px solid #1f2937;
}

.nav {
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  font-size: 14px;
  color: #94a3b8;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: #111827;
  color: #fff;
}

.active {
  background: linear-gradient(90deg, #1d4ed8, #2563eb);
  color: white;
}

.icon {
  width: 18px;
  text-align: center;
}
</style>
