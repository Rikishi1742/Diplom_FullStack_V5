import React, { Suspense } from 'react'

import { CSpinner } from '@coreui/react';


import { Routes, Route } from "react-router-dom";
import AppBar from '../layout/AppBar';
import HomePage from '../pages/HomePage';
import KPIWorkerPage from '../pages/KPIWorkerPage';
import LoginPage from '../pages/Login/LoginPage';
import PersonalAccountPage from '../pages/PersonalAccountPage';
import Education from '../pages/Education';
import TaskPage from '../pages/TaskPage';
import AboutUs from '../pages/aboutUs';
import NotFoundPage from '../pages/NotFoundPage';

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
                <Route path="/tasks" element={<TaskPage />} />
                <Route path="/kpiWorkers" element={<KPIWorkerPage />} />
                <Route path="/personalAccount" element={<PersonalAccountPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes