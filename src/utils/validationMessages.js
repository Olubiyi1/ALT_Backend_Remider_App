export const validationMessages = {
  username: {
    "any.required": "Please enter username",
    "string.empty": "username cannot be empty",
    "string.min": "username must be at least 3 characters long",
    "string.max": "username cannot exceed 50 characters",
  },
  email: {
    "any.required": "Please enter email",
    "string.empty": "Email cannot be empty",
    "string.email": "Please enter a valid email address",
  },
    DOB: {
    "any.required": "Please enter date of birth",
    "date.base": "Date of birth must be a valid date",
    "date.format": "Please enter a valid date format",
    "date.less": "Date of birth must be in the past",
  }
}