import i18n from '../internalization/i18n';
export function getCurrentLang(){
  return i18n.language.includes('-') ? i18n.language.split('-')[0] : i18n.language;
}