import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Notification } from "src/components/common";
import { Home } from "src/views";
import { Admin } from "src/views/Admin";
import { Analytics } from "src/views/Analytics";
import { Futures } from "src/views/Futures";
import { FuturesMarket } from "src/views/FuturesMarket";
import { FuturesTable } from "src/views/FuturesTable";
import { Options } from "src/views/Options";
import { TradingSandbox } from "src/views/TradingSandbox";
import { MainLayout } from "../components";

export const App: FC = () => {
  return (
    <MainLayout>
      <Notification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/futures" element={<Futures />}>
          <Route path="/futures" element={<FuturesTable />} />
          <Route path="/futures/:id" element={<FuturesMarket />} />
        </Route>
        <Route path="options" element={<Options />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="trading-sandbox" element={<TradingSandbox />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
