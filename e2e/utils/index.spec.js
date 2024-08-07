import {test } from '@playwright/test';
import{
    SLOW_3G_CONFIG,
    FAST_3G_CONFIG,
    REGULAR_3G_CONFIG,
    REGULAR_4G_CONFIG,
    LIGHTHOUSE_MOBILE_SLOW_4G_CONFIG,
    LIGHTHOUSE_MOBILE_REGULAR_3G_CONFIG,
    LIGHTHOUSE_DESKTOP_DENSE_4G_CONFIG,
} from './constants.js'
import { checkWebVitals } from './webVitalsUtils.js';
import lighthouseDesktopConfig from 'lighthouse/core/config/lr-desktop-config.js';
import lighthouseMobileConfig from  'lighthouse/core/config/lr-mobile-config.js';

const HOME_PAGE_URL = 'http://localhost:3000/';



test.describe('Lighthouse Performance Checks',()=>{
test('Performance metrics for Slow 3g network',async({playwright,browserName})=>{
    test.skip(browserName !== 'chromium','Running only on chrome');
    const browser=await playwright.chromium.launch({
        args:['--remote-debugging-port=9223'],
    });
    

    const page = await browser.newPage();

    await page.goto(HOME_PAGE_URL,{waitUntil:'networkidle'});

    await checkWebVitals({
        lighthouseConfig:lighthouseDesktopConfig,
        lightHouseNetworkOpts:SLOW_3G_CONFIG,
        portNumber:9223,
        page:page,
        reportName: 'lh-report-slow-3g-desktop',
    });
});
test('Performance metrics for Regular 3g network',async({playwright,browserName})=>{
    test.skip(browserName !== 'chromium','Running only on chrome');
    const browser=await playwright.chromium.launch({
        args:['--remote-debugging-port=9223'],
    });
    const page = await browser.newPage();

    await page.goto(HOME_PAGE_URL,{waitUntil:'networkidle'});

    await checkWebVitals({
        lighthouseConfig:lighthouseDesktopConfig,
        lightHouseNetworkOpts:REGULAR_3G_CONFIG,
        portNumber:9223,
        page:page,
        reportName: 'lh-report-Regular-3g-desktop',
    });
});
test('Performance metrics for Regular 4g network',async({playwright,browserName})=>{
    test.skip(browserName !== 'chromium','Running only on chrome');
    const browser=await playwright.chromium.launch({
        args:['--remote-debugging-port=9223'],
    });
    const page = await browser.newPage();

    await page.goto(HOME_PAGE_URL,{waitUntil:'networkidle'});

    await checkWebVitals({
        lighthouseConfig:lighthouseDesktopConfig,
        lightHouseNetworkOpts:REGULAR_4G_CONFIG,
        portNumber:9223,
        page:page,
        reportName: 'lh-report-Regular-4g-desktop',
    });
});
test('Performance metrics for Dense 4g network',async({playwright,browserName})=>{
    test.skip(browserName !== 'chromium','Running only on chrome');
    const browser=await playwright.chromium.launch({
        args:['--remote-debugging-port=9223'],
    });
    const page = await browser.newPage();

    await page.goto(HOME_PAGE_URL,{waitUntil:'networkidle'});

    await checkWebVitals({
        lighthouseConfig:lighthouseDesktopConfig,
        lightHouseNetworkOpts:LIGHTHOUSE_DESKTOP_DENSE_4G_CONFIG,
        portNumber:9223,
        page:page,
        reportName: 'lh-report-dense-4g-desktop',
    });
});
test('Performance metrics for Fast 3g network',async({playwright,browserName})=>{
    test.skip(browserName !== 'chromium','Running only on chrome');
    const browser=await playwright.chromium.launch({
        args:['--remote-debugging-port=9223'],
    });
    const page = await browser.newPage();

    await page.goto(HOME_PAGE_URL,{waitUntil:'networkidle'});

    await checkWebVitals({
        lighthouseConfig:lighthouseDesktopConfig,
        lightHouseNetworkOpts:FAST_3G_CONFIG,
        portNumber:9223,
        page:page,
        reportName: 'lh-report-Fast-3g-desktop',
    });
});
test('Performance metrics for Mobile Regular 3g network',async({playwright,browserName})=>{
    test.skip(browserName !== 'chromium','Running only on chrome');
    const browser=await playwright.chromium.launch({
        args:['--remote-debugging-port=9223'],
    });
    const page = await browser.newPage();

    await page.goto(HOME_PAGE_URL,{waitUntil:'networkidle'});

    await checkWebVitals({
        lighthouseConfig:lighthouseMobileConfig,
        lightHouseNetworkOpts:LIGHTHOUSE_MOBILE_REGULAR_3G_CONFIG,
        portNumber:9223,
        page:page,
        reportName: 'lh-report-regular-3g-mobile',
    });
});
test('Performance metrics for Mobile Slow 4g network',async({playwright,browserName})=>{
    test.skip(browserName !== 'chromium','Running only on chrome');
    const browser=await playwright.chromium.launch({
        args:['--remote-debugging-port=9223'],
    });
    const page = await browser.newPage();

    await page.goto(HOME_PAGE_URL,{waitUntil:'networkidle'});

    await checkWebVitals({
        lighthouseConfig:lighthouseMobileConfig,
        lightHouseNetworkOpts:LIGHTHOUSE_MOBILE_SLOW_4G_CONFIG,
        portNumber:9223,
        page:page,
        reportName: 'lh-report-slow-4g-mobile',
    });
});
})