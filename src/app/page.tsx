import Link from "next/link";
import TaskCard, { Task } from "./components/TaskCard";
import TaskModal from "./components/TaskModal";
import { revalidateTag } from "next/cache";

async function getTasks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tasks`, {
    next: { tags: ["tasks"] },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

type HomeProps = {
  searchParams: Record<string, string> | undefined | null;
};

const Home = async ({ searchParams }: HomeProps) => {
  const tasks: Task[] = await getTasks();
  const showModal = searchParams?.modal;
  revalidateTag("tasks");

  return (
    <section className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-between text-center w-1/2 h-3/4 bg-orange-400 text-orange-900 rounded-3xl">
        <div className="h-4/5">
          <h1 className="bg-orange-300 text-xl font-bold rounded-tl-3xl rounded-tr-3xl p-4">
            todo-list
          </h1>
          <div className="p-4 overflow-y-scroll max-h-full">
            {tasks.map((task, index) => (
              <div key={task.id}>
                <TaskCard task={task} index={index} />
              </div>
            ))}
          </div>
        </div>
        <div
          className={`text-xl font-bold w-20 self-center m-5 bg-orange-300 hover:bg-orange-700 rounded-xl border-t-2 border-t-orange-600 hover:border-t-white border-b-2 border-b-orange-600 hover:border-b-white hover:text-white ${
            !showModal && "animate-bounce"
          }`}
        >
          <Link href="?modal=true">NEW</Link>
        </div>
        {showModal && <TaskModal />}
      </div>
    </section>
  );
};

export default Home;
