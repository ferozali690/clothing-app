import { playAudit } from 'playwright-lighthouse'
import { CUMULATIVE_SHIFT_THRESHOLD, FIRST_CONTENTFUL_PAINT_THRESHOLD, LARGEST_CONTENTFUL_PAINT_THRESHOLD, SPEED_INDEX_THRESHOLD, TIME_TO_INTERACTIVE_THRESHOLD } from './constants.js';
import {expect } from '@playwright/test';


export const checkWebVitals = async (payload) => {
    const { lightHouseConfig, lightHouseNetworkOpts, portNumber, page, reportName } = payload;

    const report = await playAudit({
        page: page,
        thresholds: {
            performance: 50,
            accessibility: 50,
            'best-practices': 50,
            seo: 50,
            pwa: 50,
        },
        config: lightHouseConfig,
        opts: lightHouseNetworkOpts,
        reports: {
            formats: { html: true },
            name: reportName,
            directory: './e2e/performance-reports'
        },
        port: portNumber
    });
    console.log('report',report)
    const audits = report.lhr?.audits || {};
    
    // Check and assert each audit's numeric value if it exists
    if (audits['cumulative-layout-shift']?.numericValue !== undefined) {
        expect(audits['cumulative-layout-shift'].numericValue).toBeLessThan(CUMULATIVE_SHIFT_THRESHOLD);
    } else {
        console.warn('Cumulative Layout Shifts audit is missing or does not have a numericValue');
    }
    
    if (audits['first-contentful-paint']?.numericValue !== undefined) {
        expect(audits['first-contentful-paint'].numericValue).toBeLessThan(FIRST_CONTENTFUL_PAINT_THRESHOLD);
    } else {
        console.warn('First Contentful Paint audit is missing or does not have a numericValue');
    }
    
    if (audits['speed-index']?.numericValue !== undefined) {
        expect(audits['speed-index'].numericValue).toBeLessThan(SPEED_INDEX_THRESHOLD);
    } else {
        console.warn('Speed Index audit is missing or does not have a numericValue');
    }
    
    if (audits['interactive']?.numericValue !== undefined) {
        expect(audits['interactive'].numericValue).toBeLessThan(TIME_TO_INTERACTIVE_THRESHOLD);
    } else {
        console.warn('Time to Interactive audit is missing or does not have a numericValue');
    }
    
    if (audits['largest-contentful-paint']?.numericValue !== undefined) {
        expect(audits['largest-contentful-paint'].numericValue).toBeLessThan(LARGEST_CONTENTFUL_PAINT_THRESHOLD);
    } else {
        console.warn('Largest Contentful Paint audit is missing or does not have a numericValue');
    }
    


};