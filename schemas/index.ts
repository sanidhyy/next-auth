import * as z from "zod";

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required.",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required.",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required.",
  }),
  password: z.string().trim().min(1, {
    message: "Password is required.",
  }),
  code: z.optional(
    z.coerce
      .number()
      .gte(100_000, {
        message: "Invalid Code.",
      })
      .lte(1_000_000, {
        message: "Invalid Code.",
      })
  ),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email: z.string().email({
    message: "Email is required.",
  }),
  password: z.string().trim().min(6, {
    message: "Minimum 6 characters required.",
  }),
});
