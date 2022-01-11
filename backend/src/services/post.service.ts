import { getConnection } from 'typeorm';
import { PostEntity } from '../database/entities/post.entity';
import { PostRepository } from '../repository/post.repository';

/**
 * PostService class
 */
export class PostService {
    private postRepository: PostRepository;

    /**
     * Constructor
     */
    constructor() {
        this.postRepository = getConnection('blog')
            .getCustomRepository(PostRepository);
    }

    /**
     * Database query - Get all posts
     * @returns All posts
     */
    public index = async () => {
        return await this.postRepository.find();
    }

    /**
     * Database query - Get specific post based on post id
     * @param id Post id
     * @returns Specific post
     */
    public get = async(id: number) => {
        return await this.postRepository.findOne(id);
    }

    /**
     * Database query - Create post based on post entity
     * @param post Post data
     * @returns Created post
     */
    public create = async (post: PostEntity) => {
        return await this.postRepository.save(post);
    }

    /**
     * Database query - Update specific post based on provided post id and post data
     * @param post Post data
     * @param id Post id
     * @returns Updated post
     */
    public update = async (post: PostEntity, id: number) => {
        return await this.postRepository.update(id, post);
    }

    /**
     * Database query - Delete specific post based on provided post id
     * @param id Post id
     * @returns Delete result
     */
    public delete = async (id: number) => {
        return await this.postRepository.delete(id);
    }
}