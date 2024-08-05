import { playAudit } from 'playwright-lighthouse'
import { CUMULATIVE_SHIFT_THRESHOLD, FIRST_CONTENTFUL_PAINT_THRESHOLD, FIRST_INPUT_DELAY_THRESHOLD, LARGEST_CONTENTFUL_PAINT_THRESHOLD, SPEED_INDEX_THRESHOLD, TIME_TO_INTERACTIVE_THRESHOLD } from './constants';


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
    expect(report.lhr.audits['cumulative-layout-shifts'].numericValue).toBeLessThan(CUMULATIVE_SHIFT_THRESHOLD);
    expect(report.lhr.audits['first-contentful-paint'].numericValue).toBeLessThan(FIRST_CONTENTFUL_PAINT_THRESHOLD);
    expect(report.lhr.audits['speed-index'].numericValue).toBeLessThan(SPEED_INDEX_THRESHOLD);
    expect(report.lhr.audits['first-input-delay'].numericValue).toBeLessThan(FIRST_INPUT_DELAY_THRESHOLD);
    expect(report.lhr.audits['time-to-interactive'].numericValue).toBeLessThan(TIME_TO_INTERACTIVE_THRESHOLD);
    expect(report.lhr.audits['largest-contentful-paint'].numericValue).toBeLessThan(LARGEST_CONTENTFUL_PAINT_THRESHOLD);


};