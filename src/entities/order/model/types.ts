export interface Order {
    id: string,
    trackNumber: string,
    platform: string,
    status: 'inProcessing' | 'delivering' | 'delivered',
    waitingDate?: string,
    userId: string
}