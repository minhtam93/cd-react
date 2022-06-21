import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Siderbar from '../components/Sidebar'

export default function MainLayout() {
    return (
        <>
            <Header />
            <Siderbar />
            <Outlet />
            <Footer />
        </>
    )
}
