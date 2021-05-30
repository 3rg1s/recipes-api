import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { RecipesController } from './controller/recipes.controller';
import { recipeEntity } from './models/recipe.entity';
import { RecipesService } from './service/recipes.service';

@Module({
  imports: [TypeOrmModule.forFeature([recipeEntity]), AuthModule],
  controllers: [RecipesController],
  providers: [RecipesService],
  exports: [RecipesService],
})
export class RecipesModule {}
