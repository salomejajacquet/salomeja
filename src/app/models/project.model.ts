export interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
}

export interface Image {
  id: number;
  projectId: number;
  title: string;
  description: string;
  bigUrl: string;
  thumbUrl: string;
}
