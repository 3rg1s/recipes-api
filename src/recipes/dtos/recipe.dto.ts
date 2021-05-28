import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RecipeDto {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  @IsNotEmpty()
  Name: String;

  @Column()
  @IsNotEmpty()
  ready_in: Number;

  @Column()
  @IsNotEmpty()
  directions: String;

  @Column('text', { array: true })
  @IsNotEmpty()
  ingredients: String;
}
