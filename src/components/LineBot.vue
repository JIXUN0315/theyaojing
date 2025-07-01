<template>
  <div class="line-chat-widget">
    <div class="chat-button" @click="toggleQRCode">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" alt="LINE Icon" />
    </div>

    <transition name="fade">
      <div v-if="showQR" class="qr-popup">
        <div class="qr-header">
          <span>加入我們的 LINE 官方帳號</span>
          <button @click="toggleQRCode">✕</button>
        </div>
        <img class="qr-image" src="@/assets/images/qrCode.png" alt="LINE QR Code" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showQR = ref(false)
const toggleQRCode = () => {
  showQR.value = !showQR.value
}
</script>

<style scoped lang="scss">
.line-chat-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  border-radius: 50%;

  .chat-button {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-color: #06c755;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    img {
      width: 70%;
      height: 70%;
      object-fit: contain;
    }
  }

  .qr-popup {
    position: absolute;
    bottom: 80px;
    right: 0;
    background: white;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    width: 200px;
    text-align: center;

    .qr-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;

      span {
        font-weight: bold;
      }

      button {
        border: none;
        background: none;
        font-size: 1rem;
        cursor: pointer;
        width: 23px;
      }
    }

    .qr-image {
      width: 100%;
      height: auto;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
