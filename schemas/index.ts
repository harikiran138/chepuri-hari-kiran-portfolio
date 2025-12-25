import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const RequestSchema = z.object({
  companyName: z.string().min(1, {
    message: "Company name is required",
  }),
  companyWebsite: z.string().optional(),
  roleType: z.string().min(1, {
    message: "Role type is required",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }),
  budgetRange: z.string().optional(),
});
