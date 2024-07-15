import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = ({ backRoute = '/', backText = 'Back Home', children, title, customTitle, history }) => (
    <div className="heading-container">
        <div>
            <span className='back-btn' onClick={() => history.push(backRoute)}>
                {backText}
            </span>
            {customTitle ? customTitle : (
                <h1 className="heading">{title}</h1>
            )}
        </div>
        {children}
    </div>
);

export const Page = ({ children, mainClassName, onClick }) => (
    <div className={`page ${mainClassName}`} onClick={onClick}>
        {children}
    </div>
);

// export const Page = withRouter(PageWithoutHistory);

Page.Header = withRouter(Header);

export const NonDashboardPage = ({ children, mainClassName }) => (
    <div className={`page non-dashboard-page ${mainClassName}`}>
        {children}
    </div>
);

NonDashboardPage.Header = withRouter(Header);