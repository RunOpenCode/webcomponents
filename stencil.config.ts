import {Config} from '@stencil/core';
import {sass}   from "@stencil/sass";

export const config: Config = {
    namespace:     'roc',
    outputTargets: [
        {type: 'dist'},
        {type: 'docs'},
        {
            type:          'www',
            serviceWorker: null // disable service workers
        }
    ],
    globalStyle:   'src/global/variables.css',
    plugins:       [
        sass(),
    ]
};
