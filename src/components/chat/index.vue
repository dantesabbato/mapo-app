<template>
  <div id="chat">
    <div v-if="chat_window" class="window window_chat shadow">
      <div class="title">
        <i class="bi bi-chat-left-text"/>
        Online-консультант
        <i class="bi bi-x-circle-fill" @click="closeWindow"/>
      </div>
      <div class="body">
        <div v-if="messages">
          <div v-for="message in messages" :key="message" :class="message.sender">
            {{ message.text }}
          </div>
        </div>
      </div>
      <div class="footer">
        <textarea/>
        <button><i><i class="bi bi-send-fill"></i></i></button>
      </div>
    </div>

    <div v-if="callback_window" class="window window_callback">
      <div class="title">
        Обратный звонок
        <i class="bi bi-x-circle-fill" @click="closeWindow"/>
      </div>
    </div>

    <div v-if="buttons" class="buttons">
      <button class="buttons_chat d-none" @click="openWindow('chat')"><i class="bi bi-chat-left-text"></i></button>
      <button class="buttons_callback"
              data-bs-toggle="modal"
              data-bs-target="#modalRequest"
      ><i class="bi bi-telephone-inbound"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    callback_window: false,
    chat_window: false,
    buttons: true,
    messages: [
      { sender: "manager", text: "Сохранить историю переписки на электронную почту" },
      { sender: "client", text: "Добрый день" }
    ]
  }),
  methods: {
    openWindow(el) {
      (el === "chat") ? this.chat_window = true : this.callback_window = true
      this.buttons = false
    },
    closeWindow() {
      this.callback_window = false
      this.chat_window = false
      this.buttons = true
    }
  }
}
</script>

<style lang="sass">@import "style"</style>
