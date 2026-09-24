import en from '../i18n/en.json';
import es from '../i18n/es.json';
import de from '../i18n/de.json';
import { useLanguage } from '../context/LanguageContext';

const dictionaries = { en, es, de };

function getNested(obj, path) {
  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function useTranslation() {
  const { language } = useLanguage();
  const dict = dictionaries[language];

  function t(key) {
    const value = getNested(dict, key);
    if (value === undefined) {
      // Si falta la llave en el idioma activo, cae de vuelta al inglés
      return getNested(dictionaries.en, key) ?? key;
    }
    return value;
  }

  return { t, language };
}