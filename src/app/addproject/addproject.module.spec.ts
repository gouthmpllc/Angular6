import { AddprojectModule } from './addproject.module';

describe('AddprojectModule', () => {
  let addprojectModule: AddprojectModule;

  beforeEach(() => {
    addprojectModule = new AddprojectModule();
  });

  it('should create an instance', () => {
    expect(addprojectModule).toBeTruthy();
  });
});
