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
import Donate from "./pages/Donate";
import CampaignsList from "./pages/CampaignsList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ScreenCustom>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/campaigns_list" element={<CampaignsList />} />

                    {/* Protected Routes */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route
                            path="/create_campaign"
                            element={<CreateCampaign />}
                        />
                    </Route>

                    {/* Campaign Details */}
                    <Route
                        path="/campaign_details/:campaign_id"
                        element={<CampaignDetails />}
                    />
                    <Route
                        path="/campaign_details/:campaign_id/donate"
                        element={<Donate />}
                    />

                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/about_us" element={<p>About Us Page</p>} />
                    <Route path="/contact_us" element={<p>Contact Us</p>} />
                    <Route path="*" element={<p>Error Page</p>} />
                </Routes>
            </ScreenCustom>
        </ThemeProvider>
    );
}

export default App;
