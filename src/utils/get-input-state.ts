type InputState = 'default' | 'success' | 'error';

export interface GetInputStateParams {
	invalid: boolean;
}
export interface GetInputStateOptionalParams {
	errorStateEnabled?: boolean;
	successStateEnabled?: boolean;
}

export function getInputState(
	{invalid}: GetInputStateParams,
	{errorStateEnabled = true, successStateEnabled = true}: GetInputStateOptionalParams = {
		errorStateEnabled: true,
		successStateEnabled: true,
	},
): InputState {
	if (invalid) {
		return errorStateEnabled ? 'error' : 'default';
	}

	return successStateEnabled ? 'success' : 'default';
}
