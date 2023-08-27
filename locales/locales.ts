import {Locales, parseTranslationData} from "localizy";
import {LocalizyLocalesProvider, LocalizyLocales} from "./generated-locales";

const LANGS = ["en"];

export class OurnetTranslator extends LocalizyLocalesProvider<LocalizyLocales> {
  protected createInstance(t: Locales) {
    return new LocalizyLocales(t);
  }
}

const data = LANGS.reduce((acc, lang) => {
  acc[lang] = parseTranslationData(require(`./data/${lang}.json`));
  return acc;
}, {} as Record<string, any>);

export const OURNET_TRANSLATOR = new OurnetTranslator({
  data,
  throwUndefinedKey: true,
});

export function getLocales(lang: string): LocalizyLocales {
  lang = LANGS.includes(lang) ? lang : "en";
  return OURNET_TRANSLATOR.lang(lang);
}
