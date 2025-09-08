export interface ApiResponse<T> {
  data: T;
  responseReqId: string;
  responseCode: string;
  responseDescription: string | null;
  responseException: string | null;
  dateRequest: string;
}
