export type Tx = {
  id: string;
  title: string;
  category: string;
  amount: number;
  time: string;
  tone: "spend" | "income";
  icon: string;
};

export const SAMPLE_TRANSACTIONS: Tx[] = [
  {
    id: "1",
    title: "Самокат",
    category: "Доставка",
    amount: -642,
    time: "Сегодня, 09:14",
    tone: "spend",
    icon: "С",
  },
  {
    id: "2",
    title: "Зарплата",
    category: "Поступление",
    amount: 186500,
    time: "Вчера, 18:02",
    tone: "income",
    icon: "З",
  },
  {
    id: "3",
    title: "Яндекс Плюс",
    category: "Подписка",
    amount: -299,
    time: "Вчера, 12:40",
    tone: "spend",
    icon: "Я",
  },
  {
    id: "4",
    title: "Перевод от Анны",
    category: "Переводы",
    amount: 3500,
    time: "20 мар, 21:11",
    tone: "income",
    icon: "А",
  },
  {
    id: "5",
    title: "Перекрёсток",
    category: "Продукты",
    amount: -2187,
    time: "19 мар, 19:33",
    tone: "spend",
    icon: "П",
  },
];

export const QUICK_ACTIONS = [
  { id: "pay", label: "Оплатить", icon: "qr" },
  { id: "transfer", label: "Перевести", icon: "arrow" },
  { id: "topup", label: "Пополнить", icon: "plus" },
  { id: "request", label: "Запросить", icon: "hand" },
] as const;

export const STORIES = [
  { id: "s1", title: "Кэшбэк 30%", tone: "yellow" },
  { id: "s2", title: "Путешествия", tone: "dark" },
  { id: "s3", title: "Инвестиции", tone: "soft" },
  { id: "s4", title: "Для бизнеса", tone: "dark" },
] as const;
