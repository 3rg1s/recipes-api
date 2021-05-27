import { Module } from '@nestjs/common';
import { RecipesController } from './controller/recipes.controller';
import { RecipesService } from './service/recipes.service';

@Module({
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
