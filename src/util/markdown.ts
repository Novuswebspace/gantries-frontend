import TurndownService from "turndown";

/**converts html content into markdown(mdx) */
export const getMarkdown = (content: string) => {
  const turndown = new TurndownService();
  return turndown.turndown(content);
};
