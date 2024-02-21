"use client";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useModalHook } from "@/hooks/use-modal";
import { Task } from "@prisma/client";
interface TaskProps {
  task: Task;
}
const Task = ({ task }: TaskProps) => {
  const { onOpen } = useModalHook();
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{task.taskTitle}</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        {task.taskContent}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => onOpen("delete-task", { task })}
          variant="destructive"
        >
          Delete
        </Button>
        <Button
          onClick={() => onOpen("edit-task", { task })}
          className="flex items-center justify-center gap-2"
        >
          <Edit className="w-4 h-4" />
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Task;
