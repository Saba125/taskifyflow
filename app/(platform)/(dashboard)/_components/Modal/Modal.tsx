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
  title: z.string().min(1, {
    message: "Title must be at least 1 character's long",
  }),
  content: z.string().min(1, {
    message: "Content must be at least 1 character's long",
  }),
});
const Modal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const { isOpen, onOpen, onClose, data, type } = useModalHook();
  const { task } = data;
  const isModalOpen = isOpen && type === "edit-task";
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await axios.patch(`/api/task/${task?.id}`, values);
    router.refresh();
    onClose();
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    form.setValue("title", task?.taskTitle as string);
    form.setValue("content", task?.taskContent as string);
  }, [task, form]);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white text-black overflow-hidden p-0">
          <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-2xl text-center font-bold">
              Customize your task
            </DialogTitle>
            <DialogDescription className="text-center text-zinc-500">
              Give your task a personality with a name and a title. You can
              always change it later
            </DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter className="p-3">
                  <Button
                    disabled={isLoading}
                    type="submit"
                    size="lg"
                    variant="primary"
                  >
                    Submit
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
