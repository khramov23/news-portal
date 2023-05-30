import webpackPreprocessor from '@cypress/webpack-preprocessor'
import { defineConfig } from 'cypress'

import webpackConfig from './webpack.config'

export default defineConfig({
    e2e: {
        setupNodeEvents (on, config) {
            on('file:preprocessor', webpackPreprocessor({
                webpackOptions: webpackConfig({
                    port: 3000,
                    mode: 'development',
                    apiUrl: 'http://localhost:5000'
                })
            }))
        },
        baseUrl: 'http://localhost:3000'
    }
})
