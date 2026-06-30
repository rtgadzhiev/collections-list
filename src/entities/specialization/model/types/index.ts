export interface ISpecialization {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
  createdBy: ICreatedBy | null;
}

export interface ISpecializations {
  data: ISpecialization[];
  page: number;
  limit: number;
  total: number;
}

interface ICreatedBy {
  id: string;
  username: string;
}
