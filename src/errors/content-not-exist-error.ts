import { ApplicationError } from '@/protocols';

export function contentNotExistError(): ApplicationError {
  return {
    name: 'ContentNotExistError',
    message: 'No record of the provided zip code was found.',
  };
}
