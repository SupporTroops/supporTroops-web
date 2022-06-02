import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";

import theme from "./config/theme";
import auth from "./utils/auth";

// Components
import ScreenCustom from "./components/custom/ScreenCustom";
import ProtectedRoute from "./components/custom/ProtectedRoute";
import PublicRoute from "./components/custom/PublicRoute";

// Pages
import Home from "./pages/Home";
import CreateCampaign from "./pages/CreateCampaign";
import Dashboard from "./pages/Dashboard";
import CampaignDetails from "./pages/CampaignDetails";
import Donate from "./pages/Donate";
import CampaignsList from "./pages/CampaignsList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(auth.isAuthenticated());
    }, [isLoggedIn]);

    return (
        <ThemeProvider theme={theme}>
            <ScreenCustom isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
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

                    {/* Public routes */}
                    <Route element={<PublicRoute />}>
                        <Route
                            path="/login"
                            element={<Login setIsLoggedIn={setIsLoggedIn} />}
                        />
                        <Route
                            path="/signup"
                            element={<Signup setIsLoggedIn={setIsLoggedIn} />}
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

                    {/* Other Routes */}
                    <Route path="/about_us" element={<p>About Us Page</p>} />
                    <Route path="/contact_us" element={<p>Contact Us</p>} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </ScreenCustom>
        </ThemeProvider>
    );
}

export default App;
