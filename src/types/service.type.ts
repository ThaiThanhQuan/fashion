export interface IService {
    id: string
    title: string
    slug: string
    subTitle: string
    description: string
    detailDescription: string
    badge: string
    price: string
    thumbnail: string
    featureValue: string
    featureLabel: string
    quote: string
    artistId: string
}

export interface IHighlight {
    id: string
    content: string
    serviceId: string
}

export interface IPricing {
    id: string
    label: string
    price: number
    serviceId: string
}

export interface IWorkflow {
    id: string
    no: string
    title: string
    content: string
    serviceId: string
}

export interface ITimeline {
    id: string
    label: string
    value: string
    serviceId: string
}