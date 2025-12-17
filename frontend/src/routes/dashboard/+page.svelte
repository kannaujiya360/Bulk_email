<script lang="ts">
  import Protected from "$lib/components/Protected.svelte";
  import { onMount } from "svelte";
  import { api } from "$lib/api/client";

  let stats = { totalCampaigns: 0, emailsSent: 0, successRate: 0 };
  let loading = true;

  onMount(async () => {
    try {
      stats = await api("/api/stats"); // example API
    } catch(e) { console.error(e); }
    finally { loading = false; }
  });
</script>

<Protected>
  <h1 class="page-title">Dashboard</h1>

  {#if loading}
    <p>Loading stats...</p>
  {:else}
    <div class="stats-grid">
      <div class="stat-card">📊 Total Campaigns: {stats.totalCampaigns}</div>
      <div class="stat-card">✉️ Emails Sent: {stats.emailsSent}</div>
      <div class="stat-card">✅ Success Rate: {stats.successRate}%</div>
    </div>
  {/if}
</Protected>

<style>
.page-title { font-size:1.5rem; font-weight:600; margin-bottom:16px; }
.stats-grid {
  display:grid; grid-template-columns:1fr; gap:16px;
}
@media(min-width:640px){ .stats-grid { grid-template-columns:repeat(2,1fr); } }
@media(min-width:1024px){ .stats-grid { grid-template-columns:repeat(3,1fr); } }

.stat-card {
  background:#fff; padding:16px; border-radius:12px; box-shadow:0 8px 20px rgba(0,0,0,0.08);
  font-size:0.95rem; font-weight:500; transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.stat-card:hover { transform:translateY(-4px); box-shadow:0 12px 25px rgba(0,0,0,0.12); }
</style>
