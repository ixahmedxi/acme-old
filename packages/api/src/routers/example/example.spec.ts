import { createContextInner } from '../../utils/context';
import { exampleRouter } from './example.router';

describe('greeting router', () => {
  it('should return the greeting', async () => {
    const ctx = createContextInner({});

    const caller = exampleRouter.createCaller(ctx);

    const result = await caller.hello();

    expect(result).toEqual({
      message: 'Hello World!',
    });
  });
});
