export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  featured: boolean;
  published: boolean;
  metaDescription?: string;
  metaKeywords?: string[];
  views?: number;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  postCount: number;
}

export interface BlogComment {
  id: string;
  postId: string;
  author: string;
  email: string;
  content: string;
  createdAt: string;
  approved: boolean;
  parentId?: string;
}

export interface BlogStats {
  totalPosts: number;
  totalViews: number;
  totalComments: number;
  popularPosts: BlogPost[];
}