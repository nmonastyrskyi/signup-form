import {PASSWORD_REQUIREMENTS} from './constants';

export type PasswordRequirementMessage = (typeof PASSWORD_REQUIREMENTS)[number]['id'];
