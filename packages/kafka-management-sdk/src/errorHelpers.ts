import { AxiosError } from "axios";
import { ModelError } from "./generated";

/**
 * Check if the error code originates from the API
 *
 * @param error generic error returned from fumction
 * @returns true if error originated from the API
 */
export const isServiceApiError = (error: unknown): error is AxiosError<ModelError> => {
    return (error as AxiosError<ModelError>).response?.data.code !== undefined;
};

/**
 * Get the error code from the API error
 *
 * @param error generic error returned from fumction
 * @returns error code (one of fields of APIErrorCodes)
 */
export const getErrorCode = (error: unknown): string | undefined => {
    return (error as AxiosError<ModelError>).response?.data?.code;
};