<script setup>
import BaseCard from "@/components/common/BaseCard.vue";

const reports = [
  { id: 1, type: "ACH", count: 1240, amount: "$480,000" },
  { id: 2, type: "Card", count: 980, amount: "$720,000" },
  { id: 3, type: "RCC", count: 310, amount: "$95,000" },
];
</script>

<template>
  <BaseCard>
    <h2 class="section-title">Payment Method Summary</h2>
    <p class="section-subtitle">
      Overview of transactions and volume by payment type
    </p>

    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Transactions</th>
          <th>Total Amount</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="r in reports" :key="r.id">
          <td class="type">{{ r.type }}</td>
          <td>{{ r.count }}</td>
          <td class="amount">{{ r.amount }}</td>
        </tr>
      </tbody>
    </table>
  </BaseCard>
</template>

<style scoped>
/* Headings */
.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 4px;
}

.section-subtitle {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-bottom: 16px;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

thead th {
  text-align: left;
  padding: 12px 14px;
  font-weight: 600;
  color: #e5e7eb;
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
}

tbody td {
  padding: 12px 14px;
  color: #cbd5e1;
}

tbody tr {
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
  transition: background 0.2s ease;
}

tbody tr:hover {
  background: rgba(255, 255, 255, 0.04);
}

/* Column emphasis */
.type {
  font-weight: 600;
  color: #f1f5f9;
}

.amount {
  font-weight: 500;
  color: #e5e7eb;
}
</style>
