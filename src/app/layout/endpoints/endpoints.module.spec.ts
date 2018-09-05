import { EndpointsModule } from './endpoints.module';

describe('EndpointsModule', () => {
  let endpointsModule: EndpointsModule;

  beforeEach(() => {
    endpointsModule = new EndpointsModule();
  });

  it('should create an instance', () => {
    expect(endpointsModule).toBeTruthy();
  });
});
