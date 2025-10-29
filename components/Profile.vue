<template>
  <aside class="profile-sidebar">
    <div class="profile-content">
      <!-- Foto de Perfil -->
      <img
        class="profile-image"
        src="https://media.licdn.com/dms/image/v2/D4D03AQF_sI9GKxjLsQ/profile-displayphoto-crop_800_800/B4DZnAo7HTJEAM-/0/1759873578064?e=1763596800&v=beta&t=yt6QJ9VEEAjXzvLf2NFPE-zUM9oHIgmtBN5TDGsaNSk"
        alt="Everton Tenorio"
      />

      <!-- Nome e Cargo -->
      <div class="profile-header">
        <h2 class="profile-name">Everton Tenorio</h2>
        <p class="profile-role">DevOps • Web Dev • Criar e Resolver</p>
      </div>

      <!-- About Section -->
      <div class="about-section">
        <div class="about-label">sobre/about</div>
        
        <div class="about-content">
          <p class="about-text">
            <br>Crio soluções pra resolver problemas reais e 
            escrevo sobre isso.
          </p>
          
          <a href="mailto:evttenorio@outlook.com" class="about-email">
            <span class="email-label">email:</span>
            evttenorio@outlook.com
          </a>
        </div>
      </div>

      <!-- Redes Sociais (opcional - remova os comentários se quiser usar) -->
      <!-- 
      <div class="social-links">
        <a
          href="https://github.com/everton-tenorio"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          class="social-link"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </a>

        <a
          href="https://linkedin.com/in/everton-st"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          class="social-link"
        >
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </a>
      </div>
      -->
    </div>
  </aside>
</template>

<script setup>
// Sem lógica necessária por enquanto
</script>

<style scoped>
/* Container principal da sidebar */
.profile-sidebar {
  width: 100%;
  padding: 1.5rem;
  background: #1a1a1a;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

/* Desktop - Fixed positioning */
@media (min-width: 1024px) {
  .profile-sidebar {
    position: fixed;
    width: 280px;
    max-height: calc(100vh - 8rem);
    overflow-y: auto;
    top: 6rem;
    left: 2rem;
  }
}

/* Conteúdo da sidebar */
.profile-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Foto de perfil */
.profile-image {
  width: 6rem;
  height: 6rem;
  border-radius: 9999px;
  margin: 0 auto;
  object-fit: cover;
}

/* Header (nome + cargo) */
.profile-header {
  text-align: center;
}

.profile-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Ubuntu', sans-serif;
  margin-bottom: 0.25rem;
}

.profile-role {
  font-size: 0.875rem;
  color: #a3a3a3;
}

/* About Section */
.about-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #262626;
}

.about-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: #737373;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.about-text {
  font-size: 0.9375rem;
  color: #a3a3a3;
  line-height: 1.6;
  text-align: justify;
}

.about-email {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #e5e5e5;
  text-decoration: none;
  padding: 0.625rem 0;
  border-bottom: 1px solid #262626;
  transition: all 0.2s ease;
}

.about-email:hover {
  color: #fff;
  border-bottom-color: #404040;
}

.email-label {
  color: #737373;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

/* Redes sociais (caso descomente) */
.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #262626;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #262626;
  border-radius: 0.5rem;
  color: #a3a3a3;
  font-size: 1.125rem;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: #404040;
  color: #ffffff;
}

/* Mobile - volta ao fluxo normal */
@media (max-width: 1023px) {
  .profile-sidebar {
    position: static;
    width: 100%;
    max-height: none;
  }
}

/* Scrollbar customizada (opcional) */
.profile-sidebar::-webkit-scrollbar {
  width: 6px;
}

.profile-sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.profile-sidebar::-webkit-scrollbar-thumb {
  background: #404040;
  border-radius: 3px;
}

.profile-sidebar::-webkit-scrollbar-thumb:hover {
  background: #525252;
}
</style>