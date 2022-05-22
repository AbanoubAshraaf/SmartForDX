interface ISampleInfos {
    id: string;
    infoCode: string;
    infoText: string;
}

export interface ISample {
    id: string;
    identifier: string;
    status: string;
    sampleType: string;
    createdAt: string;
    sortOrder: number;
    seq: number;
    sampleInfos: ISampleInfos[];
    expectedTubeCodes: string;
}

export interface IOrderData {
    id: string;
    identifier: string;
    laboratoryTimestamp: string;
    samples: ISample[];
}
