<template>
  <div class="about-card">
    <div class="about-card_content">
      <h2 class="about-card_title">
        Olá, eu sou<br />
        Jorge Pereira, <br />Desenvolvedor Fullstack
      </h2>
      <p class="about-card_description">
        Minha paixão por tecnologia me conduziu à busca de soluções criativas
        para problemas complexos.
      </p>
    </div>

    <Contacts
      :contacts="[
        { name: 'GitHub', image: '/images/github.png', link: '' },
        { name: 'LinkedIn', image: '/images/linkedin.png', link: '' },
      ]"
    />
  </div>
</template>

<style scoped>
.about-card {
  background: #2c2c2c;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
}

.about-card_content {
  text-align: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.about-card_title {
  font-size: 24px;
  margin-bottom: 10px;
}

.about-card_description {
  font-size: 16px;
  margin-top: 30px;
}
</style>
