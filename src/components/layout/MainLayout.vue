<script setup>
import Sidebar from './Sidebar.vue'
import TopBar from './TopBar.vue'

</script>

<template>
  <div class="layout">
    <aside class="sidebar-wrapper">
      <Sidebar />
    </aside>

    <section class="main">
      <TopBar />
      <div class="content">
        <router-view />
      </div>
    </section>
  </div>
</template>



<style scoped>
.layout {
  display: flex;
  height: 100vh;
  background: radial-gradient(circle at top, #020617, #030712);

}

.sidebar-wrapper {
  width: 260px;
  box-shadow: inset -1px 0 0 rgba(255, 255, 255, 0.03);
}


.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 32px;
  overflow-y: auto;
}
</style>
