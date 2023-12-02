import { IPattern } from '../interfaces/pattern.interface';

export class Pattern {
  constructor(private readonly service: string) {
    this.service = service;
  }

  generate(cmd: string): IPattern {
    return {
      service: this.service,
      cmd,
    };
  }
}
