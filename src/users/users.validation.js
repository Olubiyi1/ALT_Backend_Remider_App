import { validationMessages } from "../utils/validationMessages.js";
import Joi, { allow } from "joi";

export const userValidationSchema = Joi.object({
  userName: Joi.string()
    .trim.required()
    .min(3)
    .max(5)
    .messages(validationMessages.username),
  email: Joi.string()
    .trim()
    .required()
    .email({ tlds: { allow: false } })
    .lowercase()
    .messages(validationMessages.email),
  DOB: Joi.date().less(now).required().messages(validationMessages.DOB),
});
