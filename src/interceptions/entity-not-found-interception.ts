import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EntityNotFoundError } from 'src/users/entity-not-found-error';

//interceptar um erro que deu, e linkar ele com um erro http ja existente.

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof EntityNotFoundError) {
          throw new NotFoundException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}