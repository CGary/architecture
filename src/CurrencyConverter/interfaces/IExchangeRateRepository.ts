import { ExchangeRate } from '../entities/ExchangeRate';

export interface IExchangeRateRepository {
  getExchangeRate(): Promise<ExchangeRate>;
}
