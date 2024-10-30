export interface WritePostType {
    categoryIds: number[];
    title: string;
    content: string;
}

export interface CategoryResponse {
    id: number;
    name: string;
}

export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    categories: string[],
    created_at: Date;
    updated_at: Date;
}