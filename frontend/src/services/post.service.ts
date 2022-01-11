import ApiService from "@/services/http.service";
import { AxiosResponse } from "axios";

/**
 * PostService class
 * Extends ApiService class
 */
class PostService extends ApiService  {

    /**
     * Method gets all post data from database
     * @returns All posts
     */
    public getAll(): Promise<AxiosResponse<any, any>> {
        return this.http.get(`/posts`);
    }

    /**
     * Method gets specific post, based on post identifier, from database
     * @param id Post identifier
     * @returns Post
     */
    public get(id: Number): Promise<AxiosResponse<any, any>>  {
        return this.http.get(`/posts/${id}`);
    }

    /**
     * Method creates a new post containing provided post data
     * @param data Post data
     * @returns 
     */
    public create(data: any): Promise<AxiosResponse<any, any>>  {
        return this.http.get(`/posts/${data}`);
    }

    /**
     * Method updates existing post, based on post identifier, with provided post data
     * @param id Post identifier
     * @param data Updated post data
     * @returns Updated post
     */
    public update(id: Number, data: any): Promise<AxiosResponse<any, any>>  {
        return this.http.put(`/posts/${id}`, data);
    }

    /**
     * Method deletes post based on post identifier
     * @param id Post identifier
     * @returns Delete post
     */
    public delete(id: Number): Promise<AxiosResponse<any, any>>  {
        return this.http.delete(`/posts/${id}`);
    }
}

export default new PostService();