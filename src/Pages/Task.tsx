import { AddTaskModal } from "@/components/module/Task/AddTaskModal";
import TaskCard from "@/components/module/Task/TaskCard";
import { useAppSelector } from "@/Redux/hook";

const Task = () => {
  const tasks = useAppSelector((state) => state.todo.tasks);

  return (
    <div className="mt-30 flex flex-col justify-center items-center gap-10 bg-red-500">
      <div className="flex justify-end w-full">
        <AddTaskModal />
      </div>

      <h1 className="text-3xl font-bold">All Task</h1>

      <div className="flex-1 flex justify-center items-center">
        <div className=" bg-amber-300 p-5 rounded-2xl max-w-2xl w-full">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
