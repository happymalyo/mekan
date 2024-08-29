export type Menu = {
  label: string;
  link: string;
};
export type MenuIntl = {
  label: string;
  lang: string;
  countryCode: string;
};

export type Lang = "en" | "fr";
export type User = {
  username: string,
  email: string,
  avatar ?: null,
  id: string,
  chatId : string,
  blocked ?: string[],
}
