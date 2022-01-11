import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column('character varying', { array: true })
    tags: string[];

    @Column({ type: 'timestamp', nullable: false })
    createdat: Date;
}