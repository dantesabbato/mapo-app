<template>
  <table class="table table-borderless table_programs">
    <tbody>
    <tr>
      <th rowspan="2">№</th>
      <th rowspan="2">НАИМЕНОВАНИЕ<br>ПРОГРАММЫ ОБУЧЕНИЯ</th>
      <th rowspan="2">КОД</th>
      <th rowspan="2" v-if="checkColumn('hours')">КОЛ-ВО ЧАСОВ</th>
      <th rowspan="2" v-if="checkColumn('period')">СРОК<br>ДЕЙСТ-Я</th>
      <th rowspan="2" v-if="checkColumn('curriculum')">УЧЕБНЫЙ ПЛАН<br>ПРОГРАММЫ</th>
      <th rowspan="2" v-if="checkColumn('diploma')">ИТОГОВЫй ДОКУМЕНТ (ДИПЛОМ)</th>
      <th rowspan="2" v-if="checkColumn('credentials')">ИТОГОВЫй ДОКУМЕНТ (УДОСТОВЕРЕНИЕ)</th>
      <th colspan="2"
          v-if="checkColumn('certificate') ||
                checkColumn('record') ||
                checkColumn('personal_book')"
      >
        ИТОГОВЫЕ  ДОКУМЕНТЫ
      </th>
    </tr>
    <tr>
      <th v-if="checkColumn('certificate')">УДОСТОВЕРЕНИЕ</th>
      <th v-if="checkColumn('record')">ВЫПИСКА ИЗ ПРОТОКОЛА</th>
      <th v-if="checkColumn('personal_book')">ЛИЧНАЯ КНИЖКА</th>
    </tr>
    <tr v-for="(program, index) in programs" :key="index" v-show="expanded || index < 4">
      <td>{{ index + 1 }}</td>
      <td v-html="program.name"></td>
      <td v-html="program.code"></td>
      <td v-if="checkColumn('hours')" v-html="program.hours"></td>
      <td v-if="checkColumn('period')" v-html="program.period"></td>
      <td v-if="checkColumn('curriculum')">
        <a :href="docs_path + program.curriculum + '.pdf'" target="_blank">
          <img :src="docs_path + 'previews/' + program.curriculum + '.png'"
               height="150"
               class="shadow"
          >
        </a>
      </td>
      <td v-if="checkColumn('certificate')">
        <img v-if="program.certificate"
             :src="docs_path + program.certificate"
             height="150"
             class="shadow"
             @click="$store.commit('setPhotoPath', docs_path + program.certificate)"
             data-bs-target="#photoModal"
             data-bs-toggle="modal"
        >
      </td>
      <td v-if="checkColumn('record')">
        <img v-if="program.record"
             :src="docs_path + program.record"
             height="150"
             class="shadow"
             @click="$store.commit('setPhotoPath', docs_path + program.record)"
             data-bs-target="#photoModal"
             data-bs-toggle="modal"
        >
        <div v-else>-</div>
      </td>
      <td v-if="checkColumn('personal_book')">
        <img v-if="program.personal_book"
             :src="docs_path + program.personal_book"
             height="150"
             class="shadow"
             @click="$store.commit('setPhotoPath', docs_path + program.personal_book)"
             data-bs-target="#photoModal"
             data-bs-toggle="modal"
        >
        <div v-else>-</div>
      </td>
      <td v-if="checkColumn('diploma')">
        <div v-if="program.diploma"
             class="cascade"
             @click="$store.commit('setPhotoPath', docs_path + program.diploma + '_2.jpg')"
        >
          <img v-for="n in 3"
               :key="n"
               :src="docs_path + program.diploma + '_' + n + '.jpg'"
               height="125"
               class="shadow"
               data-bs-target="#photoModal"
               data-bs-toggle="modal"
          >
        </div>
        <div v-else>-</div>
      </td>
      <td v-if="checkColumn('credentials')">
        <img v-if="program.credentials"
             :src="docs_path + program.credentials"
             height="150"
             class="shadow"
             @click="$store.commit('setPhotoPath', docs_path + program.credentials)"
             data-bs-target="#photoModal"
             data-bs-toggle="modal"
        >
      </td>
    </tr>
    <tr v-if="programs.length > 4" class="expand_button" @click="expandRows">
      <td :colspan="Object.keys(programs[0]).length + 1">
        <span v-if="expanded">СВЕРНУТЬ</span>
        <span v-else>РАЗВЕРНУТЬ</span>

        <i v-if="expanded" class="bi-chevron-up"></i>
        <i v-else class="bi-chevron-down"></i>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: { programs: Array, docs_path: String },
  data: () => ({ expanded: false }),
  methods: {
    checkColumn(column) {
      return this.programs.filter((e) => ( Object.prototype.hasOwnProperty.call(e, column) )).length > 0
    },
    expandRows() { this.expanded = !this.expanded }
  }
}
</script>

<style lang="sass">@import "style"</style>
