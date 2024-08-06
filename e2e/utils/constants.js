import {throttling} from 'lighthouse/core/config/constants.js'

const NETWORK_PRESET_OFFLINE=false;

const THROTTLING_METHOD_TYPE = 'simulate';

const SLOW_3G_CONFIG ={
    throttlingMethod: THROTTLING_METHOD_TYPE,
    throttling:{
        offline:NETWORK_PRESET_OFFLINE,
        downloadThroughput:((500 * 1000) / 8) *0.8,
        uploadThroughput:((500 * 1000) / 8) *0.8,
        latency: 400 * 5,
    },
}

const FAST_3G_CONFIG ={
    throttlingMethod: THROTTLING_METHOD_TYPE,
    throttling:{
        offline:NETWORK_PRESET_OFFLINE,
        downloadThroughput:((1.6 * 1024 * 1024) / 8) *0.9,
        uploadThroughput:((750 * 1024) / 8) *0.9,
        latency: 150 * 3.75,
    },
}

const REGULAR_3G_CONFIG ={
    throttlingMethod: THROTTLING_METHOD_TYPE,
    throttling:{
        offline:NETWORK_PRESET_OFFLINE,
        downloadThroughput:((750 * 1024) / 8),
        uploadThroughput:((250 * 1024) / 8),
        latency:100,
    },
}

const REGULAR_4G_CONFIG ={
    throttlingMethod: THROTTLING_METHOD_TYPE,
    throttling:{
        offline:NETWORK_PRESET_OFFLINE,
        downloadThroughput:((12 * 1024 * 1024) / 8),
        uploadThroughput:((6 * 1024 * 1024) / 8),
        latency:50,
    },
}

const LIGHTHOUSE_MOBILE_SLOW_4G_CONFIG ={
    throttlingMethod: THROTTLING_METHOD_TYPE,
    throttling:throttling.mobileSlow4G,
}

const LIGHTHOUSE_MOBILE_REGULAR_3G_CONFIG ={
    throttlingMethod: THROTTLING_METHOD_TYPE,
    throttling:throttling.mobileRegular3G,
}

const LIGHTHOUSE_DESKTOP_DENSE_4G_CONFIG ={
    throttlingMethod: THROTTLING_METHOD_TYPE,
    throttling:throttling.desktopDense4G,
}


const FIRST_CONTENTFUL_PAINT_THRESHOLD = 1000;

const LARGEST_CONTENTFUL_PAINT_THRESHOLD=2500;

const TIME_TO_INTERACTIVE_THRESHOLD = 5000;

const SPEED_INDEX_THRESHOLD = 3400;

const FIRST_INPUT_DELAY_THRESHOLD = 100;

const CUMULATIVE_SHIFT_THRESHOLD = 100;

export{
    SLOW_3G_CONFIG,
    FAST_3G_CONFIG,
    REGULAR_3G_CONFIG,
    REGULAR_4G_CONFIG,
    LIGHTHOUSE_MOBILE_SLOW_4G_CONFIG,
    LIGHTHOUSE_MOBILE_REGULAR_3G_CONFIG,
    LIGHTHOUSE_DESKTOP_DENSE_4G_CONFIG,
    FIRST_CONTENTFUL_PAINT_THRESHOLD,
    LARGEST_CONTENTFUL_PAINT_THRESHOLD,
    TIME_TO_INTERACTIVE_THRESHOLD,
    SPEED_INDEX_THRESHOLD,
    FIRST_INPUT_DELAY_THRESHOLD,
    CUMULATIVE_SHIFT_THRESHOLD
}