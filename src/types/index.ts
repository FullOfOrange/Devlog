export interface Post {
  id: number
  title: string;
  summary: string;
  contents: string;
  createdAt?: number
  updatedAt?: number
}