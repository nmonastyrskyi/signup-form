import {validatePassword} from '@/utils';
import * as z from 'zod';

export const formSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().refine((password) => {
		const results = validatePassword(password);
		return results.minLength && results.mixedCases && results.digit;
	}, 'Invalid password'),
});

export type Form = z.infer<typeof formSchema>;
