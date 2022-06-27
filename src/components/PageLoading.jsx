import { CircularProgress } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const LoadingRoot = styled.div`
    min-height: 100vh;
    background: white;
    dispkay:flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
`
export default function PageLoading() {
    return (
        <LoadingRoot>
            <CircularProgress/>
        </LoadingRoot>
    )
}
