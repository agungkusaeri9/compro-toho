export type Article = {
  id: number;
  title: string;
  slug: string;
  type: string;
  description: string;
  category_name?: string;
  put_on_highlight: boolean;
  category?: {
    id: number;
    name: string;
  };
  content?: string;
  image_url: string;
  created_at: string;
};
