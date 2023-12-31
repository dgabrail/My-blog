export interface PostType {
  title: string;
  body: string;
  data: string;
  id: string;
}

export interface PostRequest {
  postType: PostType;
}