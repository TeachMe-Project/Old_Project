import { z } from "zod";

const userSchema = z.object({
  body: z.object({
    username: z.string({
      required_error: "Email is required"
    })
      .email("Not a valid email"),
  })
});

export default userSchema;
