import React from 'react';
import { Page } from '../Page';

export const Recommendations = () => {
    const isLoaded = true;

    return (
        <Page mainClassName={`recommendations ${isLoaded ? '' : 'isLoading'}`}>
            <Page.Header title='Recommendations / Reviews' />
        </Page>
    )
}