import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} — Gastón Techera · {t.footer}
      </div>
    </footer>
  );
}
