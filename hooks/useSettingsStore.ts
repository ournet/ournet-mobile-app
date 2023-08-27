// import {create} from "zustand";
// import {persist, createJSONStorage} from "zustand/middleware";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import {Locale} from "../common/types";
import {useState} from "react";

export interface SettingsStore extends Locale {
  placeIds: number[];
  topicIds: string[];
  // setCountry: (country: string) => void;
  // setLanguage: (language: string) => void;
  // setLocale: (locale: Locale) => void;
  // addPlace: (place: number) => void;
  // removePlace: (place: number) => void;
  // addTopic: (topic: string) => void;
  // removeTopic: (topic: string) => void;
  // isLoggedIn: boolean;
  // setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export default function useSettingsStore() {
  const [settings, _setSettings] = useState({
    country: "ro",
    language: "ro",
    placeIds: [],
    topicIds: [],
  });

  const locale: Locale = {
    country: settings.country,
    language: settings.language,
  };

  return {settings, locale};
}

// export const useSettingsStore = create(
//   persist<SettingsStore>(
//     (_set, _) => ({
//       country: "ro",
//       language: "ro",
//       placeIds: [],
//       topicIds: [],
//       // setCountry: country => set(() => ({country})),
//       // setLanguage: language => set(() => ({language})),
//       // setLocale: ({country, language}) => set(() => ({country, language})),
//       // addPlace: place => set(state => ({placeIds: [...state.placeIds, place]})),
//       // removePlace: place =>
//       //   set(state => ({
//       //     placeIds: state.placeIds.filter(p => p !== place),
//       //   })),
//       // addTopic: topic => set(state => ({topicIds: [...state.topicIds, topic]})),
//       // removeTopic: topic =>
//       //   set(state => ({
//       //     topicIds: state.topicIds.filter(t => t !== topic),
//       //   })),
//     }),
//     {
//       name: "settings-store",
//       storage: createJSONStorage(() => AsyncStorage),
//     },
//   ),
// );
