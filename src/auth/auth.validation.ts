const Joi = require('joi');

export const validation = {
    get: {
        me: {
            headers: Joi.object({
                authorization: Joi.string()
                    .required()
                    .regex(/^Bearer\s[\w-\.]+$/)
                    .messages({
                        'string.empty': `Authorization token is required.`,
                        'string.pattern.base': `Invalid token format.`
                    })
            })
        },
    },
    post: {
        register: {
            body:
                Joi.object({
                    email: Joi.string().email().required(),
                    password: Joi.string().required(),
                    phoneNumber: Joi.string(),
                    name: Joi.string(),
                })
        },
        login: {
            body: Joi.object(
                {
                    email: Joi.string().email().required(),
                    password: Joi.string().required(),
                }
            )
        },
        refresh: {
            body: Joi.object({
                refresh_token: Joi.string().token().required()
            })
        },
        oauth: {
            body: Joi.object({
                oauth_token: Joi.string().required()
            })
        }
    }
}
