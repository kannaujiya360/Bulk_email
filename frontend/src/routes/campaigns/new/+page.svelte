<script lang="ts">
  import { onMount } from "svelte";
  import Quill from "quill";
  import Protected from "$lib/components/Protected.svelte";
  import { api } from "$lib/api/client";

  let title = "";
  let editor: HTMLDivElement;
  let quill: Quill;

  onMount(() => {
    quill = new Quill(editor, { theme: "snow" });
  });

  async function sendCampaign() {
    await api("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
        title,
        content: quill.root.innerHTML
      })
    });

    window.location.href = "/campaigns";
  }
</script>

<Protected>
  <h1 class="text-2xl font-semibold mb-4">New Campaign</h1>

  <input
    class="w-full border p-2 mb-4 rounded"
    placeholder="Campaign title"
    bind:value={title}
  />

  <div bind:this={editor} class="bg-white h-64 mb-4"></div>

  <button
    class="bg-indigo-600 text-white px-6 py-2 rounded"
    on:click={sendCampaign}
  >
    Send Campaign
  </button>
</Protected>
