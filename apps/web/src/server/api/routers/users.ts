import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const userRouter = createTRPCRouter({
	create: protectedProcedure.input(z.void()).mutation(async ({ ctx }) => {}),
})
