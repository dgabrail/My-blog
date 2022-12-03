export interface PostType {
  title: string;
  body: string;
  data: string;
}

export interface PostRequest {
  postType: PostType;
}

export interface PostsList {
  [id: string]: PostType
}