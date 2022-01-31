import React, { FC } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export const Analytics: FC = withAuthenticationRequired(() => {
  return <div>Analytics page</div>;
});

export default Analytics;
