import React, { FC } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export const TradingSandbox: FC = withAuthenticationRequired(() => {
  return <div>TradingSandbox page</div>;
});

export default TradingSandbox;
