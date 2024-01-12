import { ReactNode } from "react";

export interface ContentContainerType {
  title: string;
  header: string;
  children?: ReactNode;
  data?: any;
}
