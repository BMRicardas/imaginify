import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="root">
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}
