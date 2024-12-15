import * as z from 'zod';
import {PASSWORD_REQUIREMENTS} from './constants';
import {formSchema} from './form-schema';

export type PasswordRequirementMessage = (typeof PASSWORD_REQUIREMENTS)[number]['id'];
export type FormSchema = z.infer<typeof formSchema>;
