export interface WritePostType {
    categoryIds: number[];
    title: string;
    content: string;
}

export interface CategoryResponse {
    id: number;
    name: string;
}