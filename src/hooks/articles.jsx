import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useArticlesStore = create(
  persist(
    (set, get) => ({
      articles: [],
      addArticle: (article) =>
        set(() => ({ articles: [...get().articles, article] })),
      addArticles: (articles) =>
        set(() => ({ articles: [...get().articles, ...articles] })),
      setArticles: (articles) => set(() => ({ articles })),
    }),
    {
      name: "articles-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        articles: state.articles,
      }),
    }
  )
);
