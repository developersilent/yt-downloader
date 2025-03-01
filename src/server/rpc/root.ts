import { testRoute } from "@/server/routers/test";
import { j } from "@/server/rpc/init";


const app = j.router().basePath("/api").use(j.defaults.cors).onError(j.defaults.errorHandler)


const appRouter = j.mergeRouters(app, {
  test: testRoute
})

export type AppRouter = typeof appRouter

export default appRouter
