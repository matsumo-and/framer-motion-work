export interface Members {
  members: Member[];
}

export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  firstKanaName: string;
  lastKanaName: string;
  age: number;
  imageName: string;
  introduce: string;
}
