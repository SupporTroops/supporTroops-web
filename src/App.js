import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";

import theme from "./config/theme";

// Components
import ScreenCustom from "./components/custom/ScreenCustom";
import ProtectedRoute from "./components/custom/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import CreateCampaign from "./pages/CreateCampaign";
import Dashboard from "./pages/Dashboard";
import CampaignDetails from "./pages/CampaignDetails";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ScreenCustom>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route
                            path="/create_campaign"
                            element={<CreateCampaign />}
                        />
                    </Route>
                    <Route path="/campaign" element={<p>Campaign</p>} />
                    <Route
                        path="/campaign_details/:campaign_id"
                        element={<CampaignDetails />}
                    />
                    <Route path="/login" element={<p>Login Page</p>} />
                    <Route path="*" element={<p>Error Page</p>} />
                </Routes>
            </ScreenCustom>
        </ThemeProvider>
    );
}

export default App;
