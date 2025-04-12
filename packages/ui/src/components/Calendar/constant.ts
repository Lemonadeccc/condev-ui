import { useTranslation } from "react-i18next";

const { t } = useTranslation();

export const DEFAULT_WEEKDAY = [
  t("calendar.weekdays.sun"),
  t("calendar.weekdays.mon"),
  t("calendar.weekdays.tue"),
  t("calendar.weekdays.wed"),
  t("calendar.weekdays.thu"),
  t("calendar.weekdays.fri"),
  t("calendar.weekdays.sat"),
];

export const DEFAULT_MONTHS = [
  t("calendar.months.january"),
  t("calendar.months.february"),
  t("calendar.months.march"),
  t("calendar.months.april"),
  t("calendar.months.may"),
  t("calendar.months.june"),
  t("calendar.months.july"),
  t("calendar.months.august"),
  t("calendar.months.september"),
  t("calendar.months.october"),
  t("calendar.months.november"),
  t("calendar.months.december"),
];
