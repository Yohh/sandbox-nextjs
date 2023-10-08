import Link from "next/link";
import LinkButton from "./components/LinkButton";
import { revalidateTag } from "next/cache";

const Home = () => {
  revalidateTag("tasks");

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-emerald-950">
      <div className="flex flex-col items-center w-1/2 h-1/2 text-orange-900 bg-orange-400 p-4 rounded-3xl">
        <h1 className="text-3xl">sandbox</h1>
        <div className="mt-4">
          <Link href="/todolist">
            <LinkButton text="todolist" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
