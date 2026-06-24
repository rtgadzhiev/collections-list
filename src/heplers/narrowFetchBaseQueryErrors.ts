import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';

export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

export function isErrorWithMessage(
  error: unknown,
): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error as any).message === 'string'
  );
}

export function getErrorMessage(error: unknown): string {
  if (isFetchBaseQueryError(error)) {
    if (typeof error.data === 'string') {
      return error.data;
    }
    if (
      error.data &&
      typeof error.data === 'object' &&
      'message' in error.data
    ) {
      return String(error.data.message);
    }

    return `Ошибка сервера (${error.status})`;
  }

  if (isErrorWithMessage(error)) {
    return error.message;
  }

  return 'Произошла неизвестная ошибка';
}
