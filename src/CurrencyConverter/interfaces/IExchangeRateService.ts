import { ExchangeRate } from '../entities/ExchangeRate';

export interface IExchangeRateService {
  fetchExchangeRate(): Promise<ExchangeRate>;
}
