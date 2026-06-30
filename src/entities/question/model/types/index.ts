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
