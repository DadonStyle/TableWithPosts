import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  title: string;

  @Column()
  body: string;

  // im not sure about this code
  // in the create function we pass js object and it transforms it into entity
  constructor(item: Partial<Post>) {
    Object.assign(this, item);
  }
}
