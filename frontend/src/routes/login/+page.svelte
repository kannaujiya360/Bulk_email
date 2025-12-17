<script lang="ts">
  import { loginSchema } from "$lib/schemas/auth.schema";
  import { api } from "$lib/api/client";
  import { authUser } from "$lib/stores/auth";

  let email = "";
  let password = "";
  let error = "";
  let loading = false;

  async function handleLogin() {
    error = "";
    const parsed = loginSchema.safeParse({ email, password });
    if (!parsed.success) {
      error = parsed.error.errors[0].message;
      return;
    }

    loading = true;
    try {
      const user = await api<{ email: string }>("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password })
      });
      authUser.set(user);
      window.location.href = "/dashboard";
    } catch (e: any) {
      error = e.message;
    } finally {
      loading = false;
    }
  }
</script>

<div class="login-wrapper">
  <div class="login-card">
    <h1>Login</h1>
    <input placeholder="Email" bind:value={email} />
    <input type="password" placeholder="Password" bind:value={password} />

    {#if error}
      <p class="error">{error}</p>
    {/if}

    <button on:click={handleLogin} disabled={loading}>
      {loading ? "Logging in..." : "Login"}
    </button>

    <p class="footer-text">
      No account? <a href="/register">Register</a>
    </p>
  </div>
</div>

<style>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  font-family: system-ui, sans-serif;
}

.login-card {
  width: 100%;
  max-width: 420px;
  padding: 28px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity:1; transform: translateY(0);} }

h1 { text-align: center; margin-bottom: 22px; font-size: 1.6rem; font-weight: 600; color: #111827; }

input {
  width: 100%; padding: 12px 14px; margin-bottom: 16px; border-radius: 6px; border: 1px solid #d1d5db; font-size: 0.95rem;
}

input:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2); }

.error { color: #dc2626; font-size: 0.85rem; margin-bottom: 10px; }

button {
  width: 100%; padding: 12px; border-radius: 6px; border: none; background: #4f46e5; color: #fff; font-size: 1rem; cursor: pointer; transition: background 0.25s ease, transform 0.2s ease;
}

button:hover:not(:disabled) { background: #4338ca; transform: translateY(-2px); }
button:disabled { opacity: 0.6; cursor: not-allowed; }

.footer-text { margin-top: 16px; text-align: center; font-size: 0.85rem; color: #374151; }
.footer-text a { color: #4f46e5; text-decoration: none; font-weight: 500; }
.footer-text a:hover { text-decoration: underline; }
</style>
