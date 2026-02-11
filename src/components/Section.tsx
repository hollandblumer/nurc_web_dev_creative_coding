import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Section({ children }: Props) {
  return <div className="section-inner">{children}</div>;
}
