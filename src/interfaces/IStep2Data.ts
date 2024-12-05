import { FC } from "react";
import { SVGProps } from "react";
export interface IStep2Data {
  title: string;
  total: string;
  img: FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
  time: string;
}
