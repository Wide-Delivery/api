import { Request, Response, NextFunction } from 'express';
import httpReqLogger from '../../logger';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.httpCode) {
        res.status(err.httpCode).send(err.message);
    }

    const response = {
        status: 'error',
        message: 'Internal Server Error',
        details: undefined
    };

    if (process.env.NODE_ENV === 'development') {
        response.details = err.message;
    }

    res.status(500).send(response);
    httpReqLogger.error('unhandled error', { req, res });
};

export default errorHandler;
