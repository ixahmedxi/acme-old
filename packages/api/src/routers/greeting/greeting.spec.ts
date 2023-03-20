import { createContextInner } from '../../utils/context';
import { greetingRouter } from './greeting.router';

describe('greeting router', () => {
  it('should return the greeting', async () => {
    const ctx = createContextInner({});

    const caller = greetingRouter.createCaller(ctx);

    const result = await caller.greeting();

    expect(result).toEqual({
      message: 'Hello World!',
    });
  });
});
