import * as z from 'zod';

export const passwordValidationRules = {
	minLength: z.string().min(8, 'Must be at least 8 characters long'),
	digit: z.string().regex(/\d/, 'Must contain at least one digit'),
	upperCase: z.string().regex(/[A-Z]/, 'Must contain at least one uppercase letter'),
	lowerCase: z.string().regex(/[a-z]/, 'Must contain at least one lowercase letter'),
	noSpaces: z.string().refine((password) => !/\s/.test(password), 'Cannot contain spaces'),
} as const;

export function validatePassword(password: string) {
	return {
		minLength: passwordHas('minLength') && passwordHas('noSpaces'),
		mixedCases: passwordHas('upperCase') && passwordHas('lowerCase'),
		digit: passwordHas('digit'),
	};

	function passwordHas(rule: keyof typeof passwordValidationRules) {
		return passwordValidationRules[rule].safeParse(password).success;
	}
}
