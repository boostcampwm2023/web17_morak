import { BadRequestException, PipeTransform } from '@nestjs/common';
import { MogacoStatus } from '../enum/mogaco-status.enum';

export class MogacoStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [MogacoStatus.RECRUITING, MogacoStatus.CLOSED, MogacoStatus.COMPLETED];

  transform(value: any) {
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
