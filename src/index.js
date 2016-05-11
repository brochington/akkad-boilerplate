import React from 'react';
import {render} from 'react-dom';
import App from './app';
import {AppContainer} from 'react-hot-loader';

render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root')
);

console.log('module.hot', module.hot);

if (module.hot) {
    module.hot.accept('./app', () => {
        console.log('run accept');
        console.dir(App);
        render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
