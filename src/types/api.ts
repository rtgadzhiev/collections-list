interface ICreatedBy {
  id: string;
  username: string;
}

interface ICollectionSpecialization {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
}

interface ICompany {
  id: string;
  title: string;
  legalName: string;
  description: string;
  imageSrc: string | null;
  inn: string;
  kpp: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICollection {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  isFree: boolean;
  createdAt: string;
  updatedAt: string;
  keywords: string[];
  createdBy: ICreatedBy | null;
  company: ICompany | null;
  specializations: ICollectionSpecialization[];
  questionsCount: number;
  tasksCount: number;
}

export interface ICollections {
  data: ICollection[];
  page: number;
  limit: number;
  total: number;
}

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

interface ISkill {
  id: number;
  title: string;
}

export interface IQuestion {
  id: number;
  title: string;
  description: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  rate: number;
  complexity: number;
  createdBy: ICreatedBy;
  questionSkills: ISkill[];
}

export interface IQuestions {
  data: IQuestion[];
  page: number;
  limit: number;
  total: number;
}
