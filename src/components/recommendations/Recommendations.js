import React from 'react';
import { NonDashboardPage } from '../Page';

export const Recommendations = () => {
    const isLoaded = true;

    return (
        <NonDashboardPage mainClassName={`recommendations ${isLoaded ? '' : 'isLoading'}`}>
            <NonDashboardPage.Header title='Recommendations / Reviews' />
            <div className="categories">
                Placeholder
            </div>
        </NonDashboardPage>
    )
}