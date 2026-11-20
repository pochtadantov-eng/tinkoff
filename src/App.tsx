import { useEffect, useState } from "react";
import { QUICK_ACTIONS, SAMPLE_TRANSACTIONS, STORIES } from "./data";
import "./App.css";

type Tab = "home" | "payments" | "city" | "chat" | "more";

function formatMoney(value: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value);
}

function useCountUp(target: number, duration = 1100) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}

function Icon({ name }: { name: string }) {
  switch (name) {
    case "qr":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 4h7v7H4V4zm2 2v3h3V6H6zm7-2h7v7h-7V4zm2 2v3h3V6h-3zM4 13h7v7H4v-7zm2 2v3h3v-3H6zm9 0h2v2h-2v-2zm-2-2h2v2h-2v-2zm4 0h3v2h-3v-2zm-2 4h2v3h-2v-3zm2 2h3v3h-3v-3z" />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 7h7.17L5.59 15.59 7 17l8.59-8.59V17h2V5H7v2z" />
        </svg>
      );
    case "plus":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5z" />
        </svg>
      );
    case "hand":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a2 2 0 0 1 2 2v7h1a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v2a5 5 0 0 1-5 5h-3.5A6.5 6.5 0 0 1 5 16.5V11a2 2 0 0 1 3.2-1.6A2 2 0 0 1 11 8V4a2 2 0 0 1 1-2z" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 3 10h2v10h5v-6h4v6h5V10h2L12 3z" />
        </svg>
      );
    case "pay":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6h16v3H4V6zm0 5h16v7H4v-7zm3 2v3h5v-3H7z" />
        </svg>
      );
    case "city":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 21V8l6-3 5 2.5V5h7v16H3zm8-2h2v-5h-2v5zm-5 0h3V9.3L9 8.5 6 10v9zm10 0h3V7h-3v12z" />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 4h16v12H7l-3 3V4zm3 4v2h10V8H7zm0 4v2h7v-2H7z" />
        </svg>
      );
    case "more":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="6" cy="12" r="1.8" />
          <circle cx="12" cy="12" r="1.8" />
          <circle cx="18" cy="12" r="1.8" />
        </svg>
      );
    default:
      return null;
  }
}

export default function App() {
  const [tab, setTab] = useState<Tab>("home");
  const [hidden, setHidden] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const balance = useCountUp(248_760);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 2200);
    return () => window.clearTimeout(id);
  }, [toast]);

  const showToast = (message: string) => {
    setToast(message);
  };

  return (
    <div className="stage">
      <div className="stage__glow stage__glow--a" aria-hidden="true" />
      <div className="stage__glow stage__glow--b" aria-hidden="true" />

      <header className="stage__brand">
        <div className="mark" aria-hidden="true">
          Т
        </div>
        <div>
          <p className="stage__eyebrow">Визуальное демо</p>
          <h1 className="stage__title">Т‑Банк</h1>
        </div>
      </header>

      <p className="stage__note">
        Интерфейс-концепт с примерными данными. Не настоящий банк и не принимает
        платежи.
      </p>

      <div className="phone" role="application" aria-label="Демо приложения Т‑Банк">
        <div className="phone__chrome">
          <span className="phone__time">09:41</span>
          <span className="phone__notch" aria-hidden="true" />
          <span className="phone__status" aria-hidden="true">
            ●●● ▮▮▮
          </span>
        </div>

        <main className="app">
          {tab === "home" && (
            <section className="home" aria-label="Главный экран">
              <div className="home__top">
                <button
                  className="avatar"
                  type="button"
                  aria-label="Профиль"
                  onClick={() => showToast("Профиль — демо")}
                >
                  А
                </button>
                <div className="greeting">
                  <p>Доброе утро</p>
                  <strong>Алексей</strong>
                </div>
                <button
                  className="bell"
                  type="button"
                  aria-label="Уведомления"
                  onClick={() => showToast("2 новых уведомления")}
                >
                  <span />
                </button>
              </div>

              <div className="balance">
                <div className="balance__row">
                  <span>Всего на счетах</span>
                  <button
                    type="button"
                    className="eye"
                    aria-label={hidden ? "Показать баланс" : "Скрыть баланс"}
                    onClick={() => setHidden((v) => !v)}
                  >
                    {hidden ? "Показать" : "Скрыть"}
                  </button>
                </div>
                <p className="balance__value" aria-live="polite">
                  {hidden ? "••••••" : formatMoney(balance)}
                </p>
              </div>

              <article className="card" aria-label="Дебетовая карта">
                <div className="card__shine" aria-hidden="true" />
                <div className="card__top">
                  <span className="card__brand">Т‑Банк</span>
                  <span className="card__chip" aria-hidden="true" />
                </div>
                <p className="card__pan">•••• 4412</p>
                <div className="card__bottom">
                  <div>
                    <span>Доступно</span>
                    <strong>{hidden ? "••••" : formatMoney(124_300)}</strong>
                  </div>
                  <div className="card__pay">Pay</div>
                </div>
              </article>

              <div className="actions" role="list">
                {QUICK_ACTIONS.map((action, index) => (
                  <button
                    key={action.id}
                    type="button"
                    className="action"
                    style={{ animationDelay: `${0.18 + index * 0.06}s` }}
                    onClick={() => showToast(`${action.label} — только демо`)}
                  >
                    <span className="action__icon">
                      <Icon name={action.icon} />
                    </span>
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>

              <div className="stories" aria-label="Подборки">
                {STORIES.map((story) => (
                  <button
                    key={story.id}
                    type="button"
                    className={`story story--${story.tone}`}
                    onClick={() => showToast(story.title)}
                  >
                    {story.title}
                  </button>
                ))}
              </div>

              <section className="ops">
                <div className="ops__head">
                  <h2>Операции</h2>
                  <button type="button" onClick={() => showToast("История — демо")}>
                    Все
                  </button>
                </div>
                <ul className="ops__list">
                  {SAMPLE_TRANSACTIONS.map((tx) => (
                    <li key={tx.id}>
                      <button
                        type="button"
                        className="op"
                        onClick={() => showToast(tx.title)}
                      >
                        <span className="op__icon" aria-hidden="true">
                          {tx.icon}
                        </span>
                        <span className="op__meta">
                          <strong>{tx.title}</strong>
                          <span>
                            {tx.category} · {tx.time}
                          </span>
                        </span>
                        <span
                          className={`op__amount ${tx.tone === "income" ? "is-income" : ""}`}
                        >
                          {tx.tone === "income" ? "+" : ""}
                          {formatMoney(tx.amount)}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            </section>
          )}

          {tab !== "home" && (
            <section className="placeholder">
              <div className="placeholder__mark">Т</div>
              <h2>
                {tab === "payments" && "Платежи"}
                {tab === "city" && "Город"}
                {tab === "chat" && "Чат"}
                {tab === "more" && "Ещё"}
              </h2>
              <p>Раздел в визуальном демо пока пустой — это макет главного экрана.</p>
              <button type="button" className="ghost" onClick={() => setTab("home")}>
                На главную
              </button>
            </section>
          )}
        </main>

        <nav className="nav" aria-label="Основная навигация">
          {(
            [
              ["home", "home", "Главная"],
              ["payments", "pay", "Платежи"],
              ["city", "city", "Город"],
              ["chat", "chat", "Чат"],
              ["more", "more", "Ещё"],
            ] as const
          ).map(([id, icon, label]) => (
            <button
              key={id}
              type="button"
              className={tab === id ? "is-active" : undefined}
              aria-current={tab === id ? "page" : undefined}
              onClick={() => setTab(id)}
            >
              <Icon name={icon} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        {toast && (
          <div className="toast" role="status">
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}
