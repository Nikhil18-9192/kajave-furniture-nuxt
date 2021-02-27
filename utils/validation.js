import Joi from "joi";

const quoteFormValidation = data => {
  const formSchema = Joi.object({
    name: Joi.string()
      .min(1)
      .max(80)
      .required(),
    mobile: Joi.string()
      .min(10)
      .max(10)
      .required(),
    email: Joi.string()
      .email({
        tlds: false
      })
      .required(),
    city: Joi.string().required(),
    message: Joi.string()
      .min(3)
      .max(800)
      .required()
  }).required();

  return formSchema.validate(data);
};

export { quoteFormValidation };
