export type CreateStudentType = {
  firstName: string;
  lastName: string;
  age: number;
  bio: string;
};

export type UpdateStudentType = {
  firstName: string;
  lastName: string;
  age: number;
  bio: string;
};

export type GetStudentType = {
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
  readonly bio: string;
};

export type GetOneParams = {
  id: number;
};
