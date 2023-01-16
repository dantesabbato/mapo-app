<template>
  <div class="modal fade"
       tabindex="-1"
       role="dialog"
       id="modalRequest"
       aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-5 shadow">

        <button type="button"
                class="btn btn_close"
                data-bs-dismiss="modal"
                aria-label="Close"
        >
          <i class="bi bi-x-lg"/>
        </button>

        <div class="modal-title">ОСТАВИТЬ ЗАЯВКУ</div>

        <form @submit.prevent="sendForm">
          <div class="form-floating">
            <input    class="form-control"
                      id="floatingName"
                      v-model="callback.name"
                      placeholder="Ваше имя"
            >
            <label for="floatingName">Ваше имя</label>
          </div>

          <div class="form-floating">
            <input    class="form-control"
                      id="floatingPhone"
                      v-model="callback.phone"
                      placeholder="Телефон"
            >
            <label for="floatingPhone">Телефон *</label>
          </div>

          <div class="form-floating">
            <input    class="form-control"
                      id="floatingEmail"
                      v-model="callback.email"
                      placeholder="Email"
            >
            <label for="floatingEmail">Email</label>
          </div>

          <div class="form-floating">
            <textarea class="form-control"
                      id="floatingComment"
                      v-model="callback.comment"
                      placeholder="Комментарий"
                      rows="6"
            />
            <label for="floatingComment">Комментарий</label>
          </div>

          <div class="form-check">
            <input    class="form-check-input"
                      type="checkbox"
                      id="checkAgreement"
                      checked="checked"
            >
            <label class="form-check-label" for="checkAgreement">
              Согласен на <br><a href="/docs/soglasie_na_obrabotku_personaljnyx_dannyx.pdf" target="_blank">
              обработку персональных данных </a>*
            </label>
          </div>

          <button class="btn btn_submit" type="submit">ОТПРАВИТЬ</button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Callback",
    data: () => ({
      callback: { name: null, phone: null, email: null }
    }),
    methods: { sendForm() {} }
  }
</script>

<style lang="sass">
  @import "style"
</style>
