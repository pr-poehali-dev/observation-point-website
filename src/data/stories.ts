import { Story } from "@/components/StoryCard";

// Тип для определения группы рассказов по сезонам
export interface StoryGroup {
  title: string;
  stories: Story[];
}

// Сезоны рассказов
export const storyGroups: StoryGroup[] = [
  {
    title: "Первый сезон",
    stories: [
      {
        id: 1,
        title: "Объект К",
        author: "Леви Морено",
        coverImage:
          "https://cdn.poehali.dev/files/3baf1ac4-d5de-478e-a60e-34e6e64c6dc3.png",
        audioSrc:
          "https://drive.google.com/file/d/1B584cSFxWQdEaak-5OINvoiRj90b-1ht/view?usp=sharing",
      },
      {
        id: 2,
        title: "Чужая боль",
        author: "Жуан Алмейда",
        coverImage:
          "https://cdn.poehali.dev/files/70125099-c9ad-4895-a4d6-22be7de67320.png",
        audioSrc:
          "https://drive.google.com/file/d/1nFM70YQm5WpbRO0_xSluGCInS0nXEvHi/view?usp=sharing",
      },
      {
        id: 3,
        title: "Сон в прямом эфире",
        author: "Лукас Сильверман",
        coverImage:
          "https://cdn.poehali.dev/files/74557bd4-e1a3-4276-9021-794cfd0be71c.png",
        audioSrc:
          "https://drive.google.com/file/d/1D5pvjPo45DeYDaBIh7bYjgXuNxKZ4Wsk/view?usp=sharing",
      },
      {
        id: 4,
        title: "Цена памяти",
        author: "Марио Хименес",
        coverImage:
          "https://cdn.poehali.dev/files/4163f006-7e0c-4fc6-afc5-664786d19e4c.png",
        audioSrc:
          "https://drive.google.com/file/d/1bKSE4iQJvxoGRtAPmWgXmBecX1n56LQw/view?usp=sharing",
      },
      {
        id: 5,
        title: "Контролёр",
        author: "Виктория Скотт",
        coverImage:
          "https://cdn.poehali.dev/files/ba845812-9d3c-4833-9a9a-65280ed27997.png",
        audioSrc:
          "https://drive.google.com/file/d/185Xw1JsnCrGTk1WRCMwyrrpxAl68qQm7/view?usp=sharing",
      },
      {
        id: 6,
        title: "Вторжение",
        author: "Лорен Грэйвз",
        coverImage:
          "https://cdn.poehali.dev/files/fad53e0a-0781-41df-8b66-e4a71f0d9c6c.png",
        audioSrc:
          "https://drive.google.com/file/d/1ph6fhowWJCb1JWAa82-6HikD2ADs6xIr/view?usp=share_link",
      },
      {
        id: 7,
        title: "Мой дом — не моя крепость",
        author: "Андрей Смыслов",
        coverImage:
          "https://cdn.poehali.dev/files/f12c9054-2b37-43ef-bf44-2be2b9b63621.png",
        audioSrc:
          "https://drive.google.com/file/d/1rTV9kEVVH-188VJM9Q_kYrsSJ0RRlEko/view?usp=sharing",
      },
      {
        id: 8,
        title: "Лучший мир",
        author: "Элеонор Мур",
        coverImage:
          "https://cdn.poehali.dev/files/f0aec99b-c18d-4364-ad8d-65969d228007.png",
        audioSrc:
          "https://drive.google.com/file/d/1r-boSChYz-_yewJTyoMphvibU3Kqo6Hx/view?usp=sharing",
      },
    ],
  },
  {
    title: "Второй сезон",
    stories: [
      {
        id: 9,
        title: "Ночной гость",
        author: "Алина Лидс",
        coverImage:
          "https://cdn.poehali.dev/files/6db15848-f65f-4ce2-a3b1-e789370c0d09.png",
        audioSrc:
          "https://drive.google.com/file/d/1Er4vqrlY2-bieCowvZQAS6zJ-rMUgBVb/view?usp=share_link",
      },
      {
        id: 10,
        title: "Ставка",
        author: "Нгози Адевале",
        coverImage:
          "https://cdn.poehali.dev/files/64a52679-1d09-4bbe-90b0-f95310534268.png",
        audioSrc:
          "https://drive.google.com/file/d/1R95CfzXdrrpGsn0LepIxnq4prWSSZkKS/view?usp=share_link",
      },
      {
        id: 11,
        title: "Настройки по-умолчанию",
        author: "Флориан Мейер",
        coverImage:
          "https://cdn.poehali.dev/files/52986bfb-e58d-4210-ac3f-840ed642c462.png",
        audioSrc:
          "https://drive.google.com/file/d/134H1wZqOvPyLtLW6vgkn4YBTjsj_OinF/view?usp=share_link",
      },
      {
        id: 12,
        title: "Рейтинг",
        author: "Рахул Нараян",
        coverImage:
          "https://cdn.poehali.dev/files/c47d9734-62f2-4d3f-b0cd-6639cb97642a.png",
        audioSrc:
          "https://drive.google.com/file/d/1NdaJ4A9NtRs_ugX05q39e48AN2woj5fV/view?usp=share_link",
      },
      {
        id: 13,
        title: "Человек на фото",
        author: "Сантьяго Мендес",
        coverImage:
          "https://cdn.poehali.dev/files/1bd465ab-a211-4509-9573-61cb70fac315.png",
        audioSrc:
          "https://drive.google.com/file/d/1gCFGWuyQIvRFgte9vtrNzEjbO-7nBCWX/view?usp=share_link",
      },
      {
        id: 14,
        title: "Совпадение",
        author: "Люси Уайт",
        coverImage:
          "https://cdn.poehali.dev/files/2fcbbaf9-2032-4380-b606-208a2e65783c.png",
        audioSrc:
          "https://drive.google.com/file/d/1AsmJMIpeJeV4JnbV65a5mfeHOmdTBArl/view?usp=share_link",
      },
      {
        id: 15,
        title: "Окно напротив",
        author: "Оуэн Марс",
        coverImage:
          "https://cdn.poehali.dev/files/c98968ba-75ea-43eb-8a6f-112fce537e39.png",
        audioSrc:
          "https://drive.google.com/file/d/12IGgH3RsZvwQSl4hX16DaZKP_uWwNONG/view?usp=share_link",
      },
      {
        id: 16,
        title: "Галерея исчезающих",
        author: "Роберт Ларсен",
        coverImage:
          "https://cdn.poehali.dev/files/7ce9e152-879f-4d72-87dd-f1fc7fc89161.png",
        audioSrc:
          "https://drive.google.com/file/d/1kD0y-nj70IvokW8e5qiKaGJyN-QH3RIh/view?usp=share_link",
      },
    ],
  },
  {
    title: "Третий сезон",
    stories: [
      {
        id: 17,
        title: "По воле большинства",
        author: "Йонас Шпитцер",
        coverImage:
          "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?w=400&h=600&fit=crop",
        audioSrc:
          "https://drive.google.com/file/d/1ptcpkYJxATJdsKYihegTcocl15kljZ0y/view?usp=sharing",
      },
      {
        id: 18,
        title: "Бункер",
        author: "Эдвард Грейсон",
        coverImage:
          "https://images.unsplash.com/photo-1511919478780-b3eea52e3d90?w=400&h=600&fit=crop",
        audioSrc:
          "https://drive.google.com/file/d/131amBLTWm7KR0eV1pnPT1jZUZuXFWXrJ/view?usp=sharing",
      },
      {
        id: 19,
        title: "Сторожка",
        author: "Кен Уэлш",
        coverImage:
          "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400&h=600&fit=crop",
        audioSrc:
          "https://drive.google.com/file/d/1sruBoG-dshD1BjKyUdPZ6uIISikGuW8D/view?usp=sharing",
      },
      {
        id: 20,
        title: "Протокол общения",
        author: "Лоран Девер",
        coverImage:
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
        audioSrc:
          "https://drive.google.com/file/d/1mP-_W17l7bj7zzi-fH2B_brlxkwzytkp/view?usp=sharing",
      },
      {
        id: 21,
        title: "Подбор среды",
        author: "Кеннет Ву",
        coverImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
        audioSrc:
          "https://drive.google.com/file/d/1veQsJHRaek4uIBdBKvIcWVyo3ILO84HK/view?usp=sharing",
      },
      {
        id: 22,
        title: "Каскад",
        author: "Со Чхэюн",
        coverImage:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop",
        audioSrc:
          "https://drive.google.com/file/d/15qA37FcFCyieB-kQcQKSKF0iH17pbgAE/view?usp=sharing",
      },
      {
        id: 23,
        title: "Оптимальный режим",
        author: "Гэвин Фергюсон",
        coverImage:
          "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=400&h=600&fit=crop",
        audioSrc:
          "https://drive.google.com/file/d/1qi5Tnb71cAGQg90oTn7J5d124pk4kxR4/view?usp=sharing",
      },
      {
        id: 24,
        title: "Сигнал",
        author: "Куин Вейсон",
        coverImage:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
        audioSrc:
          "https://drive.google.com/file/d/1iecmRqvKEWYPQHFzT8HRSYJ5PK2j3wjO/view?usp=sharing",
      },
    ],
  },
];

// Сохраняем совместимость со старым кодом, который может использовать плоский массив
export const stories: Story[] = storyGroups.flatMap((group) => group.stories);
