import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "src/views";
import { Analytics } from "src/views/Analytics";
import { Futures } from "src/views/Futures";
import { Options } from "src/views/Options";
import { TradingSandbox } from "src/views/TradingSandbox";
import { MainLayout } from "../components";

export const App: FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="futures" element={<Futures />} />
        <Route path="options" element={<Options />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="trading-sandbox" element={<TradingSandbox />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
