export interface Photo {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  descriptionLowerCase: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userId: number;
}
