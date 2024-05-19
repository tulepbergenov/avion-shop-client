const baseTitle = "Avion";

export const appTitle = (title?: string): string => {
  if (title && typeof title === "string" && title.trim().length > 0) {
    return `${title} | ${baseTitle}`;
  }

  return baseTitle;
};
