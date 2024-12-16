export const PASSWORD_REQUIREMENTS = [
	{id: 'minLength', message: '8 characters or more (no spaces)'},
	{id: 'mixedCases', message: 'Uppercase and lowercase letters'},
	{id: 'digit', message: 'At least one digit'},
] as const;

export const PASWORD_FIELD_MAX_LENGTH = 64;
