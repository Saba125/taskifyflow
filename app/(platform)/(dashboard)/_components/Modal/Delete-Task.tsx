"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useModalHook } from "@/hooks/use-modal";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name must be at least 1 character's long",
  }),
});
const DeleteTaskModal = () => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const { isOpen, onOpen, onClose, data, type } = useModalHook();
  const { task } = data;
  const isModalOpen = isOpen && type === "delete-task";
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async () => {
    try {
      const response = await axios.delete(`/api/task/${task?.id}`);
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white text-black overflow-hidden p-0">
          <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-2xl text-center font-bold">
              Delete your task
            </DialogTitle>
            <DialogDescription className="text-center text-zinc-500">
              Are you sure you want to delete this task?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="p-3">
            <Button
              onClick={onClose}
              className="mr-auto"
              size="lg"
              variant="destructive"
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              disabled={isLoading}
              onClick={onSubmit}
              size="lg"
              variant="destructive"
            >
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteTaskModal;
