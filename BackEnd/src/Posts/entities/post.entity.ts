import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  public: boolean;

  // im not sure about this code
  constructor(item: Partial<Post>) {
    Object.assign(this, item);
  }
}
