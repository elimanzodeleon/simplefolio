export interface Link {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface IProject {
  id: number;
  name: string;
  url: string;
  codeUrl: string;
  description: string;
  tools: tool[];
}

interface tool {
  id: number;
  name: string;
  url: string;
}
