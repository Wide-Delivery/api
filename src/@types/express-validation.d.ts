declare module 'express-validation' {
    // This is a minimal placeholder, adjust according to your usage:

    export class ValidationError extends Error {
        constructor(message?: string);
        status: number;  // Presuming 'status' is also used. If not, remove it.
        statusCode: number;  // Added statusCode
        errors: any[];
    }


    export function validate(schema: any): any;
}
