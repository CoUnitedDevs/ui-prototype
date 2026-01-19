<template>
  <div class="card">
    <p class="title">{{ title }}</p>
    <h2 class="value">{{ value }}</h2>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: String,
});
</script>

<style scoped>
.card {
  background: linear-gradient(180deg,
      rgba(15, 23, 42, 0.95),
      rgba(2, 6, 23, 0.95));

  border-radius: 14px;
  padding: 20px 22px;

  border-left: 4px solid #2563eb;

  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.45),
    inset 0 0 0 1px rgba(148, 163, 184, 0.08);

  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.6),
    inset 0 0 0 1px rgba(59, 130, 246, 0.35);
}

.title {
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #94a3b8;
  margin-bottom: 6px;
}

.value {
  font-size: 28px;
  font-weight: 700;
  color: #f8fafc;
}
</style>
