import { z } from "zod";

const userSchema = z.object({
  body: z.object({
    username: z.string({
      required_error: "Full name is required"
    })
      .email("Not a valid email"),

    password: z
      .string({
        required_error: "Email is required"
      })

  })
});

export default userSchema;
