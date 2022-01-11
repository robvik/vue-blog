import cors from 'cors';
import express from 'express';
import { createConnection } from 'typeorm';
import { PostController } from './controllers/post.controller';

/**
 * Server class
 */
class Server
{
    private app: express.Application;
    private postController: PostController;

    /**
     * Constructor
     */
    constructor() {
        this.app = express();
        this.init();
    }

    /**
     * Initialize wrapper
     */
    private async init() {
        this.initApp();
        await this.initDatabase();
        this.initControllers();
        this.initRoutes();
    }

    /**
     * Initialize server
     */
    private initApp() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(cors({ origin: '*' }));
        this.app.use(express.json());
    }

    /**
     * Database
     */
    private async initDatabase() {
        const settings: any = {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'blog',
            entities: ['build/database/entities/**/*.js'],
            synchronize: false,
            name: 'blog'
        }

        await createConnection(settings);
    }

    /**
     * Controllers
     */
    private initControllers() {
        this.postController = new PostController();
    }

    /**
     * Routes
     */
    private initRoutes() {     
        this.app.use('/api/posts/', this.postController.router); // Configure the new routes of the controller post
    }

    /**
     * Start server
     */
    public start() {
        const port = this.app.get('port');
        this.app.listen(port, () => console.log(`Listening to port ${port}`));
    }
}

new Server().start();