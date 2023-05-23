import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LitansModule } from './litans/litans.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    LitansModule,
    MongooseModule.forRoot(
      'mongodb+srv://bavrzar:kmYwvDKazuFFVnyG@cluster0.rnlg5o2.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
