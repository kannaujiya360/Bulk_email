<script lang="ts">
  import { authUser } from "$lib/stores/auth";
  import { page } from "$app/stores";

  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Campaigns", href: "/campaigns" },
    { name: "New Campaign", href: "/campaigns/new" }
  ];
</script>

<nav class="navbar">
  <!-- LEFT -->
  <div class="logo-links">
    <h1 class="logo">Bulk Email Sender</h1>

    <ul class="nav-links">
      {#each links as link}
        <li>
          <a
            href={link.href}
            class:selected={$page.url.pathname === link.href}
          >
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <!-- RIGHT -->
  {#if $authUser}
    <div class="user-info">
      <span class="user-email">{$authUser.email}</span>
      <a href="/logout" class="logout">Logout</a>
    </div>
  {/if}
</nav>

<style>
/* =======================
   NAVBAR BASE
======================= */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 28px;

  /* 🔥 TAGADA DARK GRADIENT */
  background: linear-gradient(135deg, #0f172a, #1e293b);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

  font-family: system-ui, sans-serif;
  position: sticky;
  top: 0;
  z-index: 100;
}

/* =======================
   LEFT SECTION
======================= */
.logo-links {
  display: flex;
  align-items: center;
  gap: 36px;
}

/* LOGO */
.logo {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  background: linear-gradient(135deg, #a5b4fc, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* =======================
   NAV LINKS
======================= */
.nav-links {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 18px;
}

.nav-links li a {
  text-decoration: none;
  color: #c7d2fe;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 8px;
  transition: all 0.25s ease;
}

/* Hover */
.nav-links li a:hover {
  background: rgba(99, 102, 241, 0.18);
  color: #ffffff;
}

/* Active Link */
.nav-links li a.selected {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: #ffffff;
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.5);
}

/* =======================
   RIGHT SECTION
======================= */
.user-info {
  display: flex;
  align-items: center;
  gap: 18px;
}

/* USER EMAIL */
.user-email {
  font-size: 0.9rem;
  color: #e5e7eb;
  opacity: 0.9;
}

/* LOGOUT BUTTON */
.logout {
  font-size: 0.9rem;
  padding: 6px 14px;
  border-radius: 999px;
  color: #fecaca;
  background: rgba(220, 38, 38, 0.18);
  text-decoration: none;
  transition: all 0.25s ease;
}

.logout:hover {
  background: rgba(220, 38, 38, 0.35);
  color: #ffffff;
  transform: translateY(-1px);
}

/* =======================
   RESPONSIVE (MOBILE)
======================= */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .logo-links {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    width: 100%;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .nav-links li a {
    width: 100%;
  }

  .user-info {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
