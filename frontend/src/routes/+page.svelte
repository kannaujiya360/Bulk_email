<script lang="ts">
  import { onMount } from "svelte";
  import { api } from "$lib/api/client";

  let loading = true;
  let message = "Checking session...";

  onMount(async () => {
    try {
      // Auth check
      await api("/api/me");

      message = "Welcome back! Redirecting to dashboard...";
      setTimeout(() => {
        window.location.replace("/dashboard");
      }, 600);
    } catch {
      message = "Session expired. Redirecting to login...";
      setTimeout(() => {
        window.location.replace("/login");
      }, 600);
    } finally {
      loading = false;
    }
  });
</script>

<div class="redirect-wrapper">
  <div class="card">
    <div class="spinner"></div>
    <p>{message}</p>
  </div>
</div>

<style>
.redirect-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6366f1, #4338ca);
  font-family: system-ui, sans-serif;
}

.card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}

.spinner {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.4);
  border-top-color: #ffffff;
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

p {
  color: #f9fafb;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  margin: 0;
}
</style>
