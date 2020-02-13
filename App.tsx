import React from 'react';
import { Navigation } from './navigations';
import { MainNavigator } from './views/mainNavigator';

export default function App() {
    return (
        <Navigation>
            <MainNavigator />
        </Navigation>
    );
}
