import { HttpErrorResponse } from "@angular/common/http";
import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface IHttpErrorHandlerService {
    handleError(error: HttpErrorResponse): Observable<any>; 
}

export const HTTP_ERROR_HANDLER_SERVICE_TOKEN = new InjectionToken<IHttpErrorHandlerService>('HttpErrorHandlerService');