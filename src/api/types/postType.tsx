export interface WritePostType {
    categories: number[];
    title: string;
    content: string;
}

export interface CategoryResponse {
    id: number;
    name: string;
}