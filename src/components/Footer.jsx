import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="container">
      Gastón Techera · {t.footer} - {new Date().getFullYear()}
      </div>
    </footer>
  );
}
