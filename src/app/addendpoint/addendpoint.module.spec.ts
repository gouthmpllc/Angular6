import { AddendpointModule } from './addendpoint.module';

describe('AddendpointModule', () => {
    let addendpointModule: AddendpointModule;

    beforeEach(() => {
        addendpointModule = new AddendpointModule();
    });

    it('should create an instance', () => {
        expect(addendpointModule).toBeTruthy();
    });
});
