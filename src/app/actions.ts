'use server';

import { getOptionalExamGuidance, type OptionalExamGuidanceInput, type OptionalExamGuidanceOutput } from '@/ai/flows/optional-exam-guidance';

export async function getGuidance(input: OptionalExamGuidanceInput): Promise<OptionalExamGuidanceOutput> {
  try {
    const result = await getOptionalExamGuidance(input);
    return result;
  } catch (error) {
    console.error('Error in getGuidance server action:', error);
    // It's better to throw a generic error to the client for security.
    throw new Error('An error occurred while fetching AI guidance.');
  }
}
