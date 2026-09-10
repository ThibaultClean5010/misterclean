import { handleQuote } from '../server/quote-handler.js';

export default { fetch: request => handleQuote(request) };
