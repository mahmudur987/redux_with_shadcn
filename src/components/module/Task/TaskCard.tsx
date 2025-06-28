import type { ITask } from "@/Interfaces/state.interface";
import { cn } from "@/lib/utils";

const TaskCard = ({ task }: { task: ITask }) => {
  return (
    <div
      key={task.id}
      className="flex gap-4 mb-4 bg-primary-foreground p-4 rounded-2xl max-w-2xl w-full"
    >
      <div className="flex items-center">
        <input
          type="radio"
          id={`task-${task.id}`}
          name="task"
          className="focus:ring-accent-foreground rounded-md"
        />
        <label
          htmlFor={`task-${task.id}`}
          className="ml-2 text-sm font-medium text-foreground"
        >
          {task.title}
        </label>
      </div>
      <div className="flex items-center">
        <p className="text-sm ">{task.description}</p>
        <div
          className={cn(`inline-block ml-2 rounded-full px-2 py-1 text-xs `, {
            "bg-red-500 ": task.priority === "high",
            "bg-yellow-500 ": task.priority === "medium",
            "bg-green-500 ": task.priority === "low",
          })}
        >
          {task.priority}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
