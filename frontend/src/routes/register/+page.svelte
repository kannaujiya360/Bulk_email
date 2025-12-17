<script lang="ts">
  import { api } from "$lib/api/client";

  let email = "";
  let password = "";
  let error = "";
  let loading = false;

  async function register() {
    loading = true;
    error = "";

    try {
      await api("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password })
      });

      window.location.href = "/login";
    } catch (e: any) {
      error = e.message;
    } finally {
      loading = false;
    }
  }
</script>

<div class="register-card">
  <h1>Register</h1>

  <input
    placeholder="Email"
    bind:value={email}
  />

  <input
    type="password"
    placeholder="Password"
    bind:value={password}
  />

  {#if error}
    <p class="error">{error}</p>
  {/if}

  <button on:click={register} disabled={loading}>
    {loading ? "Creating..." : "Create Account"}
  </button>
</div>

<style>
  .register-card {
    max-width: 420px;
    margin: 80px auto;
    padding: 24px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    font-family: system-ui, sans-serif;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: 600;
  }

  input {
    width: 100%;
    padding: 10px 12px;
    margin-bottom: 14px;
    border-radius: 6px;
    border: 1px solid #d1d5db;
    font-size: 0.95rem;
  }

  input:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  .error {
    color: #dc2626;
    font-size: 0.85rem;
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    border: none;
    background: #4f46e5;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  button:hover {
    background: #4338ca;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
</style>
