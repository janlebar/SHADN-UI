// NewPostForm.tsx
import { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField } from '@/components/ui/form' // Update the path accordingly
import { useState } from 'react'

const NewPostForm = () => {
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (data) => {
    setSubmitting(true)
    // Process form data, e.g., submit to an API
    console.log('Form data:', data)
    setSubmitting(false)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <FormField
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Name is required' }}
            placeholder="Enter your name"
          />
          <FormDescription>This is your full name</FormDescription>
          <FormMessage />
        </FormControl>
      </FormItem>

      <FormItem>
        <FormLabel>Title</FormLabel>
        <FormControl>
          <FormField
            name="title"
            control={control}
            defaultValue=""
            rules={{ required: 'Title is required' }}
            placeholder="Enter post title"
          />
          <FormDescription>Choose a descriptive title for your post</FormDescription>
          <FormMessage />
        </FormControl>
      </FormItem>

      <FormItem>
        <FormLabel>Content</FormLabel>
        <FormControl>
          <FormField
            name="content"
            control={control}
            defaultValue=""
            rules={{ required: 'Content is required' }}
            placeholder="Enter post content"
            as="textarea"
          />
          <FormDescription>Write the content of your post here</FormDescription>
          <FormMessage />
        </FormControl>
      </FormItem>

      <button type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </Form>
  )
}

export default NewPostForm
