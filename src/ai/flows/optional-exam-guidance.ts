// use server'

/**
 * @fileOverview This file defines a Genkit flow for providing guidance on whether an exam is optional based on the student's enrolled courses.
 *
 * - `getOptionalExamGuidance`: A function that takes a list of courses and an exam name as input and returns whether the exam is optional.
 * - `OptionalExamGuidanceInput`: The input type for the `getOptionalExamGuidance` function.
 * - `OptionalExamGuidanceOutput`: The return type for the `getOptionalExamGuidance` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptionalExamGuidanceInputSchema = z.object({
  courses: z.array(z.string()).describe('A list of courses the student is enrolled in.'),
  examName: z.string().describe('The name of the exam to check for optional status.'),
});
export type OptionalExamGuidanceInput = z.infer<typeof OptionalExamGuidanceInputSchema>;

const OptionalExamGuidanceOutputSchema = z.object({
  isOptional: z.boolean().describe('Whether the exam is optional based on the courses taken.'),
  reason: z.string().describe('The reason why the exam is optional or not.'),
});
export type OptionalExamGuidanceOutput = z.infer<typeof OptionalExamGuidanceOutputSchema>;

export async function getOptionalExamGuidance(input: OptionalExamGuidanceInput): Promise<OptionalExamGuidanceOutput> {
  return optionalExamGuidanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optionalExamGuidancePrompt',
  input: {schema: OptionalExamGuidanceInputSchema},
  output: {schema: OptionalExamGuidanceOutputSchema},
  prompt: `You are an AI assistant helping students determine if an exam is optional based on their enrolled courses.

  Given the following courses: {{{courses}}}
  And the exam name: {{{examName}}}

  Determine if the exam is optional for the student. Provide a reason for your determination.

  Return a JSON object with the following schema:
  {
    "isOptional": boolean, // true if the exam is optional, false otherwise
    "reason": string // The reason why the exam is optional or not. Be specific.
  }`,
});

const optionalExamGuidanceFlow = ai.defineFlow(
  {
    name: 'optionalExamGuidanceFlow',
    inputSchema: OptionalExamGuidanceInputSchema,
    outputSchema: OptionalExamGuidanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
