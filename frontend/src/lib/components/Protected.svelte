<script lang="ts">
  import { onMount } from "svelte";
  import { authUser, authLoading } from "$lib/stores/auth";
  import { api } from "$lib/api/client";
  import Loader from "./Loader.svelte";

  let ready = false;

  onMount(async () => {
    try {
      const user = await api<{ email: string }>("/api/me");
      authUser.set(user);
    } catch {
      window.location.href = "/login";
    } finally {
      authLoading.set(false);
      ready = true;
    }
  });
</script>

{#if !ready || $authLoading}
  <Loader />
{:else}
  <slot />
{/if}
