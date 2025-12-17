<script lang="ts"></script>

<div class="loader-wrapper">
  <div class="spinner"></div>
</div>

<style>
  .loader-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
  }

  .spinner {
    height: 32px;
    width: 32px;
    border: 4px solid #4f46e5;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
