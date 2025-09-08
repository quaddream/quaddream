import { z } from "zod";

const sectorList = [
  { id: 1, name: "Service Looking For" },
  { id: 2, name: "Project Type1" },
  { id: 3, name: "Project Type2" },
];

export const letstalkSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z
    .string()
    .email("Invalid email address")
    .max(100, "Email must be at most 100 characters"),

  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(15, "Phone number is too long")
    .regex(
      /^(\+?\d{1,4}[\s-]?)?(\(?\d{2,5}\)?[\s-]?)?\d{5,10}$/,
      "Invalid phone number"
    ),

  sector: z.object({
    id: z.number(),
    name: z.enum(sectorList.map((s) => s.name) as [string, ...string[]]),
  }),

  message: z
    .string()
    .min(3, "Message must be at least 3 character")
    .max(1000, "Message must be at most 1000 characters"),
});

export type LetstalkFormValues = z.infer<typeof letstalkSchema>;
