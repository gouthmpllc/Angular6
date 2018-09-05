import { GatewaysModule } from './gateways.module';

describe('GatewaysModule', () => {
    let gatewaysModule: GatewaysModule;

    beforeEach(() => {
        gatewaysModule = new GatewaysModule();
    });

    it('should create an instance', () => {
        expect(gatewaysModule).toBeTruthy();
    });
});
