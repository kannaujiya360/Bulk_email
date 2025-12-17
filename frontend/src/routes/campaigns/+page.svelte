<script lang="ts">
  import { onMount } from "svelte";
  import Protected from "$lib/components/Protected.svelte";
  import { api } from "$lib/api/client";

  let campaigns: any[] = [];
  let loading = true;

  onMount(async () => {
    campaigns = await api("/api/campaigns");
    loading = false;
  });
</script>

<Protected>
  <div class="header">
    <h1>Campaigns</h1>
    <a href="/campaigns/new" class="btn-primary">
      New Campaign
    </a>
  </div>

  {#if loading}
    <p class="loading">Loading...</p>
  {:else}
    <div class="table-card">
      <table>
        <thead>
          <tr>
            <th class="left">Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {#each campaigns as c}
            <tr>
              <td class="left">{c.name}</td>
              <td class="center">{c.status}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</Protected>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .btn-primary {
    background: #4f46e5;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 0.9rem;
    transition: background 0.2s ease;
  }

  .btn-primary:hover {
    background: #4338ca;
  }

  .loading {
    font-size: 0.95rem;
    color: #555;
  }

  .table-card {
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    overflow: hidden;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
  }

  thead {
    background: #f3f4f6;
  }

  th,
  td {
    padding: 10px;
  }

  th {
    font-weight: 600;
    color: #333;
  }

  tbody tr {
    border-top: 1px solid #e5e7eb;
  }

  tbody tr:hover {
    background: #f9fafb;
  }

  .left {
    text-align: left;
  }

  .center {
    text-align: center;
  }
</style>
