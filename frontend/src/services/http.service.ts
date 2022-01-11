import axios, { AxiosInstance, AxiosResponse } from 'axios';

/**
 * Abstract ApiService class
 */
abstract class ApiService {
    protected http: AxiosInstance;

    /**
     * Constructor
     * Creates an axios instance
     */
    constructor() {
        this.http = axios.create({
            baseURL: "http://localhost:3000/api",
            headers: {
                "Content-type": "application/json"
            }
        });
    }

    /**
     * Abstract method definition to get all data
     */
    public abstract getAll(): Promise<AxiosResponse<any, any>>;

    /**
     * Abstract method definition to get data based on identifier
     * @param id Data identifier
     */
    public abstract get(id: Number): Promise<AxiosResponse<any, any>>;

    /**
     * Abstract method definition to create/post data
     * @param data Data
     */
    public abstract create(data: any): Promise<AxiosResponse<any, any>>;

    /**
     * Abstract method definition to update data based on identifier
     * @param id Data identifier
     * @param data Updated data
     */
    public abstract update(id: Number, data: any): Promise<AxiosResponse<any, any>>;

    /**
     * Abstract method definition to delete data based on identifier
     * @param id Data identifier
     */
    public abstract delete(id: Number): Promise<AxiosResponse<any, any>>;
}

export default ApiService;