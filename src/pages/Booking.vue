<template>
  <div class="google-form-container">
    <iframe
      class="google-form-iframe"
      src="https://docs.google.com/forms/d/e/1FAIpQLSc6IIJE4FJLo5d-V3FzgmRJSrlYqmSp3EVhBtpdp_1WwtvsSg/viewform?embedded=true"
      width="100%"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      載入中…
    </iframe>
  </div>
</template>

<style scoped>
.google-form-container {
  width: 100%;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #eaf4ff 0%, #ffffff 100%);
}

.google-form-iframe {
  height: 3000px;
}

/* 手機版給更高的 iframe 高度 */
@media screen and (max-width: 768px) {
  .google-form-iframe {
    height: 3700px;
  }
}
</style>
