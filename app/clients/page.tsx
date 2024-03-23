'use client';
import { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField } from '@/components/ui/form'

import { useForm } from 'react-hook-form';


const NewPostForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormItem>
        <FormLabel>Title</FormLabel>
        <FormControl>
          <input {...register("title", { required: 'Title is required' })} type="text" />
        </FormControl>
        {errors.title && <FormMessage>{errors.title.message}</FormMessage>}
      </FormItem>

      <FormItem>
        <FormLabel>Content</FormLabel>
        <FormControl>
          <textarea {...register("content", { required: 'Content is required' })}></textarea>
        </FormControl>
        {errors.content && <FormMessage>{errors.content.message}</FormMessage>}
      </FormItem>

      <FormItem>
        <button type="submit">Submit</button>
      </FormItem>
    </Form>
  );
};

export default NewPostForm;


