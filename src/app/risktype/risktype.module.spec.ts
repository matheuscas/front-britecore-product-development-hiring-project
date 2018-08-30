import { RisktypeModule } from './risktype.module';

describe('RisktypeModule', () => {
  let risktypeModule: RisktypeModule;

  beforeEach(() => {
    risktypeModule = new RisktypeModule();
  });

  it('should create an instance', () => {
    expect(risktypeModule).toBeTruthy();
  });
});
