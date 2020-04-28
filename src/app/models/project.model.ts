export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Image {
  id: string;
  projectId: string;
  title: string;
  description: string;
  bigUrl: string;
  thumbUrl: string;
}
