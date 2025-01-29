export interface Intent {
    id: string;
    name: string;
    description: string;
    trainingData: TrainingData;
    reply: MessageData;
}

export interface TrainingData {
    expressionCount: number;
    expressions: MessageData[];
}

export interface MessageData {
    id: string;
    text: string;
}