import { HomeLink } from "../components/HomeLink";

const TodolistLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <HomeLink />
      {children}
    </section>
  );
};

export default TodolistLayout;
