export interface ResultModel<T>{
    statusCode: Int16Array;
    message: string;
    response: T;
}