import React, { Suspense } from 'react'

import { CSpinner } from '@coreui/react';


import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import KPIWorkerPage from '../pages/KPIWorkerPage';
import LoginPage from '../pages/Login/LoginPage';
import Education from '../pages/Education';
import AboutUs from '../pages/aboutUs';
import NotFoundPage from '../pages/NotFoundPage';
import Account from '../pages/Account';

type Props = {
    children?: React.ReactNode
}

function AppRoutes({ children }: Props) {
    return (

        <Suspense fallback={<CSpinner color="primary" />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/education" element={<Education />} />
                <Route path="/Account" element={<Account />} />
                <Route path="/kpiWorkers" element={<KPIWorkerPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes