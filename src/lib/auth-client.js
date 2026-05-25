import { createAuthClient } from "better-auth/react";

/** Same-origin default (/api/auth) is used when baseURL is omitted. */
export const authClient = createAuthClient();