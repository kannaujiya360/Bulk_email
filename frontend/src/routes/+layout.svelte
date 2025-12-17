<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<div class="app-wrapper">
  <Navbar />

  <div class="content-wrapper">
    <Sidebar />

    <main class="main-content">
      <slot />
    </main>
  </div>
</div>

<style>
  .app-wrapper {
    min-height: 100vh;
    background: #f3f4f6;
  }

  .content-wrapper {
    display: flex;
    min-height: calc(100vh - 60px); /* navbar height approx */
  }

  .main-content {
    flex: 1;
    padding: 24px;
    overflow-y: auto;
  }

  /* Tablet & mobile */
  @media (max-width: 768px) {
    .content-wrapper {
      flex-direction: column;
    }

    .main-content {
      padding: 16px;
    }
  }
</style>
