import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class recipeEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ varchar: 235 })
  Name: String;

  @Column()
  ready_in: Number;

  @Column()
  directions: String;

  @Column()
  ingredients: String[];
}
