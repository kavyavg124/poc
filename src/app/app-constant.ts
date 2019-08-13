import { environment } from '../environments/environment';


export class AppConstants {
    static readonly API_URL: string = environment.baseUrl;
    static readonly API_ENDPOINT: any = environment.endpoint;
}
