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
    }, 800); 
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #1f1e1e;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.5s ease-in-out;
}

.footer.visible {
  transform: translateY(0);
}

.footer p {
  margin: 0;
  padding-bottom: 20px;
  color: white;
}
</style>
