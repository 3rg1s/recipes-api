import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class recipeEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  Title: String;

  @Column()
  Preparation_time: Number;

  @Column()
  Description: String;

  @Column()
  ingredients: String;
}
