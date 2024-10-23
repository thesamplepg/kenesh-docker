const config = {
  locales: ["ru"],
  translations: {
    ru: {
      Users: "Пользователи",
      "content-type-builder": "Менеджер типов",
    },
  },
  tutorials: false,
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
