import type {Order} from "@/entities/order/model/types.ts";

export const MOCK_ORDERS: Order[] = [
    {
        id: '32112-wb',
        trackNumber: 'LA094212783SE',
        platform: 'wildberries',
        status: 'inProcessing',
        waitingDate: '14.06.2026',
        userId: 'd121d23d2-21dddhg12-bgbhj211'
    },
    {
        id: '312242-oz',
        trackNumber: 'LA094212783SE',
        platform: 'ozon',
        status: 'delivering',
        waitingDate: '06.06.2026',
        userId: 'd121d23d2-21dddhg12-bgbhj211'
    },
    {
        id: '54321-cd',
        trackNumber: 'LA094212783SE',
        platform: 'cdek',
        status: 'delivered',
        userId: 'd121d23d2-21dddhg12-bgbhj211'
    },
]