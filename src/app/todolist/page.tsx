import TaskCard, { Task } from "../components/TaskCard";
import TaskModal from "../components/TaskModal";
import { revalidateTag } from "next/cache";
import LinkButton from "../components/LinkButton";
import { getTasks } from "../actions";

type TodolistProps = {
  searchParams: Record<string, string> | undefined | null;
};

const todolist = async ({ searchParams }: TodolistProps) => {
  const tasks: Task[] = await getTasks();
  const showModal = searchParams?.modal;
  revalidateTag("tasks");

  return (
    <section className="flex flex-col justify-center items-center w-screen h-screen bg-emerald-950">
      <div className="flex flex-col justify-between text-center w-4/5 sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4 h-3/4 bg-orange-400 text-orange-900 rounded-3xl">
        <div className="h-4/5">
          <h1 className="bg-orange-300 text-xl font-bold rounded-tl-3xl rounded-tr-3xl p-4">
            todo-list
          </h1>
          <div className="p-4 overflow-y-auto max-h-full">
            {tasks &&
              tasks.map((task, index) => (
                <div key={task.id}>
                  <TaskCard task={task} index={index} />
                </div>
              ))}
          </div>
        </div>
        <div className={`self-center mb-2`}>
          <LinkButton text="NEW" path={"?modal=true"} id="new" />
        </div>
        {showModal && <TaskModal />}
      </div>
    </section>
  );
};

export default todolist;
