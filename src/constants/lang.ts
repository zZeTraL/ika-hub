import { LocaleType } from "@/types/lang";

const LOCALE_LABELS: Record<LocaleType, string> = {
    en: "English",
    fr: "Français",
    kr: "한국어",
};

export const getLocaleLabel = (locale: string | LocaleType): string =>
    LOCALE_LABELS[locale as LocaleType] || "Not supported";
