
export interface Project {
  id: string;
  title: string;
  date: string;
  status: 'In Progress' | 'Completed' | 'Review';
}

export interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
}
