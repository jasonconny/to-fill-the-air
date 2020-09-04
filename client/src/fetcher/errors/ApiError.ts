const API_ERROR = 'ApiError';

class ApiError extends Error {
    type: string = API_ERROR;
    status: number;
    message: string;
    requestId: string;
    additionalData: Map<string, any>;

    constructor(json: Record<string, any>) {
        super(json.message);
        this.status = json.status;
        this.message = json.logMessage || json.message;
        this.requestId = json.requestId;
        this.additionalData = json.additionalData || {};
    }
}

export { API_ERROR };
export default ApiError;
