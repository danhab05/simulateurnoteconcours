'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { AlertCircle, CheckCircle, Lightbulb, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getGuidance } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import type { OptionalExamGuidanceOutput } from '@/ai/flows/optional-exam-guidance';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  courses: z.string().min(1, 'Please enter at least one course.'),
  examName: z.string().min(1, 'Please enter the exam name.'),
});

export function OptionalExamGuidance() {
  const [result, setResult] = React.useState<OptionalExamGuidanceOutput | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courses: '',
      examName: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const coursesArray = values.courses.split(',').map((c) => c.trim()).filter(Boolean);
      const response = await getGuidance({ courses: coursesArray, examName: values.examName });
      setResult(response);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to get guidance. Please check your connection and try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-bold">
          <Lightbulb className="text-primary h-6 w-6" />
          AI Exam Guidance
        </CardTitle>
        <CardDescription>Unsure if an exam is optional? Ask our AI assistant.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="courses"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enrolled Courses</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Advanced Calculus, Quantum Mechanics" {...field} />
                  </FormControl>
                  <FormDescription>Enter your courses, separated by commas.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="examName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Exam Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., History Final" {...field} />
                  </FormControl>
                  <FormDescription>The name of the exam you're curious about.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? 'Analyzing...' : 'Get Guidance'}
            </Button>
          </form>
        </Form>
      </CardContent>
      {result && (
        <CardFooter>
          <Alert variant={result.isOptional ? 'default' : 'destructive'} className="w-full">
            {result.isOptional ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            <AlertTitle className="font-bold">
              {result.isOptional ? 'This exam appears to be optional' : 'This exam is likely mandatory'}
            </AlertTitle>
            <AlertDescription>{result.reason}</AlertDescription>
          </Alert>
        </CardFooter>
      )}
    </Card>
  );
}
