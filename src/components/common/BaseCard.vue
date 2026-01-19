<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<style scoped>
.base-card {
  /* Slightly lighter dark surface */
  background: linear-gradient(180deg,
      rgba(30, 41, 59, 0.95),
      /* slate-800 */
      rgba(15, 23, 42, 0.95)
      /* slate-900 */
    );

  color: #e5e7eb;
  border-radius: 16px;
  padding: 24px;

  backdrop-filter: blur(6px);

  box-shadow:
    0 16px 36px rgba(0, 0, 0, 0.55),
    inset 0 0 0 1px rgba(148, 163, 184, 0.14);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.base-card:hover {
  transform: translateY(-2px);
  box-shadow:
    0 22px 48px rgba(0, 0, 0, 0.65),
    inset 0 0 0 1px rgba(96, 165, 250, 0.35);
}
</style>
