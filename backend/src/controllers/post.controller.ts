import { Router, Response, Request } from 'express';
import { PostEntity } from '../database/entities/post.entity';
import { PostService } from '../services/post.service';

/**
 * PostController class
 */
export class PostController {
    public router: Router;
    private postService: PostService;

    /**
     * Constructor
     */
    constructor() {
        this.postService = new PostService();
        this.router = Router();
        this.routes();
    }

    /**
     * Get all posts
     * @param req @unused
     * @param res All posts
     */
    public index = async(req: Request, res: Response) => {
        const posts = await this.postService.index();
        res.json(posts);
    }

    /**
     * Get specific post
     * @param req Post id
     * @param res Specific post
     */
    public get = async(req: Request, res: Response) => {
        const id = req['params']['id'];
        const findOne = await this.postService.get(Number(id)); 
        res.send(findOne);
    }

    /**
     * Create post
     * @param req Post data
     * @param res Created post
     */
    public create = async (req: Request, res: Response) => {
        const post = req['body'] as PostEntity;
        const newPost = await this.postService.create(post);
        res.send(newPost);
    }

    /**
     * Update post
     * @param req Updated post data
     * @param res Updated post
     */
    public update = async (req: Request, res: Response) => {
        const post = req['body'] as PostEntity;
        const id = req['params']['id'];
        res.send(this.postService.update(post, Number(id)));
    }

    /**
     * Delete post
     * @param req Post data (id)
     * @param res Delete result
     */
    public delete = async (req: Request, res: Response) => {
        const id = req['params']['id'];
        res.send(this.postService.delete(Number(id)));
    }

    /**
     * Setup /posts routes
     */
    private routes() {
        this.router.get('/', this.index);
        this.router.get('/:id', this.get);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    } 
}