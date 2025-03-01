import { jstack } from "jstack";

export const j = jstack.init();

export const createNewRoute = j.router;
export const publicProcedure = j.procedure
