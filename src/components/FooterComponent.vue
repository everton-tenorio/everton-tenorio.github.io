<template>
  <div :class="['footer', { visible: visible }]">
    <a href="https://impulso.link/oportunidades">
      <p>🚀 Oportunidades 100% remotas da <u>impulso.team</u></p>
    </a>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.visible = true;
    }, 2000); 
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.5s ease-in-out;
}

.footer.visible {
  transform: translateY(0);
}

.content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer p {
  margin: 0;
  color: white;
}
</style>
