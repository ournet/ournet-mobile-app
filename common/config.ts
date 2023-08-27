export enum OurnetProjectName {
  NEWS = "NEWS",
  WEATHER = "WEATHER",
  HOROSCOPE = "HOROSCOPE",
}

const LOCALES: Record<string, string[]> = {
  ro: ["ro"],
  md: ["ro", "ru"],
  in: ["en"],
  bg: ["bg"],
  hu: ["hu"],
  it: ["it"],
  es: ["es"],
  cz: ["cs"],
};

export const getCountries = () => Object.keys(LOCALES);

export const getCountryLanguages = (country: string) => {
  return LOCALES[country] || [];
};

const COUNTYR_PROJECTS: Record<string, OurnetProjectName[]> = {
  ro: [
    OurnetProjectName.NEWS,
    OurnetProjectName.WEATHER,
    OurnetProjectName.HOROSCOPE,
  ],
  md: [
    OurnetProjectName.NEWS,
    OurnetProjectName.WEATHER,
    OurnetProjectName.HOROSCOPE,
  ],
  in: [
    OurnetProjectName.NEWS,
    OurnetProjectName.WEATHER,
    OurnetProjectName.HOROSCOPE,
  ],
  bg: [
    OurnetProjectName.NEWS,
    OurnetProjectName.WEATHER,
    OurnetProjectName.HOROSCOPE,
  ],
  hu: [
    OurnetProjectName.NEWS,
    OurnetProjectName.WEATHER,
    OurnetProjectName.HOROSCOPE,
  ],
  it: [
    OurnetProjectName.NEWS,
    OurnetProjectName.WEATHER,
    OurnetProjectName.HOROSCOPE,
  ],
  es: [OurnetProjectName.NEWS, OurnetProjectName.WEATHER],
  cz: [
    OurnetProjectName.NEWS,
    OurnetProjectName.WEATHER,
    OurnetProjectName.HOROSCOPE,
  ],
};

export const getCountryProjects = (country: string) =>
  COUNTYR_PROJECTS[country] || [];
