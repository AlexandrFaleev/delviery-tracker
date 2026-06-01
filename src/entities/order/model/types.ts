export type filterValueType =
    | 'all'
    | 'inProcessing'
    | 'sorting'
    | 'delivering'
    | 'delivered';


export interface Order {
    id: string,
    trackNumber: string,
    platform: string,
    status: filterValueType,
    waitingDate?: string,
    userId: string
}