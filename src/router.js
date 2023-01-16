import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: "/",                    name: "Главная",                    component: () => import("./views/home") },
  { path: "/about",                                                   component: () => import("./views/about"),
    children: [
      { path: "",                      name: "О компании",                                               component: () => import("./views/about/main") },
      { path: "basic_information",     name: "Основные сведения",                                        component: () => import("./views/about/partials/basic_information") },
      { path: "structure",             name: "Структура и органы управления",                            component: () => import("./views/about/partials/structure") },
      { path: "documents",             name: "Документы, лицензии и аккредитации",                       component: () => import("./views/about/partials/documents") },
      { path: "standards",             name: "Образовательные стандарты",                                component: () => import("./views/about/partials/standards") },
      { path: "paid_services",         name: "Платные образовательные услуги",                           component: () => import("./views/about/partials/paid_services") },
      { path: "personal_data",         name: "Обработка персональных данных",                            component: () => import("./views/about/partials/personal_data") },
      { path: "logistics",             name: "Материально-техническое обеспечение",                      component: () => import("./views/about/partials/logistics") },
      { path: "activities",            name: "Финансово-хозяйственная деятельность",                     component: () => import("./views/about/partials/activities") },
      { path: "vacancies",             name: "Вакансии",                                                 component: () => import("./views/about/partials/vacancies") },
      { path: "management",            name: "Руководство",                                              component: () => import("./views/about/partials/management") },
      { path: "environment",           name: "Доступная среда",                                          component: () => import("./views/about/partials/environment") },
      { path: "scheme",                name: "Структура сайта",                                          component: () => import("./views/about/partials/scheme") },
      { path: "cooperation",           name: "Международное сотрудничество",                             component: () => import("./views/about/partials/cooperation") }
    ]
  },
  { path: "/:pathMatch(.*)*",     name: "404",                        component: () => import("./views/404") },
  { path: "/services",            name: "Услуги",                     component: () => import("./views/services") },
  { path: "/contacts",            name: "Контакты",                   component: () => import("./views/contacts") },
  { path: "/mention",             name: "Отзывы",                     component: () => import("./views/mention") },
  { path: "/training",                                                component: () => import("./views/training"),
    children: [
      { path: "",                      name: "Профессиональное обучение",                                component: () => import("./views/training/main") },
      { path: "retraining",            name: "Подготовка и переподготовка рабочих и служащих",           component: () => import("./views/training/partials/retraining") },
      { path: "advanced",              name: "Повышение квалификации рабочих и служащих",                component: () => import("./views/training/partials/advanced") }
    ]
  },
  { path: "/additional",                                              component: () => import("./views/additional"),
    children: [
      { path: "",                      name: "Дополнительное профессиональное образование",              component: () => import("./views/additional/main") },
      { path: "retraining",            name: "Профессиональная переподготовка",                          component: () => import("./views/additional/partials/retraining") },
      { path: "advanced",              name: "Повышение классификации",                                  component: () => import("./views/additional/partials/advanced") }
    ]
  },
  { path: "/labour_protection",                                       component: () => import("./views/labour_protection"),
    children: [
      { path: "",                      name: "Охрана труда",                                             component: () => import("./views/labour_protection/main") },
      { path: "first_aid_training",    name: "Оказание ПП",                                              component: () => import("./views/labour_protection/partials/first_aid_training") },
      { path: "requirements_training", name: "Требования ОТ",                                            component: () => import("./views/labour_protection/partials/requirements_training") },
      { path: "protection_training",   name: "Использование СИЗ",                                        component: () => import("./views/labour_protection/partials/protection_training") },
      { path: "work_at_height",        name: "Работа на высоте",                                         component: () => import("./views/labour_protection/partials/work_at_height") },
      { path: "briefing",              name: "Инструктаж по ОТ",                                         component: () => import("./views/labour_protection/partials/briefing") },
      { path: "traineeship",           name: "Стажировка",                                               component: () => import("./views/labour_protection/partials/traineeship") }
    ]
  },
  { path: "/fire_safety",                                             component: () => import("./views/fire_safety"),
    children: [
      { path: "",                      name: "Пожарная безопасность",                                    component: () => import("./views/fire_safety/main")  },
      { path: "retraining",            name: "Профессиональная переподготовка по пожарной безопасности", component: () => import("./views/fire_safety/partials/retraining") },
      { path: "advanced",              name: "Повышение классификации по пожарной безопасности",         component: () => import("./views/fire_safety/partials/advanced") }
    ]
  },
  { path: "/certification",       name: "Аттестация",                 component: () => import("./views/certification") }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior () { return { top: 0 } }
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
