'use client';
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormField } from "@/components/ui/form";




const formSchema = z.object({
  email: z.string().email()
});

export default function NewPostForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: ""
    }
  });

  const handleSubmit = () => {}

  return (
    <main className= "flex min-h-screen flex-col items-center justify-between p-24">
      <Form{...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField control={form.control} name="emailAddress" render={}/>
        </form>
      </Form>
    </main>
  );
}