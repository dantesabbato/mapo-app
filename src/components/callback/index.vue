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
                id="modalRequest_close-btn"
                aria-label="Close"
        >
          <i class="bi bi-x-lg"/>
        </button>

        <div class="modal-title">ОСТАВИТЬ ЗАЯВКУ</div>

        <form @submit.prevent="sendForm" method="POST">
          <div class="form-floating">
            <input    class="form-control"
                      id="floatingName"
                      v-model="v$.callback.name.$model"
                      placeholder="Ваше имя"
            >
            <label for="floatingName">Ваше имя</label>
          </div>
          <div class="input-errors" v-for="(error, index) of v$.callback.name.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
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
                      v-model="v$.callback.email.$model"
                      placeholder="Email"
            >
            <label for="floatingEmail">Email</label>
          </div>
          <div class="input-errors" v-for="(error, index) of v$.callback.email.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
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
                      v-model="agreement"
            >
            <label class="form-check-label" for="checkAgreement">
              Согласен на <br><a href="/docs/soglasie_na_obrabotku_personaljnyx_dannyx.pdf" target="_blank">
              обработку персональных данных </a>*
            </label>
          </div>

          <button class="btn btn_submit" type="submit" :disabled=checkForm>ОТПРАВИТЬ</button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core"
import { required, email } from "@vuelidate/validators"

export default {
    name: "Callback",
    setup () {
      return { v$: useVuelidate() }
    },
    data: () => ({
      callback: { name: null, phone: null, email: null, comment: null },
      agreement: true,
      token: "5848970562:AAE4ytfBpMeSLfM3lUCktZnV9nXX0BbBfgM",
      chat_id: "-1001738212777"
    }),
    computed: {
      checkForm() {
        return !(this.callback.email || this.callback.phone && this.agreement) || this.v$.$invalid
      }
    },
    methods: {
      sendForm() {
        const name = this.callback.name ? `Имя: ${this.callback.name}` : ""
        const phone = this.callback.phone ? `Телефон: ${this.callback.phone}` : ""
        const email = this.callback.email ? `Email: ${this.callback.email}` : ""
        const comment = this.callback.comment ? `Комментарий: ${this.callback.comment}` : ""
        const message = `
          Заявка на обратный звонок
          ${name}
          ${phone}
          ${email}
          ${comment}
        `
        this.$http.post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chat_id}&text=${message}`)
            .then(() => { this.closeForm() }, error => { console.log(error) })
      },
      closeForm() {
        this.callback = {}
        this.v$.$reset()
        document.getElementById("modalRequest_close-btn").click()
      }
    },
    validations() {
      return {
        callback: {
          name: { required },
          email: { email }
        }
      }
    }
  }
</script>

<style lang="sass">
@import "style"
@import "style.mobile"
@import "style.viv"
@import "style.viv-mobile"
</style>
